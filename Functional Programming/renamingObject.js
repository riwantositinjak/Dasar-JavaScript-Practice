const user = {
    firstName : "Riwanto",
    lastName : "Stinjak"
}

const renameLastName = (newLastName , user) => {
    user.lastName = newLastName;
}

renameLastName("Sitinjak", user);

console.log(user);