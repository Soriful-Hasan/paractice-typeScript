// ? : ternary operator
//?? : nullish coalescing operator
//? : difference between ternary & nullish coalescing operator
//? : optional chaining

const isAdmin = true;
const res = isAdmin === true ? "Admin" : "Guest";
console.log(res);

const theme = undefined;
const resTheme = theme ?? "light";
console.log(resTheme);
