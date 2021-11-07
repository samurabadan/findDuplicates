"use strict";
const searchService = require("../services/search.service");
const getDuplicatesService = require("../services/getDuplicates.service");

let search;
let getDuplicates;

class DuplicatesFinderController {
    constructor() { 
        try {
            search = new searchService.default();
            getDuplicates = new getDuplicatesService.default();
        } catch (error) {
            console.log(error);
        }
    }
    
    findDuplicates(directory = "C:\\") {
        const files = search.search(directory);
        getDuplicates.get(files);
    };
}

exports.default = DuplicatesFinderController;
