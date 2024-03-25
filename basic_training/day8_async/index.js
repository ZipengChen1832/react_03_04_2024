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
//   }, 500);
// }

// function getUserInfo(userId, cb) {
//   setTimeout(() => {
//     const user = users.find((u) => u.id === userId);
//     cb(user);
//   }, 500);
// }

// function getFollowings(userId, cb) {
//   setTimeout(() => {
//     const followingIDs = followings.find(
//       (user) => user.userId === userId
//     ).followings;

//     cb(followingIDs);
//   }, 500);
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("we can't get joe")
      const joeInfo = users[0];
      resolve(joeInfo);
    });
  }, 500);
}

function getFollowings(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const followingIDs = followings.find(
        (user) => user.userId === userId
      ).followings;
      resolve(followingIDs);
    }, 500);
  });
}

function getUserInfo(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        reject(`user with id ${userId} not found`);
      }

      resolve(user);
    }, 500);
  });
}

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 500);
// });

// getJoe()
//   .then((joeInfo) => {
//     const { id } = joeInfo;
//     // return another promise
//     // return new Promise((res)=>{
//     //   res("iowqjrioqwoirjwqo")
//     // })
//     console.log("we got joe's id", id);
//     return getFollowings(id);
//   })
//   .then((followingIDs) => {
//     // return getUserInfo(6);
//     return Promise.all(followingIDs.map((id) => getUserInfo(id)));
//   })
//   .then((usersInfo) => {
//     // console.log(`${usersInfo[0].username} is friend with ${joeInfo.username}`);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

//async / await
async function foo() {
  try {
    const joeInfo = await getJoe();
    const followingIDs = await getFollowings(joeInfo.id);
    const followingUsers = await Promise.all(
      followingIDs.map((id) => getUserInfo(id))
    );
    console.log(
      `${followingUsers[0].username} is friend with ${joeInfo.username}`
    );
  } catch (err) {
    console.log("Error", err);
  }
}

// foo();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const BASE_URL = "https://jsonplaceholder.typicode.com";
async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  const posts = await res.json();
  console.log(posts);
}

async function createPost(newPost) {
  // const { title, userId, body } = newPost;
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  const data = await res.json();
  // console.log(data);
}

createPost({
  userId: 1,
  title: "My Post",
  body: "lorem ipsum",
});

const bar = async () => {
  return "bar";
};

bar().then((data) => console.log(data));
