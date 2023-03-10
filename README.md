[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project was built with [Nest](https://github.com/nestjs/nest).

## Requeriments

- Docker
- nodejs LTS

## Tech stack

- nestjs
- docker
- nodejs
- jest

## Installation

```bash
$ git clone git@github.com:aandresflorezlopez/arbigrateenginenestjsapi.git
$ docker-compose build
$ docker-compose up -d
```

_note_: wait until the _app_ service can connnect with the database. I need to give some seconds until the database service is already done.

## Run seeders

```bash
$ docker exec -it arbigrateenginenestjsapi-app-1 npm run seed:run
```

_note_: make sure the container name. It could be change if you modify the repository name. To see the container name, run:

```bash
$ docker ps
```

Currency exchange available for the challenge are:

- USD/COP
- COP/BRL
- BRL/USD

## Running the app without docker

```bash
# development
$ npm run start
```

_note_: we need to run a container with the database

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## Enpoints

```bash
# arbitrage /POST endpoint
$ localhost:3000/arbitrages

body: {
  currencyPair: 'USD/COP',
  amount: 10
}
```

```bash
# rates /GET endpoint
$ localhost:3000/rates
```

## environtment

```
# database
# # db: docker container host; localhost: local host;
MYSQL_HOST=
# # container port: 3306 | local client port: 2401"
MYSQL_PORT=
MYSQL_USER='root'
MYSQL_PASSWORD='root'
MYSQL_DB='rates'
```

## transactions

./dump-transactons.csv

## Stay in touch

- Author - [Andres Florez Lopez](https://andresflorezlopez.com)

## License

Nest is [MIT licensed](LICENSE).
