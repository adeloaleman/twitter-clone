#! /bin/sh

# I modified the project so now I'm using SQLite so this won't be used
export DATABASE_HOST=localhost
export DATABASE_PORT=5432
export DATABASE_USER=postgres
export DATABASE_PASSWORD=secret
export DATABASE_DB=twitterclone_db

# This is needed even when using SQLite
export AUTH_SECRET=miclaveprivada

