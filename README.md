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

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding MySQL Database

From within the root directory:

```sh
$ npm run seed-db
```

If your MySQL root user requires a password:
Update password in **seedReviews.js**

Seeding is complete once you see the following terminal output. May take several minutes.

```sh
Finished seeding table: details
Finished seeding table: users
Finished seeding table: reviews
```

Once seeding is complete, ensure MySQL is running:

```sh
$ mysql.server start
```

### Starting Webpack and Running Server

From within the root directory:

```sh
$ npm start
```

If your MySQL root user requires a password:
Update password in **/server/db/index.js**

### Open Chrome, and PROFIT!

You can render restaurants of id **n** where **n** is between 1-267:

```sh
http://localhost:3002/?id=n
```

Example: render restaurant of id **n**=122:

```sh
http://localhost:3002/?id=122
```

Default: render restaurant of id **n**=1:

```sh
http://localhost:3002
```
