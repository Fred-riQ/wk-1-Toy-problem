// Write a program whose major task is to calculate an individuals net salary by getting the basic inputs of basic salary and benefits 
// befenits 
// calculate the payee
// payee 
// taxable income(gs-(NHIF+NSSF))
//     NHIF deductions 
//     NSSF deductions
// gross salary(all money without any deductions)
// net salary(all the amount after deductions)
function netSalary(){
     const NHIF=300;
     console.log("NHIF:",NHIF)
     const NSSF=420;
     const payeRate = 0.01;
    //  
    //  calculate payee
    const taxableIncome = grossSalary - (NSSF+NHIF);
    console.log("Gross Salary:", grossSalary);
   const paye = taxableIncome*grossSalary;
   console.log("PAYE:",paye);
    const netSalary=grossSalary-NSSF-NHIF-paye;
    console.log("Net Salary;",netSalary);
}
const basicSalary = 30000;
const benefits = 0.15;
netSalary(basicSalary, benefits)
    
