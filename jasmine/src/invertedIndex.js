// class name InvertedIndex is an object that contains methods to read the file.
var InvertedIndex = function() {
  // the booksarray variable to store the JSON form of the file
  this.booksArray = null;

  var self = this;

  this.readFile = function(done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "./books.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        self.booksArray= JSON.parse(xhr.responseText);
        done();
      }
    };
    xhr.send();
  };

  // property to check whether the file is empty and return a boolean result
  this.isFileEmpty = function() {
    if (self.booksArray) { // condition checks whether the file, once read, contains any text
      return false;
    } else {
      return true;
    }
  };

  // property to check whether the word searched appears in of the array items and 
  // return the index of the array item
  this.testIndexCreated = function(testWord) {
    var index = -1; // initialised index to -1 to show that the search word does not exist in the JSON object
    for (var i = 0, n = self.booksArray.length; i < n; i++) {
      if (((self.booksArray[i].text).indexOf(testWord) > -1) || ((self.booksArray[i].title).indexOf(testWord) > -1)) {
        index = i; 
      }
    }
    return index;
  };

  // property to check whether the index of the array item in whith the search word appears, 
  // is mapped to the correct array item.
  this.getIndex = function(testWord) {
    var indexArray = [];
    for (var i = 0, n = self.booksArray.length; i < n; i++) {
      if (((self.booksArray[i].text).indexOf(testWord) > -1) || ((self.booksArray[i].title).indexOf(testWord) > -1)) {
        indexArray.push(i); //accessing the title property of the array element object
      }
    }
    if (indexArray) {
      return indexArray;
    } else {
      return -1;
    }
  };

  // property that store the indices of the array elements where the search word appears, in an array
  this.searchIndex = function() {
    var searchResults = [];
    for (var m = 0; m < arguments.length; m++) {
      for (var i = 0, n = self.booksArray.length; i < n; i++) {
        if (((self.booksArray[i].text).indexOf(arguments[m]) > -1) && ((self.booksArray[i].text).indexOf(arguments[m]) !== null)|| ((self.booksArray[i].title).indexOf(arguments[m]) > -1) && ((self.booksArray[i].text).indexOf(arguments[m]) !== null)) {
          searchResults.push(i); // pushes the index where search word appears into array searchResults
        }
      }
    }
    return searchResults;
  };
};
