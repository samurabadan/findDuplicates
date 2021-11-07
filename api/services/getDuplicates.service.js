"use strict";

class getDuplicatesService {
    constructor() { }

    get(files) {
      let sortedfiles = {};

      try {
        for(let i = 0; i < files.length; i++) {
            if(sortedfiles[files[i].hash]) {
                sortedfiles[files[i].hash].quantity += 1;
                sortedfiles[files[i].hash].paths.push(files[i].path);

                console.log("(original: '" + sortedfiles[files[i].hash].paths[0] + "', duplicate: '" + sortedfiles[files[i].hash].paths[i] +"')");
            } else {
                sortedfiles[files[i].hash] = {
                    quantity: 1,
                    paths: [files[i].path]
                }
            }
        }
    } catch (error) {
        console.log(error);
    }

    return sortedfiles;
  }
}

exports.default = getDuplicatesService;
