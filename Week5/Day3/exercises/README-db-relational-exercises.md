# Databases (Relational) Exercises

These are some optional extra activities you can perform to extend you skills.

All of these can be based off the `exercises` or `solution` files for this session - think of these exercises as re-creating that for yourself.

## Exercises

### Make a new Pokemon schema

Create a new set of schema files for a Pokemon game; Try these in a postgres container;

- A CREATE TABLE for Pokemon details (pokemon_id, pokemon_name, pokemon_type)
- A CREATE TABLE for the Users of your system (player_id, first_name, last_name)
- A CREATE TABLE for a _mapping_ table for the Pokemon you have collected to link the two tables above
    - I.e it should have the pokemon_id and player_id only
- A data file to INSERT sample data into all the above tables
- Set this up in your postgres container
- Make and run a SELECT that lists all pokemon
- Make and run a SELECT that lists all pokemon and all linked player id in the mapping table (JOINs)
- Make and run a SELECT that lists all players and all linked pokemon ids in the mapping table (JOINs)
- Make and run a SELECT that lists all pokemon and all players via the mapping table (i.e. JOINs all three tables)

### In a container

- Make a container (or re-use the one from the exercises);
    - Make a new `Dockerfile` for the db that starts with `FROM postgres:latest`
- Put your scripts in the postgres container startup folder as sequentially numbered files - see folder `examples/relational-express-postgres/db-scripts/Dockerfile`
- Start the container and check it has your data
- You could look at `docker logs` to check it

### Using the db in docker-compose

- Start your container via a docker-compose file

### Using Express

- Create a new express app to talk to your database
- Add a `db-handler.js` module
- Add a connection pool - see the `examples`
- Add http GET handlers to fetch data with SELECT statements
- Add http POST handlers to add data with INSERT statements

### Using the app in docker-compose

- Make a new `Dockerfile` for the app
- Put in in the `docker-compose`
- Start it up with the db

...profit!
