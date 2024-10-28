function studentGrades(marks){
    if(marks>80 ){
        console.log("A");
    }else if (marks>=60 || marks<=79){
        console.log("B");
    }else if (marks>=50 || marks <=59){
        console,log("C");
    }else if (marks>=40||marks<=49){
        console.log("D");
    }else {
        console.log('E');
    }
    
    
}
// intorducing loop
while(true){
    const studentName = propmpt(("input student name(or `done`to finish"));
    if (studentName.toLowerCase()===`done`){
    
    }
    let marks = parseInt(prompt(("input students marks ")));
    if ( marks<0 || marks>100){
        console.log(`error message `);

    }
}
const grade = studentGrades(marks);
console.log(`${studentName}:${marks}:(${grade})`);