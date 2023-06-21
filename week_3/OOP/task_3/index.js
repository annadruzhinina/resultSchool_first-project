class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    this.words[word] = {
      word,
      description,
    };
    console.log("description_word", this.words[word]);
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
    for (let key in this.words) {
      console.log(this.words[key]);
    }
  }
}

const dictionary = new Dictionary("New book");
dictionary.add("JavaScript", "Very popular language");
dictionary.add("Python", "Lorem lorem lorem");

dictionary.remove("JavaScript");
dictionary.showAllWords();
console.log(dictionary);
