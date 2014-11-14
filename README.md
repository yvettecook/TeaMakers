## TeaMakers

## Problem & Solution

At Makers Academy it can be hard to form teams for projects, taking into account everyone's preferences.

This tool will help rank people's preferences, and suggest possible team groupings.

## Progress

Curent status is:

Basic front end where users can:
  * create a new makeathon
  * view details of the makeathon
  * add a project to a makeathon

Database built with MongoDB and Mongoose which has schema and models for:
  * Makeathons
  * Projects
  * Students

Models also have various methods to interact with each other, and provide output to the front end


## Tools

* ejs: "1.0.0"
* express: "4.9.0"
* express-ejs-layouts: "1.1.0"
* js-combinatorics: "0.4.0"
* mongo
* mongoose: "3.8.19"
* underscore-node: "0.1.2"

Testing:

* chai: "1.10.0",
* jasmine-expect: "1.22.2"
* jasmine-node: "1.14.5"
* mocha: "2.0.1"
* zombie: "2.1.1"


## To Do

- [ ] Tidy up router methods, and push out the logic to the models.
- [ ] Each project to displaying the ranking from each student.
- [ ] Algorithm to calculate possible cohort groupings

## Learning

We've learnt a lot from this project - primarily probably that Node's power does not lie in building multi-page websites with broadly static content, but instead for dynamic single-page apps.

## Team

* [@andrewhercules](https://github.com/andrewhercules)
* [@barr-code](https://github.com/barr-code)
* [@yvettecook](https://github.com/yvettecook)
