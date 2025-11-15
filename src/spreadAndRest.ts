const friend = ["abul", "kabul", "jahid", "junayed"];
const schoolFriend = ["jahid", "mizan"];
const collageFriend = ["junayed", "karim", "rahim"];
const allFriend = [...friend, ...schoolFriend, ...collageFriend];
console.log(allFriend);
for (const element of allFriend) {
  //   console.log(element);
}

const friendObj = { name: "hasan", phone: "junayed" };
for (const key in friendObj) {
  //   console.log(friendObj[key as keyof typeof friendObj]);
}

// rest operator in typeScript
function friends(...friends: string[]) {
  friends.forEach((friend) => console.log(friend));
}

friends("hasib", "kasib", "jsib", "jasim");
