let myName = 'Cường';

let text = `Hello, my name is ${myName}`;
console.log(text);


let myFriends = ["Long", "Đạt", "Tùng","Luân","Lan","Nhung"];

myFriends.map((item)=>{
    return console.log(`${item}`);
})

let laptops = [
    {
        id:1,
        name:'Dell',
        price:30000000
    },
    {
        id:2,
        name:'Asus',
        price:15000000
    },
    {
        id:3,
        name:'Hp',
        price:25000000,
    }
];

console.table(laptops);

laptops.map(item=>{
    var html = `
    <h1>${item.id}</h1>
    <h1>${item.name}</h1>
    <h1>${item.price}</h1>
    `;  
    console.log(html);
})