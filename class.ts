export class classDemo{

    username:string;
    password:string;
    ssn:number;

    constructor(ssn:number){
        this.ssn=ssn;
    }

    getUsername(){
        return this.username;
    }
    setUsername(username:string){
      this.username=username;
    }
    getSsn(){
        return this.ssn;
    }
}
//creation of object cd it includes all the classdemo on it
//let cd = new classDemo(123); //set 123 as parameter for the constructor
//set the method
//cd.setUsername("rick"); //set dinamicaly
//get the function
//console.log(cd.getSsn());//print the ssn
//console.log(cd.getUsername());//print username



