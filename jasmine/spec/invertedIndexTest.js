var invInd = new InvertedIndex();
beforeEach(function(done) {
  invInd.readFile(done);
});

// Write a test suite called `Read book data`.
// Write a test that reads the JSON file and asserts that it is not empty.
// Ensure each object in JSON array contains a property whose value is a string.
describe("Read book  data", function() {
  it("reads the JSON file and asserts that it is not empty.", function() {
    expect(invInd.isFileEmpty()).toBe(false);
  });
  it("verifies that the title of the first object property in the array is of type string", function() {
    expect(typeof invInd.booksArray[0].title).toBe('string');
  });
  it("verifies that the text of the first object property in the array is of type string", function() {
    expect(typeof invInd.booksArray[0].text).toBe('string');
  });
  it("verifies that the title of the second object property in the array is of type string", function() {
    expect(typeof invInd.booksArray[1].title).toBe('string');
  });
  it("verifies that the text of the second object property in the array is of type string", function() {
    expect(typeof invInd.booksArray[1].text).toBe('string');
  });
});


// Write a new test suite called `Populate Index`.
// Write a test that verifies that the index is created once the JSON file has been read.
// Write a test that verifies the index maps the string keys to the correct objects in the JSON array.
// Ensures index is created once JSON file has been read.
// Ensures index is correct.
describe("Populate Index", function() {
  it("verifies that the index is created once the JSON file has been read.", function() {
      expect(invInd.testIndexCreated('same')).toBe(-1); // returns an index
  });
  it("verifies that the index is created once the JSON file has been read.", function() {
      expect(invInd.testIndexCreated('Lord')).toBe(1);
  });
  it("verifies that the index is created once the JSON file has been read.", function() {
      expect(invInd.testIndexCreated('rabbit')).toBe(0);
  });
  it("verifies that the index is created once the JSON file has been read.", function() {
      expect(invInd.testIndexCreated('hole')).toBe(0);
  });
  it("verifies the index maps the string keys to the correct objects in the JSON array.", function() {
      expect(invInd.getIndex('dwarf')).toEqual([1]); //returns an array of indices
  });
  it("verifies the index maps the string keys to the correct objects in the JSON array.", function() {
      expect(invInd.getIndex('hole')).toEqual([0]);
  });
  it("verifies the index maps the string keys to the correct objects in the JSON array.", function() {
      expect(invInd.getIndex('alliance')).toEqual([1]);
  });
});

// Write a new test suite called `Search index`.
// Write a test that verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.
describe("Search index", function() {
  it("verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.", function() {
      // the function checks even when the search string is in a different case
      expect(invInd.searchIndex('Alice')).toEqual([0]);
  });
  it("verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.", function() {
      // the function checks even when the search string is in a different case
      expect(invInd.searchIndex('same')).toEqual([]);
  });
  it("verifies that searching the index returns an array of the indices of the correct objects that contain the words in the search query.", function() {
      // the function checks even when the search string is in a different case
      expect(invInd.searchIndex('and')).toEqual([0,1]);
  });
  it("ensures searchIndex can handle an array of search terms.", function() {
      // Ensure searchIndex can handle a varied number of search terms as arguments.
      expect(invInd.searchIndex('same', 'elf')).toEqual([1]);
  });
  it("ensures searchIndex can handle an array of search terms.", function() {
      // Ensure searchIndex can handle a varied number of search terms as arguments.
      expect(invInd.searchIndex('enters', 'wizard')).toEqual([0,1]);
  });
  it("ensures searchIndex can handle an array of search terms.", function() {
      // Ensure searchIndex can handle a varied number of search terms as arguments.
      expect(invInd.searchIndex('falls', 'elf', 'full', 'ring')).toEqual([0,1,0,1]);
  });
});


// Get Index
// Ensure getIndex method takes a string argument that specifies the location of the JSON data.
describe("Get Index", function(){
  it("ensures getIndex method takes a string argument that specifies the location of the JSON data", function(){
    expect(typeof invInd.getIndex()).toBe('object');
  });
});
