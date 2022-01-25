// async-await

// web APIとは？
// 実際に叩いてみよう　→　https://jsonplaceholder.typicode.com/

// こういった　API　をつくるのがバックエンドの仕事
// 主にフロントエンドはバックエンドが作ったAPIを使ったUIを構築する。
// APIをプログラム側（JavaScript）から叩いてデータのやり取りを行う。

async function callApi() {
  //実際にAPI叩く処理

  const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res);

  const users = await res.json();
  console.log(users);
}

callApi();

//主流じゃない他の非同期の書き方
// function callApi() {
//   //実際にAPI叩く処理

//   window
//     .fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (users) {
//       console.log(users);
//     });
// }

// callApi();

// function callApi() {
//   //実際にAPI叩く処理
//   const xhr = new XMLHttpRequest();
//   xhr.open("https://jsonplaceholder.typicode.com/users");
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = function () {
//     console.log(xhr.response);
//   };
// }

// callApi();
