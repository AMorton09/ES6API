# bndapi

*Application programming interface* for the application(s) that need it.

---

## Table of Contents

- [About](#about)
  - [API Basics](#api-basics)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Database Setup](#database-setup)
    - [Installation Instructions](#installation-instructions)
  - [API Setup](#api-setup)
    - [Development and Production Builds](#development-and-production-builds)]
  - [API Deployment](#api-deployment)
    - [Deployment Instructions](#deployment-instructions)
- [Resources](#resources)

---

## About

An **API** helps link one or a number of applications with the data it needs. Its utility provides a great separation of concerns when you have multiple developers working on the front-end/client application, the API server or the database.

Most importantly, the API serves as a security layer between the client and the database. The applications using this API will rely on JSON web tokens to validate users making any requests. This security layer will ensure only the user's who need access to read or write data will be able to do so.

### API Basics

A general flow of interfacing/interacting with an API:

- A user on the front-end/client application will need to first:
  - Request to create an account or sign up for the front-end/client application by submitting the necessary details to the API.
  - Login using an existing username and password and submitting it to the API where it will validate or not by sending the user a JSON web token that is stored on the device with a cookie.
- Once a user has logged in/validated their credentials:
  - More times than not, a redirect to the application's **Home** page or screen.
  - As long as the user has not closed their web browser or mobile app, they will be able to interact with the application by visiting other pages, editing their profile or whatever the application's purpose is in the first place.

## Technologies

Now featuring the following technologies:

- [EcmaScript 6] JavaScript within the codebase
- [ExpressJS] server to serve content to the requesting application(s)
- [MongoDB] database to store content from/for the application(s)
- [Webpack] for development and production builds
- JSON web tokens for client-server authentication

---

## Getting Started

Below you will find instructions for installing [MongoDB], cloning the repository from source control and learning about the technologies used within this project.

### Database Setup

#### Installation Instructions

If you have not already installed [MongoDB] for your machine, please do that first before starting any development.

Installation instructions:

- [MongoDB for Linux]
- [MongoDB for macOS]
- [MongoDB for Windows]

### API Setup

This section will help you clone the repository and get started with your development/production builds!

#### Development and Production Builds

This project's SCM (source control manager) is currently [GitHub].

1. Clone repository using:
    - `git clone https://github.com/jpizzitola/bndapi.git`
    - **Note**: This should immediately run `yarn` and install local dependencies, then build your DLL (cached) files for improved development build times.
1. Change into the newly cloned project directory:
    - `cd bndapi`
1. Ensure you have the necessary dependencies installed:
    - **Global** dependencies:
    - `yarn global add cross-env prettier-standard webpack webpack-dev-server`
    - **Project** dependencies:
    - `yarn`
1. Start the API for *development*:
    - `yarn run start`
1. Build the API for *production*:
    - `yarn run build`

### API Deployment

The API is hosted - currently for free - on a service called [Heroku]. Depending on project necessities, a paid version may be required - or another solution/service.

#### Deployment Instructions

*TBD*...

---

## Resources

Confused on how to do something?

Maybe these resources can help.

### ES6

If you are curious about the different looking JavaScript than you are accustomed, it is important to note that we are using a *pre-release* version of JavaScript. That is, it is not yet the standard and is not available within all browsers - however, that is soon to change.

[Webpack] compiles the [EcmaScript 6] JavaScript - or **ES6** - into code that is readable by most browsers.  If you are interested in how this happens, check out Facebook's [babelJS] for more information.

### Webpack

[Webpack] is our compiler for both development and production builds.  It uses [babelJS] to take our **ES6** and make it more *modern* browser-friendly. It is different than other tools you might have used in the past - such as [Grunt] or [Gulp] - as those are task runners and not compilers.

[Webpack] is a powerful tool and will aid/increase your development times once mastered. That being said, it can be quite confusing to anyone unfamiliar with JavaScript.

---

  [babelJS]: <http://babeljs.io/>
  [EcmaScript 6]: <http://es6-features.org/>
  [ExpressJS]: <http://expressjs.com/>
  [GitHub]: <https://www.github.com>
  [Grunt]: <https://gruntjs.com/>
  [Gulp]: <https://github.com/gulpjs/gulp/>
  [Heroku]: <https://www.heroku.com/>
  [MongoDB]: <https://www.mongodb.com/>
  [MongoDB for Linux]: <https://docs.mongodb.com/manual/administration/install-on-linux/>
  [MongoDB for macOS]: <https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/>
  [MongoDB for Windows]: <https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/>
  [Webpack]: <https://webpack.js.org>