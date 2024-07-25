# Databases (Relational) Examples

This folder has all the sources for the Relational DB session.

## Useful scripts for Exercises

Some utility scripts are provided so we can concentrate on the required JavaScript:

- `./docker-compose-run-all.sh` to build and test everything
- `./docker-compose-setup-all.sh` to build and start Postgres and the api app
- `./call-express-app.sh` to test your API code
- `./docker-compose-retest-app.sh` to re-build and test the api app

## Troubleshooting

On Windows, but also some Macs/unix, you may need to make the `*.sh` files executable after unzipping;

- `chmod -R a+x *.sh`

---

console.log("getTeachers")
// http GET
// see ../call-express-app.sh for url examples
// table is 'teacher' - see ../db-scripts/setup-tables.sql

    console.log('getTeacherById')
    // http GET
    // see ../call-express-app.sh for url examples
    // use request.params to get the data
    // table is 'teacher', column is 'teacher_id' - see ../db-scripts/setup-tables.sql

console.log("createTeacher: body=", request.body)
// http POST
// see ../call-express-app.sh for url examples
// use request.body to get the data
// use 'INSERT ... RETURNING teacher_id'
// See ../db-scripts/setup-tables.sql for the field names

    console.log("updateTeacher: body=", request.body)

// http PUT
// use request.body to get the data
// see ../call-express-app.sh for url examples

console.log("deleteTeacher")
// http DELETE
// use request.params to get the data
// see ../call-express-app.sh for url examples
