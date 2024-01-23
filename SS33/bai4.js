class Book {
    constructor(tacGia, theLoai, ngayXuatBan) {
      this.tacGia = tacGia;
      this.theLoai = theLoai;
      this.ngayXuatBan = ngayXuatBan;
    }
  
    infor() {
      console.log(`Tác Giả: ${this.tacGia}`);
      console.log(`Thể Loại: ${this.theLoai}`);
      console.log(`Ngày xuất bản: ${this.ngayXuatBan}`);
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
    
    addBook(book) {
      this.books.push(book);
    }
    
    displayBooks() {
      console.log("____LIBRARY BOOKS____");
      this.books.forEach((book) => {
        book.infor();
        console.log("---------------------------------------------");
      });
    }
  }
  
  let library = new Library();
  
  let book1 = new Book("Xuân Quỳnh", "Sóng", 2020);
  let book2 = new Book("Nguyễn Tuân", "Người Lái Đò Sông Đà", 2018);
  let book3 = new Book("Tô Hoài", "Vợ Chồng A Phủ", 2022);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.displayBooks();