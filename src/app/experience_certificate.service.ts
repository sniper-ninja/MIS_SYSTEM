export class Experience_CertificateService{
    experience =[];
    
        setdata(experienceid: string,empid: string){
            console.log('ExperienceId is = '+experienceid);
            this.experience=[];
            this.experience.push({experienceid: experienceid, empid: empid});
        }
    
        
    
    
    }