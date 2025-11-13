enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
console.log(Role.Admin);

const checkingRole = (role: Role) => {
  if (role === Role.Admin) {
    return console.log("Access Admin Page");
  } else if (role === Role.Editor) {
    return console.log("Access Editor Page");
  }
};
checkingRole(Role.Admin);
