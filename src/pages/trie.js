function TrieNode(letter) {
    this.letter = letter;
    this.prevLetter = null;
    this.nextLetters = {}; // An object for the following letters
    this.isComplete = false; // To check whether this letter is the end of a word
    this.originalWord = null; // Store the original word with correct capitalization
  }
  
  // Method to get the word from the node
  TrieNode.prototype.getWord = function() {
    let node = this;
    let wordLetters = [];
    while (node.prevLetter) {
      wordLetters.unshift(node.letter); // Get letters in reverse order
      node = node.prevLetter; // Move to the previous node
    }
    return wordLetters.join(""); // Return the word as a string
  };
  
  function Trie() {
    this.root = new TrieNode(null);
  
    // Insert a new word into the trie
    this.insert = function(word) {
      const wordLower = word.toLowerCase();  // Use lowercase for search matching
      let node = this.root;
      for (let i = 0; i < wordLower.length; i++) {
        const currentLetter = wordLower[i];
        if (!node.nextLetters[currentLetter]) {
          node.nextLetters[currentLetter] = new TrieNode(currentLetter);
          node.nextLetters[currentLetter].prevLetter = node;
        }
        node = node.nextLetters[currentLetter];
      }
      node.isComplete = true;
      node.originalWord = word;  // Store the original word with correct capitalization
    };
  
    // Check if a word exists in the trie
    this.contains = function(word) {
      let node = this.root;
      const wordLower = word.toLowerCase();  // Use lowercase for search matching
      for (let i = 0; i < wordLower.length; i++) {
        const currentLetter = wordLower[i];
        let nextNode = node.nextLetters[currentLetter];
        if (nextNode) {
          node = nextNode;
        } else {
          return false; // Word doesn't exist
        }
      }
      return node.isComplete; // Return true if it's the end of a word
    };
  
    // Find words that match the given clue letters
    this.find = function(clueLetters) {
      let node = this.root;
      let output = [];
  
      // Traverse the trie based on clue letters
      for (let i = 0; i < clueLetters.length; i++) {
        const clueLetter = clueLetters[i];
        let nextNode = node.nextLetters[clueLetter];
        if (nextNode) {
          node = nextNode;
        } else {
          return output; // No matching words
        }
      }
  
      // If we have found the prefix, gather all possible words
      this.findAllWords(node, output);
      return output;
    };
  
    // Recursively find all words from a given node
    this.findAllWords = function(node, arr) {
      if (node.isComplete) {
        arr.push(node.originalWord); // Push the original word (correctly capitalized)
      }
  
      // Recursively find words from each of the next letters
      for (let nextLetter in node.nextLetters) {
        this.findAllWords(node.nextLetters[nextLetter], arr);
      }
    };
  }
  
  export default Trie;  