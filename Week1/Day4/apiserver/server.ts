//create a express server
 
//1.import express
import express from 'express';
//2. create an express instance
const app= express();
 
//3. create an endpoint using get/put/post/delete
app.get('/hello',(req,res)=>{
    //simply return a response
    res.write("Hello response from the express server");
    res.write("second hello");
    //end the message
    res.end();
});

app.get('/courses',(req,res)=>{
    //simply return a response
    var courses = ['Java', "Python", 'Go', 'scala'];
    //end the message
    res.send(courses);
});

app.get('/product',(req,res)=>{
    //simply return a response
    var products = {
        "id":1,
        "name":'Laptop',
        "price":'40000'
    };
    //end the message
    res.send(products);
});

app.get('/users',(req,res)=>{
    //simply return a response
    res.write("list of users");
    //end the message
    res.end();
});

app.get('/users2/:name',(req,res)=>{
    //end the message
    res.send('Good evening ' + req.params.name);
});

app.get('/users3/user',(req,res)=>{
    const query = req.query.id;
    //end the message
    res.send('Good evening ' + query);
});

//3.4 Creating an endpoint with query string param - http://localhost:3400/courses/byid?id=3
app.get('/courses/byid',(req,res)=>{
    const query = req.query.id;
    res.send('Good Evening User, you are enrolled in Angular with courseid as  - '+ query);
})


app.use(express.json());

// login api
app.post('/user/login',(req,res)=>{
    console.log("To create a user login - pass the info as post body",req.body.user);
    const object = req.body.user;
    //send a response
    res.json({result:object})
})

// create product api
app.post('/create/product',(req,res)=>{
    const object = req.body.product;
    //send a response
    res.json({result:object})
})
 
//4. Listen to a port no
// declare the port
const PORT = 3500;
app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT}`);
});