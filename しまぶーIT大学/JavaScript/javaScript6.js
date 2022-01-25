const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// button.addEventListener("click", async function () {
//   // データ取得
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   // console.log(users);

//   // DOM操作

//   // jsから文字を表示させる
//   // const list = document.createElement("li");
//   // list.innerText = "foo";
//   // console.log(list);
//   // lists.appendChild(list);

//   // 繰り返し処理
//   // for (let index = 0; index < array.length; index++) {
//   //   const element = array[index];
//   // }

//   // for (let index = 0; index < users.length; index++) {
//   //   const user = users[index];
//   //   const list = document.createElement("li");
//   //   list.innerText = user.name;
//   //   lists.appendChild(list);
//   // }

//   // array.forEach(element => {

//   // });
//   users.forEach(function (user) {
//     // console.log(user);

//     // ＩＦ文
//     // if (user.id <= 5) {
//     //   const list = document.createElement("li");
//     //   list.innerText = user.name;
//     //   // list.innerText = user.address.zipcode;
//     //   console.log(list);
//     //   lists.appendChild(list);
//     // }
//     const list = document.createElement("li");

//     jsonデータ取得
//     list.innerText = user.name;
//     // list.innerText = user.address.zipcode;
//     lists.appendChild(list);
//   });
// });

// window.addEventListener("load", async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   users.forEach(function (user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// });

// //リファクタリング
// async function listUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   users.forEach(function (user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// }

// button.addEventListener("click", listUsers);

// window.addEventListener("load", listUsers);

//リファクタリング２

// DOM
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
}

//  関数
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function callUsers() {
  const users = await getUsers();
  users.forEach(addList);
}

// イベント
window.addEventListener("load", callUsers);
button.addEventListener("click", callUsers);
