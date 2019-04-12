console.log("%c PARAMETERS DEFAULT", "color:red");
console.log("var sayHello = (mess = 'Yi')=>{");
console.log('   return mess;')
console.log(')');

var sayHello = (mess = "Yi")=>{
    return mess;
}

console.log("%c Không truyền tham số =>","color:red");
console.log('console.log(sayHello()); ==>')
console.log(sayHello()); 

console.log("%c Có truyền tham số =>","color:red");
console.log(sayHello('Vũ Đức Cường')); // có truyền tham số



console.log("%c REST PARAMETERS", "color:red");

console.log('let showInfo = (name, age, ...other)=>{');
console.log('    console.log("name: ", name);');
console.log('    console.log("age: ", age);');
console.log('    console.log("other : ", other);');
console.log('}');

let showInfo = (name, age, ...other)=>{
    console.log("name: ", name);
    console.log("age: ", age);
    console.log("other : ", other);
}

console.log("showInfo('Cường', 23, 'fb.com/vuduc.cuong4', 'Yên Mô', 'Ninh Bình', 35); ==>")
showInfo('Cường', 23, 'fb.com/vuduc.cuong4', 'Yên Mô', 'Ninh Bình', 35);


console.log("showInfo('Đạt', 09); ==>");
showInfo('Đạt', 09);