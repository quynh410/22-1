class Book {
    constructor(tacGia, theLoai, ngayXuatBan) {
      this.tacGia = tacGia;
      this.theLoai = theLoai;
      this.ngayXuatBan = ngayXuatBan;
      this.isBorrowed = false; 
    }
  
    infor() {
      console.log(`Tác Giả: ${this.tacGia}`);
      console.log(`Thể Loại: ${this.theLoai}`);
      console.log(`Ngày xuất bản: ${this.ngayXuatBan}`);
      console.log(`Tình trạng: ${this.isBorrowed ? "Đã được mượn" : "Chưa được mượn"}`);
    }
  
    borrow() {
      if (this.isBorrowed) {
        console.log("Sách đã được mượn.");
      } else {
        this.isBorrowed = true;
        console.log("Mượn sách thành công.");
      }
    }
  
    returnBook() {
      if (this.isBorrowed) {
        this.isBorrowed = false;
        console.log("Trả sách thành công.");
      } else {
        console.log("Sách đã được trả.");
      }
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
  
    isBookAvailable(book) {
      return !book.isBorrowed;
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
  
  console.log("____Mượn/Trả sách____");
  book1.borrow();
  book2.borrow();
  book1.returnBook();
  book3.borrow();
  book2.borrow();
  
  console.log("____Kiểm tra sách____");
  console.log("Sách 'Sóng' có sẵn để mượn: ", library.isBookAvailable(book1));
  console.log("Sách 'Người Lái Đò Sông Đà' có sẵn để mượn: ", library.isBookAvailable(book2));
  console.log("Sách 'Vợ Chồng A Phủ' có sẵn để mượn: ", library.isBookAvailable(book3));