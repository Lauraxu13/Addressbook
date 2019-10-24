"use strict";

class Addressbook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relations) {
    let human = new Contact(name, email, phone, relations);
    this.contacts.push(human);
  }
  deletAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relations) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relations = relations;
  }
}

function print(book) {
  for (const contact of book.contacts) {
    console.log(contact);
  }
}

const book = new Addressbook();
book.add("laura", "laura@gmail.com", "1235", "self");
book.add("Ray", "ray@gmail.com", "1235", "friend");
book.add("Julia", "julia@gmail.com", "1235", "mom");
book.add("Derek", "derek@gmail.com", "1235", "husband");
book.deletAt(2);
// console.log(book.contacts.length);
// console.log(book.contacts[0].name);
// console.log(book);
print(book);
