import { classDemo } from "./class";

let cd = new classDemo(12334);
cd.setUsername("ricardo");
console.log(cd.getUsername());
console.log(cd.getSsn());

function validate(value:string){
console.log(value);
}
function num (numero:number):number
{
    return numero+1;
}

validate("hey!");
console.log(num(4));