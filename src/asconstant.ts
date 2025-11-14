const Role = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/*    */

console.log(Role.Admin);

const checkingRole = (role: (typeof Role)[keyof typeof Role]) => {
  if (role === Role.Admin) {
    return console.log("Access Admin Page");
  } else if (role === Role.Editor) {
    return console.log("Access Editor Page");
  }
};
checkingRole(Role.Admin);
