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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description, isDifficult) {
    const wordObject = {
      word: word,
      description: description,
      isDifficult: isDifficult,
    };
    this.words[word] = wordObject;
  }
}

const dictionary = new Dictionary("New book");
dictionary.add("JavaScript", "Very popular language");
dictionary.add("Python", "Lorem lorem lorem");

dictionary.remove("JavaScript");
dictionary.showAllWords();
console.log(dictionary);

const hardWordsDictionary = new HardWordsDictionary("Hard Words Dictionary");
hardWordsDictionary.add("test1", "description test1");
hardWordsDictionary.add("test2", "description test2");
hardWordsDictionary.add("test3", "description test3");
console.log("hardWordsDictionary", hardWordsDictionary.showAllWords());
// const obj = {};
// const dynamicKey = "name";
// obj[dynamicKey] = "Elena";
// console.log(obj);
