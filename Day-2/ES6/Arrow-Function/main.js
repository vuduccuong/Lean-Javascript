console.log("%c Không truyền tham số", "color: red");

let writeLog = ()=>{
    console.log("this is Arrow function");
};

writeLog();

console.log("%c Truyền tham số", "color: red");
let writeLog2 = (item)=>{
    console.log(item);
};

writeLog2("Hello. my name Yi");