import { expect } from 'chai';
import InvertedIndex from '../src/InvertedIndex';

const invInd = new InvertedIndex();

describe('InvertedIndex class', () => {
  beforeEach((done) => {
    invInd.readFile();
    done();
  });

  // Write a test suite called `Read book data`.
  // Write a test that reads the JSON file and asserts that it is not empty.
  // Ensure each object in JSON array contains a property whose value is a string.
  describe("Read book  data", () => {
    it("reads the JSON file and asserts that it is not empty.", () => {
      expect(invInd.isFileEmpty()).to.equal(false);
    });
    it("verifies that the title of the first object property in the array is of type string", () => {
      expect(typeof invInd.booksArray[0].title).to.equal('string');
    });
    it("verifies that the text of the first object property in the array is of type string", () => {
      expect(typeof invInd.booksArray[0].text).to.equal('string');
    });
    it("verifies that the title of the second object property in the array is of type string", () => {
      expect(typeof invInd.booksArray[1].title).to.equal('string');
    });
    it("verifies that the text of the second object property in the array is of type string", () => {
      expect(typeof invInd.booksArray[1].text).to.equal('string');
    });
  });


  // Write a new test suite called `Populate Index`.
  // Write a test that verifies that the index is created once the JSON file has been read.
  // Write a test that verifies the index maps the string keys to the correct objects in the JSON array.
  // Ensures index is created once JSON file has been read.
  // Ensures index is correct.
  describe("Populate Index", () => {
    it("verifies that the index is created once the JSON file has been read.", () => {
      expect(invInd.testIndexCreated('same')).to.equal(-1); // returns an index
    });
    it("verifies that the index is created once the JSON file has been read.", () => {
      expect(invInd.testIndexCreated('Lord')).to.equal(1);
    });
    it("verifies that the index is created once the JSON file has been read.", () => {
      expect(invInd.testIndexCreated('rabbit')).to.equal(0);
    });
    it("verifies that the index is created once the JSON file has been read.", () => {
      expect(invInd.testIndexCreated('hole')).to.equal(0);
    });
    it("verifies the index maps the string keys to the correct objects in the JSON array.", () => {
      expect(invInd.getIndex('dwarf')).to.deep.equal([1]); //returns an array of indices
    });
    it("verifies the index maps the string keys to the correct objects in the JSON array.", () => {
      expect(invInd.getIndex('hole')).to.deep.equal([0]);
    });
    it("verifies the index maps the string keys to the correct objects in the JSON array.", () => {
      expect(invInd.getIndex('alliance')).to.deep.equal([1]);
    });
  });

  // Write a new test suite called `Search index`.
  // Write a test that verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.
  describe("Search index", () => {
    it("verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.", () => {
      // the function checks even when the search string is in a different case
      expect(invInd.searchIndex('Alice')).to.deep.equal([0]);
    });
    it("verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.", () => {
      // the function checks even when the search string is in a different case
      expect(invInd.searchIndex('same')).to.be.an('array').that.is.empty;
    });
    it("verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.", () => {
      // the function checks even when the search string is in a different case
      expect(invInd.searchIndex('and')).to.deep.equal([0, 1]);
    });
    it("ensures searchIndex can handle an array of search terms.", () => {
      // Ensure searchIndex can handle a varied number of search terms as arguments.
      expect(invInd.searchIndex('same', 'elf')).to.deep.equal([1]);
    });
    it("ensures searchIndex can handle an array of search terms.", () => {
      // Ensure searchIndex can handle a varied number of search terms as arguments.
      expect(invInd.searchIndex('enters', 'wizard')).to.deep.equal([0, 1]);
    });
    it("ensures searchIndex can handle an array of search terms.", () => {
      // Ensure searchIndex can handle a varied number of search terms as arguments.
      expect(invInd.searchIndex('falls', 'elf', 'full', 'ring')).to.deep.equal([0, 1, 0, 1]);
    });
  });


  // Get Index
  // Ensure getIndex method takes a string argument that specifies the location of the JSON data.
  describe("Get Index", () => {
    it("ensures getIndex method takes a string argument that specifies the location of the JSON data", () => {
      expect(typeof invInd.getIndex()).to.equal('object');
    });
  });
});
