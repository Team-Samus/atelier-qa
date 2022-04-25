# Atelier Questions & Answers API

An API service for the Atelier products' questions and answers.

## Quickstart

1. From the root directory, install dependencies: `npm i`
2. Rename `example.env` to `.env`, replacing any local environment variables with your own.
3. Complete the DB setup (steps below).
4. Start up the server with `npm run start`.

## DB Setup

1. Make sure PostgreSQL is installed and running. If it is, you'd better go catch it.
2. Create a `qa` database in postgres using `psql qa`
3. From the root directory, create your tables `psql qa < src/schema.sql`

Seed data instructions TBD.