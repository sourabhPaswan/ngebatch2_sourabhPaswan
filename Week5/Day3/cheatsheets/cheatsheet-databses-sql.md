# Database Cheatsheet

These are based on Postgres flavour SQL.

## DDL

### CREATE Clause

```sql
CREATE TABLE drink (
    id INTEGER GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100),
    type VARCHAR(100),
    temperature VARCHAR(100),
    PRIMARY KEY(id)
);
```

### ALTER Clause

```sql
ALTER TABLE drink ADD milky TINYINT;
```

### DROP Clause

```sql
DROP TABLE drink
```

### Useful commands:

```sql
show databases

use <database>

describe <table>
```

## DML

### SELECT Clause

```sql
SELECT * FROM drink WHERE type='tea' ORDER BY temperature DESC
```

### INSERT Clause

If `id` is not auto-generated

```sql
INSERT INTO drink (id, name, type, temperature) 
    VALUES (123, 'americano', 'coffee', 'hot')
```

If `id` is auto-generated

```sql
INSERT INTO drink (name, type, temperature) 
    VALUES ('americano', 'coffee', 'hot')
    RETURNING id
```

### UPDATE Clause

```sql
UPDATE drink SET temperature = 'cold' WHERE type = 'tea'
```

### DELETE Clause

```sql
DELETE FROM drink WHERE type = 'tea'
```
