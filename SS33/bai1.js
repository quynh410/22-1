let human = {
    name: '',
    age: '',
    address: '',
}

human.name = prompt("Nhập tên");
human.age = prompt("Nhập tuổi");
human.address = prompt("Nhập địa chỉ");


human.dateOfBirth = prompt("Nhập ngày sinh cần cập nhật");
delete human.age;

console.log(human);
