import { Database } from "jsr:@db/sqlite@0.11"

const db = new Database("test.db")

const [ version ] = db.prepare("select sqlite_version()").value<[string]>()!
console.log("sqlite", version)

db.sql`
    drop table if exists People;
`
db.sql`
    create table People (
        name text,
        age int,
        occupation text
    )
    ;
`
db.sql`
    insert into People (
        name,
        age,
        occupation
    )
    values (
        'John',
        40,
        'Software Developer'
    )
    ;
`

db.close()
