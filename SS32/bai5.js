let timKiemAuthor = prompt("Nhập tên tác giả:");

class Book {
    constructor(author, name) {
      this.author = author;
      this.name = name;
    }
  }
  let books = [
    new Book("Nam Cung", "Lam Điện"),
    new Book("Nguyễn Tuân", "Người Lái Đò Sông Đà"),
    new Book("Xuân Quỳnh", "Sóng"),
    new Book("Tô Hoài", "Vợ Chồng A Phủ")
  ];
  

  let timKiemSach = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === timKiemAuthor) {
        timKiemSach.push(books[i]);
    }
  }
 
  if (timKiemSach.length > 0) {
    for (let i = 0; i < timKiemSach.length; i++) {
      console.log(timKiemSach[i]);
    }
  } else {
    console.log("Không tìm thấy sách của tác giả " + timKiemAuthor);
  }