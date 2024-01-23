// let slg = prompt("Nhập vào số lượng sinh viên");


// function inforstudent () {
//     let id = prompt("Nhập id của sinh viên thứ nhất" +":");
//     let name = prompt("Nhập tên của sinh viên thứ nhất" + ":");

//     let stundent = {
//         id: id,
//         name: name,
//     };

// }

function sinhVien() {
    let slgSV = parseInt(prompt("Nhập số lượng sinh viên:"));
    return slgSV;
  }

  function inforstd(index) {
    let id = prompt("Nhập ID của sinh viên thứ " + (index + 1) + ":");
    let name = prompt("Nhập tên của sinh viên thứ " + (index + 1) + ":");
  
    let student = {
      id: id,
      name: name
    };
  
    return student;
  }
  

  function main() {
    let slgSV = getslgSV();
    
    for (let i = 0; i < slgSV; i++) {
        let student = getInforStudent(i);
      console.log("Thông tin sinh viên thứ " + (i + 1) + ":");
      console.log(student);
    }
  }
  
  main();











    
















// Hàm yêu cầu người dùng nhập số lượng sinh viên
function getNumberOfStudents() {
    var numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
    return numberOfStudents;
  }
  
  // Hàm yêu cầu người dùng nhập thông tin của từng sinh viên
  function getStudentInfo(index) {
    var id = prompt("Nhập ID của sinh viên thứ " + (index + 1) + ":");
    var name = prompt("Nhập tên của sinh viên thứ " + (index + 1) + ":");
  
    var student = {
      id: id,
      name: name
    };
  
    return student;
  }
  
  // Hàm chính để thực hiện chương trình
  function main() {
    var numberOfStudents = getNumberOfStudents();
    var students = [];
  
    for (var i = 0; i < numberOfStudents; i++) {
      var student = getStudentInfo(i);
      students.push(student);
    }
  
    console.log("Danh sách sinh viên:");
    console.log(students);
  }
  
  // Gọi hàm chính để chạy chương trình
  main();
