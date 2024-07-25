import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs'
import * as route53 from 'aws-cdk-lib/aws-route53'


/*
   cdk.StackProps includes:
   {
     env?: {
       account?: string,
       region?: string,
     },
     stackName?: string,
   }
*/
export interface GigsSettings extends cdk.StackProps {
  certArn: string,
  permissionsBoundaryPolicyName: string,
  domainName: string,
  subDomain: string,
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: GigsSettings) {
    super(scope, id, props)

    // The code that defines your stack goes here

    // to use in route 53 etc
    const fullDomain = `${props.subDomain}.${props.domainName}`
    const flyerDomain = `flyers-${props.subDomain}.${props.domainName}`

    // These ones are mine
    cdk.Tags.of(this).add('Name', props.stackName!)
    cdk.Tags.of(this).add('Academy', props.stackName!)

    // Set a permissions boundary
    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      'Boundary',
      props.permissionsBoundaryPolicyName
    )
    iam.PermissionsBoundary.of(this).apply(boundary)

    // Lookup cert for domain *.ngei-sot.academy
    const cert = acm.Certificate.fromCertificateArn(
      this,
      'cert',
      props.certArn,
    )

    // Bucket to put static flyer data in
    const flyersBucket = new s3.Bucket(this, 'flyers-hosting', {
      bucketName: `${props.subDomain}-flyers-hosting`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // security
      encryption: s3.BucketEncryption.S3_MANAGED // security
    })
    flyersBucket.addToResourcePolicy( // security
      new iam.PolicyStatement({
        resources: [
          flyersBucket.arnForObjects('*'),
          flyersBucket.bucketArn
        ],
        actions: [ 's3:*' ],
        effect: iam.Effect.DENY,
        conditions: {
          Bool: { 'aws:SecureTransport': 'false' }
        },
        principals: [ new iam.AnyPrincipal() ],
      })
    )

    // Bucket to put static react code in later
    const clientBucket = new s3.Bucket(this, 'client-hosting', {
      bucketName: `${props.subDomain}-client-hosting`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // security
      encryption: s3.BucketEncryption.S3_MANAGED // security
    })
    clientBucket.addToResourcePolicy( // security
      new iam.PolicyStatement({
        resources: [
          clientBucket.arnForObjects('*'),
          clientBucket.bucketArn
        ],
        actions: [ 's3:*' ],
        effect: iam.Effect.DENY,
        conditions: {
          Bool: { 'aws:SecureTransport': 'false' }
        },
        principals: [ new iam.AnyPrincipal() ],
      })
    )

    const lambdaEnvVars = {
      NODE_ENV: 'production',
    }

    const bundling = {
      externalModules: ['aws-sdk'],
    }

    // Healthcheck api lambda
    const healthcheckLambda = new nodejs.NodejsFunction(this,
      'healthcheck-lambda',
      {
        functionName: `${props.subDomain}-healthcheck-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/utility-lambdas.ts',
        handler: 'healthcheckGetHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(3), // default
        bundling,
      })

    // Lambdas to talk to the database
    // -- gigs --
    const getGigsLambda = new nodejs.NodejsFunction(this, 'get-gigs-lambda',
      {
        functionName: `${props.subDomain}-get-gigs-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/aurora-lambdas.ts',
        handler: 'gigsGetHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(30),
        bundling,
      }
    )
    const postGigLambda = new nodejs.NodejsFunction(this, 'post-gig-lambda',
      {
        functionName: `${props.subDomain}-post-gig-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/aurora-lambdas.ts',
        handler: 'gigPostHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(30),
        bundling,
      }
    )
    // -- users --
    const getUsersLambda = new nodejs.NodejsFunction(this, 'get-users-lambda',
      {
        functionName: `${props.subDomain}-get-users-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/aurora-lambdas.ts',
        handler: 'usersGetHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(30),
        bundling,
      }
    )
    const postUserLambda = new nodejs.NodejsFunction(this, 'post-user-lambda',
      {
        functionName: `${props.subDomain}-post-user-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/aurora-lambdas.ts',
        handler: 'userPostHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(30),
        bundling,
      }
    )
    // -- tickets --
    const getTicketsLambda = new nodejs.NodejsFunction(this, 'get-tickets-lambda',
      {
        functionName: `${props.subDomain}-get-tickets-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/aurora-lambdas.ts',
        handler: 'ticketsGetHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(30),
        bundling,
      }
    )
    const postTicketLambda = new nodejs.NodejsFunction(this, 'post-ticket-lambda',
      {
        functionName: `${props.subDomain}-post-ticket-lambda`,
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: './functions/aurora-lambdas.ts',
        handler: 'ticketPostHandler',
        environment: lambdaEnvVars,
        timeout: cdk.Duration.seconds(30),
        bundling,
      }
    )

    // API GW.
    // TODO

    // API GW rate limiting
    // TODO

    // healthcheck lambda method on API
    // TODO

    // gigs GET lambda method on api
    // TODO

    // users GET lambda method on api
    // TODO

    // tickets GET lambda method on api
    // TODO

    // gigs POST lambda method on api
    // TODO

    // users POST lambda method on api
    // TODO

    // tickets POST lambda method on api
    // TODO


    // Redirects lambda to send folks to the right place in cloudfront
    const redirectsFunction = new cloudfront.Function(this, 'redirects-function',
      {
        code: cloudfront.FunctionCode.fromFile({
          filePath: 'functions/redirects.js',
        }),
      }
    )

    // Cloudfront sits in front of S3 bucket
    const flyersDistribution = new cloudfront.Distribution(this, 'flyers-distribution',
      {
        defaultBehavior: {
          origin: new origins.S3Origin(flyersBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
        defaultRootObject: 'index.html',
        domainNames: [ flyerDomain ],
        certificate: cert,
        webAclId: undefined, // Don't add firewall / VPN restriction,
      }
    )
    // Copy flyers into bucket - depends on both Bucket and Cloudfront Distribution
    new s3Deployment.BucketDeployment(this, 'flyers-deployment', {
      destinationBucket: flyersBucket,
      sources: [ s3Deployment.Source.asset('../gig-flyers') ], // relative to CDK folder
      retainOnDelete: false,
      distribution: flyersDistribution, // invalidate this
      distributionPaths: [ '/*' ], // invalidate everything
      prune: true,
      memoryLimit: 256, // in case folder is big
    })

    // Cloudfront sits in front of S3 bucket and the API GW
    const clientDistribution = new cloudfront.Distribution(this, 'client-distribution',
      {
        defaultBehavior: {
          origin: new origins.S3Origin(clientBucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          functionAssociations: [
            { // redirects handler
              eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
              function: redirectsFunction,
            },
          ],
          // allow query params from CF into the lambdas
          originRequestPolicy: new cloudfront.OriginRequestPolicy(this, 'request-policy', {
            queryStringBehavior: cloudfront.OriginRequestQueryStringBehavior.all()
          }),
        },
        priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
        defaultRootObject: 'index.html',
        domainNames: [ fullDomain ],
        certificate: cert,
        webAclId: undefined, // Don't add firewall / VPN restriction,

        // Additional CF behaviors to link to API
        // TODO
      }
    )

    // Copy react output into bucket - depends on both Bucket and Cloudfront Distribution
    new s3Deployment.BucketDeployment(this, 'client-deployment', {
      destinationBucket: clientBucket,
      sources: [ s3Deployment.Source.asset('../client/dist') ], // different per project, relative to CDK folder
      retainOnDelete: false,
      distribution: clientDistribution, // invalidate this
      distributionPaths: [ '/*' ], // invalidate everything
      prune: true,
      memoryLimit: 256 // react folder can be big
      // See https://github.com/aws/aws-cdk/issues/4058 and https://github.com/aws/aws-cdk/pull/4204/files
    })

    const zone = route53.HostedZone.fromLookup(this, 'zone', {
      domainName: props.domainName,
    })

    new route53.CnameRecord(this, 'client-record', {
      zone,
      domainName: clientDistribution.domainName,
      recordName: fullDomain,
    })
    new route53.CnameRecord(this, 'flyers-record', {
      zone,
      domainName: flyersDistribution.domainName,
      recordName: flyerDomain,
    })

    // OUTPUTS

    // Raw api url
    // TODO

    // Pretty api url
    // TODO

    new cdk.CfnOutput(this, 'ClientBucketName', {
      value: clientBucket.bucketName,
    })
    new cdk.CfnOutput(this, 'FlyersBucketName', {
      value: flyersBucket.bucketName,
    })
    new cdk.CfnOutput(this, 'ClientUrl', {
      value: `https://${fullDomain}`,
    })
    new cdk.CfnOutput(this, 'FlyersUrl', {
      value: `https://${flyerDomain}`,
    })
    new cdk.CfnOutput(this, 'FlyersExampleUrl', {
      value: `https://${flyerDomain}/gig-001-flyer.pdf`,
    })
  }
}
