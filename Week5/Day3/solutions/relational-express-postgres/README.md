# Databases (Relational) Examples

This folder has all the sources for the Relational DB session.

## Useful scripts for Exercises

Some utility scripts are provided so we can concentrate on the required JavaScript:

- `./docker-compose-setup-all.sh` to setup a fresh Postgres and the Schema
    - This also builds and starts your api app
- `./call-express-app.sh` to test your API code
- `./docker-compose-run-all.sh` both of the above
- `./docker-compose-retest-app.sh` to re-do the app and api test
    - This also builds and starts your api app

## Troubleshooting

On Windows, but also some Macs/unix, you may need to make the `*.sh` files executable after unzipping;

- `chmod -R a+x *.sh`
