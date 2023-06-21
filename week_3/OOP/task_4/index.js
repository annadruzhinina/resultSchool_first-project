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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description, isDifficult) {
    const wordObject = {
      word: word,
      description: description,
      isDifficult: true,
    };
    this.words[word] = wordObject;
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

// hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary.showAllWords());
console.log(hardWordsDictionary);
// дилетант - Тот, кто занимается наукой или искусством // без специальной подготовки, обладая только поверхностными знаниями.// квант - Неделимая часть какой-либо величины в физике.
