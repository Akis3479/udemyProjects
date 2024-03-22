const user1 = {
    username: 'codeBase',
    followers: 0
};

const user2 = user1;
user2.followers = user1.followers++;

console.log(user1.followers);
console.log(user2.followers);