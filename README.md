# OpenSourceTable - Reviews

> This component displays the ratings and reviews for a given restaurant. It allows the user to sort and filter reviews, click through different pages of reviews, and read more/read less of individual reviews.

## Related Projects

  - https://github.com/CodeRoundTheCampfire/reservations
  - https://github.com/CodeRoundTheCampfire/About-Map
  - https://github.com/CodeRoundTheCampfire/searchbar
  - https://github.com/CodeRoundTheCampfire/photo-stream

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

From within the root directory:

### Installing Dependencies

```sh
npm install -g webpack
npm install
```

### Seeding MySQL Database

Run the following command to seed the database.

Seeding is complete once you see the following terminal output:

*Finished seeding table: details*
*Finished seeding table: users*
*Finished seeding table: reviews*

If your MySQL root user requires a password:
Update password in **seedReviews.js**

From within the root directory:

```sh
$ npm run seed-db
```

Then start MySQL or ensure it is running.

```sh
$ mysql.server start
```

### Starting Webpack 

```sh
$ npm run dev-react
```

### Running Server

If your MySQL root user requires a password:
Update password in **/server/db/index.js**

```sh
$ npm start
```

### Open Chrome, and PROFIT!

To render restaurant of id **n** where **n** is between 1-267:

```sh
http://localhost:3002/?id=n
```

Or to default to restaurant of id **n**=1:

```sh
http://localhost:3002
```
