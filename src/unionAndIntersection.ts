type Dashboard = "Admin" | "User";

const admin: Dashboard = "Admin";

if (admin === "Admin") {
  console.log("go to admin dashboard");
} else if (admin === "User") {
  console.log("got to user dashboard");
}

type employ = {
  name: string;
  phone: string;
};

type manager = {
  designation: string;
};

type Command = manager & employ;

const user: Command = {
  name: "soriful",
  phone: "464644",
  designation: "employ",
};
