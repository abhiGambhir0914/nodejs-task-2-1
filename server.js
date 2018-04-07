const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3030;

var list = [];
var nums = [];
var countObj = [];


fs.readFile('sample.txt', 'utf8', function(err, data) {

    var lines = data.split('\n');
    for (var line = 0; line < lines.length; line++) {
      list.push(parseInt(lines[line]));
    }

    for (var i = 0; i < 100; i++) {
      nums.push(i);
    }

    // console.log(list);
    // console.log(nums);


    function characterCount(word, character) {
      var count = 0;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === character) {
          count++;
        }
      }
      return count;
    }

    for (var i = 0, l = nums.length; i < l; i++) {
      var currentChar = nums[i];
      countObj[currentChar] = characterCount(list, currentChar);
    }

    for(var i=0; i<nums.length; i++){
      // console.log();
      for(var j=0; j<countObj[i]; j++){
        fs.appendFile('sorted.txt',i + '\n', (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

        });
        // console.log(i);
      }
    }

});

app.listen(port, () => console.log(`Server set up at ${port}`));
