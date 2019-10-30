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
  findByName(name) {
    //filterByName - Has one parameter for name.
    //Returns the first contact with the given name.Bonus:
    //ignore case(capitalization).
    function isName(person) {
      return person.name === name;
    }
    console.log(book.contacts.find(isName));
  }
  filterByRelation(relation) {
    // filterByRelation - Has one parameter for relation. Returns an array of
    // all the contacts that have that relation specified. [use Array filter]
    const results = this.contacts.filter(
      contact => contact.relation === relation
    );
    console.log(results);
  }

  edit(oldName, name, email, phone, relation) {
    let index = this.contacts.findIndex(contact => {
      contact.name === oldName;
    });

    let update = new Contact(name, email, phone, relation);
    this.contacts[index] = update;
    console.log(update);
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

// // find name using Array Find
// function findName(desiredName) {
//   function findHumanName(person) {
//     return person.name === desiredName;
//   }
//   console.log(book.contacts.find(findHumanName));
// }

// // filter name using Array filter

// function filterRelations(bookReference,relation) {
//   const results =bookReference.contacts.filter(contact=> contact.relation === relation);
// console.log(result)
// }

// function display(book) {
//   document.querySelector("#contacts").innerHTML = "";
//   for (const contact of book.contacts) {
//     const div = document.createElement("div");
//     div.classList.add("contact");
//     const name = dc;
//   }
// }
const book = new Addressbook();
book.add("Laura", "laura@gmail.com", "1235", "self");
book.add("Ray", "ray@gmail.com", "1235", "friend");
book.add("Julia", "julia@gmail.com", "1235", "mom");
book.add("Derek", "derek@gmail.com", "1235", "husband");
book.add("Yong", "yong@gmail.com", "1235", "dad");
book.add("teresa", "teresa@gmail.com", "1235", "friend");
book.add("lauren", "lauren@gmail.com", "1235", "friend");
book.deletAt(2);

function display() {
  document.querySelector("#contacts").innerHTML = "";
  book.contacts.forEach((contact, index) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("contact");
    newEntry.innerHTML = `
    <p> Name: ${contact.name}</p>
    <p> Email: ${contact.email}</p>
    <p> Phone: ${contact.phone}</p>
    <p> Relation: ${contact.relation}</p>
    <i class="fa fa-trash" data-index-number="${index}" aria-hidden="true"></i>  
    `;
    document.querySelector("#contacts").appendChild(newEntry);
  });
}

display();

// #book is the id of my form
const form = document.querySelector("#book");
form.addEventListener("submit", addContact);
function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  book.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relations")
  );
  form.rest();
  console.log(book);
  display();
}

document
  .querySelector("#contacts")
  .addEventListener("click", deletContacts);

function deletContacts(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index-number");
    console.log(index);
    book.deletAt(index);
    display();
  }
}

// console.log(book.contacts.length);
// console.log(book.contacts[0].name);
// console.log(book);
print(book);

book.findByName("Laura");
book.filterByRelation("mom");
book.edit("Ray", "Raymond", "ray@gmail.com", 1235, "friend");

// function displayContacts(name, email, phone, realtion) {
//   console.log(`displayContacts(name: ${name}, email: ${email}, phone: ${phone}, realtion: ${realtion})`);

//   //add div
//   const div = document.createElement("div");
//   document.getElementById("added_contacts").appendChild(div);
//   div.classList.add("car");
//   div.setAttribute("title", "__name__");
//   //add image to display
//   const img = document.createElement("img");
//   img.setAttribute("src", "images/" + image);

//   //span
//   const span = document.createElement("span");
//   span.style.borderColor = color;
//   span.innerHTML = name;
//   div.appendChild(img);
//   div.appendChild(span);

//   console.log(div);
