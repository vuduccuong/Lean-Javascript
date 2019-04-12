var numbers = new Set([1,2,3,4]);

console.log("Khởi tạo mới:  var numbers = new Set([1,2,3,4]);");
console.log(numbers);

console.log("Thêm mới 1 phần tử : numbers.add(5)");
numbers.add(5);
console.log(numbers);

console.log("Xoá phần tử: numbers.delete(1)");
numbers.delete(1);
console.log(numbers);

console.log("Kiểm tra phần tử tồn tại: numbers.has(3); => true/false");
let check = numbers.has(3);
console.log(check);

console.log("Đếm số phần tử: numbers.size");
console.log(numbers.size);

console.log("Xoá toàn bộ phần tử: numbers.clear()");
numbers.clear();
console.log(numbers);