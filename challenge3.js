// Write a program whose major task is to calculate an individuals net salary by getting the basic inputs of basic salary and benefits 
// befenits 
// calculate the payee
// payee 
// taxable income(gs-(NHIF+NSSF))
//     NHIF deductions 
//     NSSF deductions
// gross salary(all money without any deductions)
// net salary(all the amount after deductions)
function calculateNetSalary(basicSalary, benefits) {
    // Constants
    const personalRelief = 2400; 
    const nhifDeduction = 1500; 
  const nssfDeduction = 600;
    const insuranceRelief = 5000; // Monthly
    const pensionFundContributionLimit = 20000; // Monthly
    
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate Taxable Pay
    const taxablePay = grossSalary - nhifDeduction - nssfDeduction - personalRelief;
  
    // Calculate Payee (Tax)
    let payee = 0;
  
    if (taxablePay <= 24000) {
        payee = taxablePay * 0.10;
    } else if (taxablePay <= 32333) {
        payee = 24000 * 0.10 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay <= 500000) {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (taxablePay - 32333) * 0.30;
    } else if (taxablePay <= 800000) {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (taxablePay - 500000) * 0.325;
    } else {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (taxablePay - 800000) * 0.35;
    }
  

    const totalDeductions = nhifDeduction + nssfDeduction + (payee > insuranceRelief ? insuranceRelief : payee);
    const netSalary = grossSalary - totalDeductions;
  
    return {
        grossSalary: grossSalary,
        payee: payee,
        netSalary: netSalary
    };
  }
  
  const basicSalary = 50000; // Input basic salary
  const benefits = 10000; // Input benefits
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
 
  console.log(`Payee (Tax): Ksh ${salaryDetails.payee.toFixed(2)}`);
 
  
  
    
    
