let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result);

// ++a: Toán tử tăng trước (prefix increment). Giá trị của a sẽ được tăng lên 1 trước khi sử dụng trong biểu thức.
// a++: Toán tử tăng sau (postfix increment). Giá trị của a sẽ được sử dụng trong biểu thức trước, sau đó mới tăng lên 1.

// Giải thích:
// Bắt đầu: a = 6

// ++a: a tăng lên 1 rồi mới sử dụng => a = 7, sử dụng giá trị 7 trong biểu thức
// result = 7

// a: giá trị hiện tại của a => 7
// result = 7 + 7 = 14

// a++: sử dụng giá trị hiện tại của a rồi mới tăng lên 1 => sử dụng giá trị 7 trong biểu thức, sau đó a tăng lên 8
// result = 14 + 7 = 21
// a = 8

// ++a: a tăng lên 1 rồi mới sử dụng => a = 9, sử dụng giá trị 9 trong biểu thức
// result = 21 + 9 = 30

// a: giá trị hiện tại của a => 9
// result = 30 + 9 = 39

// Kết thúc: a = 9, result = 39
