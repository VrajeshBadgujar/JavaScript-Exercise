//  * Creating classes:
//  *
//  * Class declaration: class Name {}
//  * Class expression:  const Name = class {}

class Library {
  constructor(
    // Defines parameters:
    name,
    type,
    author,
    publishedYear,
    millions,
    thousands
  ) {
    // Define properties:
    this.name = name;
    this.type = type;
    this.author = author;
    this.publishedYear = publishedYear;
    this.copiesSold = {
      high: millions,
      low: thousands,
    };
  }

  record(number1, number2) {
    this.copiesSold.high = number1;
    this.copiesSold.low = number2;
  }
}

export default Library;
