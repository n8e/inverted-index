import { readFileSync } from 'fs';

// class name InvertedIndex is an object that contains methods to read the file.
export default class InvertedIndex {

  constructor() {
    // the booksarray variable to store the JSON form of the file
    this.booksArray = null;
  }

  readFile() {
    const books = JSON.parse(readFileSync(__dirname + '/lib/books.json', 'utf8'));

    return this.booksArray = books;
  }

  // property to check whether the file is empty and return a boolean result
  isFileEmpty() {
    return !Boolean(this.booksArray);
  };

  // property to check whether the word searched appears in of the array items and 
  // return the index of the array item
  testIndexCreated(testWord) {
    let index = -1; // initialised index to -1 to show that the search word does not exist in the JSON object
    for (let i = 0, n = this.booksArray.length; i < n; i++) {
      if (((this.booksArray[i].text).indexOf(testWord) > -1) || ((this.booksArray[i].title).indexOf(testWord) > -1)) {
        index = i;
      }
    }
    return index;
  };

  // property to check whether the index of the array item in whith the search word appears, 
  // is mapped to the correct array item.
  getIndex(testWord) {
    const indexArray = [];
    for (var i = 0, n = this.booksArray.length; i < n; i++) {
      if (((this.booksArray[i].text).indexOf(testWord) > -1) || ((this.booksArray[i].title).indexOf(testWord) > -1)) {
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
  searchIndex() {
    const searchResults = [];
    for (let m = 0; m < arguments.length; m++) {
      for (let i = 0, n = this.booksArray.length; i < n; i++) {
        if (((this.booksArray[i].text).indexOf(arguments[m]) > -1) && ((this.booksArray[i].text).indexOf(arguments[m]) !== null) || ((this.booksArray[i].title).indexOf(arguments[m]) > -1) && ((this.booksArray[i].text).indexOf(arguments[m]) !== null)) {
          searchResults.push(i); // pushes the index where search word appears into array searchResults
        }
      }
    }
    return searchResults;
  };
};
