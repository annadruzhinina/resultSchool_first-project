class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    this.words[word] = description;
  }
  remove(word) {
    if (word in this.words) {
      delete this.words[word];
    }
  }
  get(word) {
    return this.words[word];
  }
  showAllWords() {
    return this.words;
  }
}

const dictionary = new Dictionary("New book");
dictionary.add("JavaScript", "Very popular language");
dictionary.add("Python", "Lorem lorem lorem");

dictionary.remove("JavaScript");
dictionary.showAllWords();
console.log(dictionary);

// const obj = {};
// const dynamicKey = "name";
// obj[dynamicKey] = "Elena";
// console.log(obj);
