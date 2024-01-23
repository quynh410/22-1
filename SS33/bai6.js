let jobs = [];

class Job {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

function addJob() {
  let id = prompt("Nhập ID công việc:");
  let title = prompt("Nhập tiêu đề công việc:");
  let description = prompt("Nhập mô tả công việc:");
  let completed = confirm("Công việc đã hoàn thành?");

  let newJob = new Job(id, title, description, completed);

  jobs.push(newJob);

  console.log("Công việc đã được thêm mới thành công!");
}


function printJobs() {
  if (jobs.length === 0) {
    console.log("Danh sách công việc rỗng.");
  } else {
    console.log("Danh sách công việc:");
    for (let i = 0; i < jobs.length; i++) {
        let job = jobs[i];
      console.log(`ID: ${job.id}`);
      console.log(`Tiêu đề: ${job.title}`);
      console.log(`Mô tả: ${job.description}`);
      console.log(`Hoàn thành: ${job.completed ? "Có" : "Không"}`);
      console.log("---------------------");
    }
  }
}


function searchJobById() {
    let id = prompt("Nhập ID công việc cần tìm:");
  let foundJob = null;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      foundJob = jobs[i];
      break;
    }
  }

  if (foundJob) {
    console.log("Thông tin công việc:");
    console.log(`ID: ${foundJob.id}`);
    console.log(`Tiêu đề: ${foundJob.title}`);
    console.log(`Mô tả: ${foundJob.description}`);
    console.log(`Hoàn thành: ${foundJob.completed ? "Có" : "Không"}`);
  } else {
    console.log("Không tìm thấy công việc.");
  }
}


while (true) {
    let choice = parseInt(prompt("Chọn một lựa chọn (1-4):\n1. Thêm công việc mới\n2. In ra danh sách công việc\n3. Tìm kiếm công việc theo ID\n4. Thoát chương trình"));

  if (choice === 1) {
    addJob();
  }else if (choice === 2) {
    printJobs();
  }else if (choice === 3) {
    searchJobById();
  }else if (choice === 4) {
    break;
  }else {
    console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
  }
}
