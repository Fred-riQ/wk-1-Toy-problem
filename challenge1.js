const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const studentName =[];
function studentGrades(marks){

    if(marks>80 ){
        console.log("A");
    }else if (marks>=60 && marks<=79){
        console.log("B");
    }else if (marks>=50 && marks <=59){
        console.log("C");
    }else if (marks>=40 && marks<=49){
        console.log("D");
    }else 
        console.log('E');
    }
    function getStudentInfo() {
        rl.question('Enter student name (or type "done" to finish): ', (name) => {
            if (name.toLowerCase() === 'done') {
                console.log('error message');
                rl.close();
                return;
            }
    
            rl.question('Enter student marks: ', (marksInput) => {
                const marks = parseInt(marksInput, 10);
                if (!isNaN(marks)) {
                    console.log(`Student: ${name}, Marks: ${marks}`);
                    studentGrades(marks);
                } else {
                    console.log('Please enter valid marks.');
                }
                getStudentInfo(); // Call the function again for next student
            });
        });
    }
  
getStudentInfo();
