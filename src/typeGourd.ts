type NormalUser = {
  name: string;
  age: number;
  userProfile: string;
};

type AdminUser = {
  name: string;
  age: number;
  role: string;
};

function typeGourd(user: NormalUser | AdminUser) {
  if ("role" in user) {
    console.log(`this is ${user.name} role is ${user.role}`);
  } else {
    console.log(user.name);
  }
}

typeGourd({ name: "hasan", age: 22, role: "Admin" });
