export class Salary_CertificateService{
salary =[];

    setdata(salaryid: string,empid: string){
        console.log('SalaryId is = '+salaryid);
        this.salary=[];
        this.salary.push({salaryid: salaryid, empid: empid});
    }

    


}

