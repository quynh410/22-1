let phoneBook = [
  {
      name: "Alice",
      phone: "123-456-7890",
      email: "alice@example.com",
  },
  {
      name: "Bob",
      phone: "987-654-3210",
      email: "bob@example.com",
  },
];
phoneBook.forEach(contact => {
  contact.display = function() {
    console.log("Tên: " + this.name);
    console.log("Số điện thoại: " + this.phone);
    console.log("Email: " + this.email);
    console.log("--------------------");
  };
});


phoneBook.forEach(contact => {
  contact.display();
});