let infor = {
    id: '',
    name: '',
    age: '',
    phone: '',
    address: '',
};

infor.id = prompt("Nhập Id");
infor.name = prompt("Nhập tên");
infor.age = prompt("Nhập tuổi");
infor.phone = prompt("Nhập số điện thoại");
infor.address = prompt("Nhập địa chỉ");

console.log("__THÔNG TIN CÁ NHÂN__");
console.log("ID: " , infor.id);
console.log("Tên: " , infor.name);
console.log("Tuổi: " , infor.age);
console.log("Địa chỉ: " , infor.address);
console.log("Số điện thoại: " , infor.phone);