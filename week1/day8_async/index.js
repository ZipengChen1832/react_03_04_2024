const users = [
  { id: 1, username: "Joe" },
  { id: 2, username: "Mike" },
  { id: 3, username: "Jack" },
];

const followings = [
  { userId: 1, followings: [2, 3] },
  { userId: 2, followings: [1] },
  { userId: 3, followings: [] },
];

// function getJoe(cb) {
//   setTimeout(() => {
//     const joeInfo = users[0];
//     cb(joeInfo);
//   }, 1000);
// }

// function getUserInfo(userId, cb) {
//   setTimeout(() => {
//     const user = users.find((u) => u.id === userId);
//     cb(user);
//   }, 1000);
// }

// function getFollowings(userId, cb) {
//   setTimeout(() => {
//     const followingIDs = followings.find(
//       (user) => user.userId === userId
//     ).followings;

//     cb(followingIDs);
//   }, 1000);
// }

//callback hell
// getJoe((joeInfo) => {
//   const { id } = joeInfo;
//   getFollowings(id, (followingIDs) => {
//     followingIDs.forEach((id) => {
//       getUserInfo(id, (userInfo) => {
//         console.log("userInfo", userInfo);
//       });
//     });
//   });
// });
// //do some thing

function getJoe() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const joeInfo = users[0];
      resolve(joeInfo);
    });
  }, 1000);
}

function getFollowings(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const followingIDs = followings.find(
        (user) => user.userId === userId
      ).followings;
      resolve(followingIDs);
    }, 1000);
  });
}

function getUserInfo(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      resolve(user);
    }, 1000);
  });
}

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// });

getJoe()
  .then((joeInfo) => {
    const { id } = joeInfo;
    // return another promise
    // return new Promise((res)=>{
    //   res("iowqjrioqwoirjwqo")
    // })
    console.log("we got joe's id", id);
    return getFollowings(id);
  })
  .then((followingIDs) => {
    const followingsPromise = followingIDs.map((id) => getUserInfo(id));
    console.log(followingsPromise);
    return getUserInfo(2);
  })
  .then((userInfo) => {
    console.log("we got one of joe's following details", userInfo);
  });

class Person {
  static abc(){
    console.log("abc");
  }

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}


const p123 = new Person("jack")

// Person.say