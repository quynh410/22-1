// let phoneBook = {
//     contact1: {
//         name: "Alice",
//         phone: "123-456-7890",
//         email: "alice@example.com",
//     },
//     contact2: {
//         name: "Bob",
//         phone: "987-654-3210",
//         email: "bob@example.com",
//     },
// };

// // console.log(phoneBook.contact1);
// // console.log(phoneBook.contact2);

// console.log("Tên: ", phoneBook.contact1.name);
// console.log("Số điện thoại: ", phoneBook.contact1.phone);
// console.log("Email: ", phoneBook.contact1.email);


// console.log("Tên: ", phoneBook.contact2.name);
// console.log("Số điện thoại: ", phoneBook.contact2.phone);
// console.log("Email: ", phoneBook.contact2.email);

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
 for(let i = 0; i < phoneBook.length; i++) {
     console.log("Tên: ", phoneBook[i].name);
     console.log("Số điện thoại: ", phoneBook[i].phone);
     console.log("Email: ", phoneBook[i].email);
     console.log("------------------------------------------------");
 }