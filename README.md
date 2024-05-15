
# Lexart Fullstack App
In this project was created a product app to do the CRUD operations and filtering with user auth. 

## Deployed
https://lexart-fullstackapp-front-end.vercel.app/

## Stacks

**Front-end:** React, React-Router-DOM v6, CSS, HTML, JS.

**Back-end:** Node, Express, Postgres, Sequelize.


## Features

- User login and signup with MD5 and JsonWebToken
- CRUD products and filtering
- Autenticação com JsonWebToken
- CSS responsive

## Installation

Clone the project

```bash
  git clone git@github.com:luizlacerdam/lexart-fullstackapp.git
```

go to project back-end repo

```bash
  cd /back-end
```

Install dependencies

```bash
  npm install
```

Migrate db

```bash
  npm run db:reset
```

Start back-end

```bash
  npm run dev
```

go to project front-end repo

```bash
  cd ../front-end
```

Install dependencies

```bash
  npm install
```

Start front-end

```bash
  npm run dev
```


## Env

To run this project you will have to get this variables in you env .env

back-end

`PORT`

`POSTGRES_USER`

`POSTGRES_HOST`

`POSTGRES_PASSWORD`

`POSTGRES_DATABASE`

front-end

`VITE_HOST`

`VITE_PROTOCOL`

`PORT`

