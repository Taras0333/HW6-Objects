
//debugger
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4],
   
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5],
  
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5],
    
  }
}];

/*function getSubjects(student){
	student = student.toLowerCase();
	let studentEach = '';
	if(student === students[0].name.toLowerCase()){
		studentEach = students[0].subjects;
	} else if(student === students[1].name.toLowerCase()){
		studentEach = students[1].subjects;
	}else if(student === students[2].name.toLowerCase()){
		studentEach = students[2].subjects;
	}else{
		alert('There is no students under this name');
	}
	let arr = Object.entries(studentEach);
    	const subjectsCopy = [];
    	const capitalize = [];
    	const result = [];
    	
    	for (i = 0; i <= arr.length - 1; i++){
    		subjectsCopy.push(arr[i][0]+ ': ');
    	}

    	
    	subjectsCopy.forEach(i =>{
    		if(i === 'data_science: '){
    			i = 'data-science: ';
    		}
    		capitalize.push(i.charAt(0).toUpperCase() + i.slice(1));
    	})
    	for (i = 0; i <= capitalize.length - 1; i++){
    		result.push(capitalize[i] + arr[i][1]);
    	}
    	
    	return result;


}
console.log(getSubjects(prompt('Write the name you are searching')));
*/
function getAverageMark(student){
	student = student.toLowerCase();
	let studentEach = '';
	let studentsNumber = 0;
	if(student === students[0].name.toLowerCase()){
		studentEach = students[0].subjects;
		studentsNumber = 0;
	} else if(student === students[1].name.toLowerCase()){
		studentEach = students[1].subjects;
		studentsNumber = 1; 
	}else if(student === students[2].name.toLowerCase()){
		studentEach = students[2].subjects;
		studentsNumber = 2;
	}else{
		alert('There is no students under this name');
	}
	let marksTogether = 0;
	let quontity = 0;
	let firstSubjectAv = 0;
	let arr = Object.entries(studentEach);
    const subjectsCopy = [];
    const capitalize = [];
    let result = 0;
    	
    	for (i = 0; i <= arr[0][1].length - 1; i++){
    		marksTogether += arr[0][1][i];
    		quontity += 1;
    	}
    	for (i = 0; i <= arr[1][1].length - 1; i++){
    		marksTogether += arr[1][1][i];
    		quontity += 1;
    	}
    	for (i = 0; i <= arr[2][1].length - 1; i++){
    		marksTogether += arr[2][1][i];
    		quontity += 1;
    	}
    	result = (marksTogether / quontity).toFixed(2);
    	 return result;

	

}
/*console.log(getAverageMark(prompt('Write the name of a stdent you want to get average mark')))


function getStudentInfo(student){
	student = student.toLowerCase();
	let studentEach = '';
	let studentsNumber = 0;
	if(student === students[0].name.toLowerCase()){
		studentEach = students[0].subjects;
		studentsNumber = 0;
	} else if(student === students[1].name.toLowerCase()){
		studentEach = students[1].subjects;
		studentsNumber = 1; 
	}else if(student === students[2].name.toLowerCase()){
		studentEach = students[2].subjects;
		studentsNumber = 2;
	}else{
		alert('There is no students under this name');
	}
	const course = students[studentsNumber].course;
	const name = students[studentsNumber].name;
	const averageMark = getAverageMark(student);
	const result = name + ' - ' + 'Course: ' + course + ',' + ' ' + 'Average mark: ' + averageMark;
	return result;



}
console.log(getStudentInfo(prompt('Enter the name of a studet you want to get information')));

function getStudentsNames(student1, student2, student3){
	let arr = [];
	arr.push(student1);
	arr.push(student2);
	arr.push(student3);
	let result = arr.sort()
	return result;
}
console.log(getStudentsNames(students[0].name, students[1].name, students[2].name));
*/
function getBestStudent(student1, student2, student3){
let firstStudentMark = getAverageMark(students[0].name);
let secondStudentMark = getAverageMark(students[1].name);
let thirdStudentMark = getAverageMark(students[2].name);
let marks = [];
marks.push(firstStudentMark);
marks.push(secondStudentMark);
marks.push(thirdStudentMark);
let marksSorted = marks.sort((a, b) =>{
	if(a > b){
		return -1;
	}else if(a < b){
		return 1;

	}
	return 0;
})
	if(marksSorted[0] === firstStudentMark){
		return student1;
	}else if(marksSorted[0] === secondStudentMark){
		return student2;

	}
	return student3;

}
console.log(getBestStudent(students[0].name, students[1].name, students[2].name));