const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getStudentArr() {
  let studentsArray = [];

  for (let i = 0; i <= students.length - 1; i++) {
    studentsArray.push(students[i].name.toLowerCase());
  }

  return studentsArray;
}

function getSubjects(student) {
  const subjectsResult = [];
  student = student.toLowerCase();
  let studentEach = "";
  getStudentArr().find((el, index) => {
    if (student === el) {
      studentEach = students[index].subjects;
    }
  });
  let arr = Object.entries(studentEach);
  const subjectsCopy = [];
  const capitalize = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    subjectsCopy.push(arr[i][0] + ": ");
  }
  subjectsCopy.forEach((i) => {
    if (i === "data_science: ") {
      i = "data science: ";
    }
    capitalize.push(i.charAt(0).toUpperCase() + i.slice(1));
  });
  for (let i = 0; i <= capitalize.length - 1; i++) {
    subjectsResult.push(capitalize[i] + arr[i][1]);
  }
  return subjectsResult;
}
function getAverageMark(student, studentInfo) {
  let resultAverage = 0;
  let resultAverageInfo = 0;
  student = student.toLowerCase();
  let studentEach = "";
  getStudentArr().find((el, index, originalArr) => {
    if (student === el) {
      studentEach = students[index].subjects;
    }
  });
  let marksTogether = 0;
  let quontity = 0;
  let arr = Object.entries(studentEach);

  for (let i = 0; i <= arr[0][1].length - 1; i++) {
    marksTogether += arr[0][1][i];
    quontity += 1;
  }
  for (let i = 0; i <= arr[1][1].length - 1; i++) {
    marksTogether += arr[1][1][i];
    quontity += 1;
  }
  for (let i = 0; i <= arr[2][1].length - 1; i++) {
    marksTogether += arr[2][1][i];
    quontity += 1;
  }
  if (studentInfo === 0) {
    resultAverageInfo = (marksTogether / quontity).toFixed(2);
    return resultAverageInfo;
  }

  resultAverage = (marksTogether / quontity).toFixed(2);
  return resultAverage;
}
function getStudentInfo(studentInfo) {
  let info = "";
  studentInfo = studentInfo.toLowerCase();
  let studentEach = "";
  let studentsNumber = 0;
  getStudentArr().find((el, index, originalArr) => {
    if (studentInfo === el) {
      studentEach = students[index].subjects;
      studentsNumber = index;
    }
  });
  const course = students[studentsNumber].course;
  const name = students[studentsNumber].name;
  const averageMark = getAverageMark(studentInfo, 0);
  info =
    name +
    " - " +
    "Course: " +
    course +
    "," +
    " " +
    "Average mark: " +
    averageMark;
  return info;
}
function getStudentsNames(student1, student2, student3) {
  let names = [];
  let arr = [];
  arr.push(student1);
  arr.push(student2);
  arr.push(student3);
  names = arr.sort();
  return names;
}
function getBestStudent(student1, student2, student3) {
  let best = [];
  let firstStudentMark = getAverageMark(students[0].name, 0);
  let secondStudentMark = getAverageMark(students[1].name, 0);
  let thirdStudentMark = getAverageMark(students[2].name, 0);
  let marks = [];
  marks.push(firstStudentMark);
  marks.push(secondStudentMark);
  marks.push(thirdStudentMark);
  let marksSorted = marks.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }
    return 0;
  });

  if (marksSorted[0] === firstStudentMark) {
    best = student1;
    return student1;
  } else if (marksSorted[0] === secondStudentMark) {
    best = student2;
    return student2;
  }
  best = student3;
  return student3;
}
function calculateWordLetters(word) {
  let object = {};
  let split = word.split("").sort();
  let count = 1;
  let i = 1;

  while (i < split.length) {
    if (split[i - 1] === split[i]) {
      count += 1;
    } else {
      object[split[i - 1]] = count;
      count = 1;
    }
    i++;
  }
  object[split[i - 1]] = count;
  console.log(object);
  return object;
}
const container = document.querySelector("#container");
container.innerHTML = `
<p>Subjects for a student: ${getSubjects(
  prompt("Write the name you are searching")
)};</p>
<p> Average mark: ${getAverageMark(
  prompt("Write the name of a student you want to get average mark")
)};</p>
<p>Information: ${getStudentInfo(
  prompt("Enter the name of a studet you want to get information")
)};</p>
<p>Students names: ${getStudentsNames(
  students[0].name,
  students[1].name,
  students[2].name
)};</p>
<p>Best student: ${getBestStudent(
  students[0].name,
  students[1].name,
  students[2].name
)};</p> 
<p>Count of letters: ${calculateWordLetters(
  prompt("Write the word you want to calculate letters")
)};</p>

`;
