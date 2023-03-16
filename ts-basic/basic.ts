//generics

function myfunction<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = myfunction(demoArray, -1);
const secondArray = myfunction(['a', 'b', 'c', 'd'], 'g');


type Person={
    name:string,
    age:number
}

let person:Person;

let people:Person[];

// let hobbies:string[];
// hobbies=['u','p',5] //hear 5 is not a string so give the error 

let obj:string | number="the scet is the best collage in surat";
obj=123455