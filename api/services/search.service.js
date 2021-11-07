"use strict";

const fs = require("fs");
const path = require("path");
const md5File = require('md5-file')

let files;

class SearchService {
    constructor() {
      files = [];
    }

    search(directory) {
      const filesInDirectory = fs.readdirSync(directory);

      for (const file of filesInDirectory) {
        const absolutePath = path.join(directory, file);
      
        if (fs.statSync(absolutePath).isDirectory()) {
          try {
            this.search(absolutePath);
          } catch (error) {
            console.log(error);
          }
        } else {
            const hash = md5File.sync(absolutePath);

            const newFile = {
                path: absolutePath.split("\\").join("/"),
                hash: hash
            };
            files.push(newFile);
        }
      }

      return files;
    };
}

exports.default = SearchService;
