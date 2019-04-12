console.log("%c TỪ KHOÁ LET","color:red; font-weight:bold");
var a = 100; 
console.log(a); // 100;
if(a >0){
    let a = 5; 
    console.log(a); //  5;
}

console.log(a); // 100;

console.log("%c TỪ KHOÁ LET 2","color:red; font-weight:bold");
let b = 100; 
console.log(b); // 100;
if(b >0){
     let b1 = 5;
}

console.log(b); // 100;
 console.log(b1); //Error : b1 is not defined  (b1 chưa được khai báo)




console.log("%c TỪ KHOÁ VAR","color:red; font-weight:bold");
var c = 50;
console.log(c); //50
if(c>0){
    var c = 1996;
    console.log(c); // 1996
};

console.log(c); //1996



console.log("%c TỪ KHOÁ CONST","color:red; font-weight:bold");
const d = 50;
console.log(d); //50
if(d>0){
     d = 1996;//Error : Assignment to constant variable (Không gán cho biến constant)
    console.log(d); 
};

console.log(d); //1996