# ExplainAI

This is a monorepo composed of two packages.

- `hasura` (Backend as a service)
- `nextjs` (Static site generator)

# Quick Start

1. Ensure Docker is running
2. `yarn start`

## Terminal 1. Launch the database

The database runs inside a Docker container.

1. You will need to [install Docker](https://docs.docker.com/desktop/install/mac-install/)
2. Ensure it is running on your computer to run the database.
3. Run the following commands

```bash
cd database
npm run start
```

## Terminal 2. Launch the API

1. Inside the /api directory, duplicate the `.env.example` file and rename the copy to `.env`.
2. Run these commands

```bash
cd api
npm install
npm run start
```

## Terminal 3. Launch the Web App

1. Run these commands

```bash
cd web
npm install
npm run start
```

## Confirm Working

If you visit `http://localhost:3000` in your browser, you should see a blob of JSON that is being fetched from the database, via the api, and rendered on the front end. 👍
