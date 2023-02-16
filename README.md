# ExplainAI

This is a monorepo composed of three packages.

- Web (Front End)
- API (Back End)
- Database

### Quick Start

To run the application, you will need to open 3 terminal instances and run each of these steps in a separate terminal.

1. Launch the database

The database runs inside a Docker container. You will need to [install Docker](https://docs.docker.com/desktop/install/mac-install/) and ensure it is running on your computer to run the database.

```bash
cd database
npm run start
```

2. Launch the API

```bash
cd api
npm install
npm run start
```

3. Launch the React Web App

```bash
cd web
npm install
npm run start
```
