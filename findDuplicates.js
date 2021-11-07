"use strict";
const finderController = require("./api/controllers/duplicatesFinder.controller");

const finder = new finderController.default();

const files = finder.findDuplicates(process.argv[2]);
