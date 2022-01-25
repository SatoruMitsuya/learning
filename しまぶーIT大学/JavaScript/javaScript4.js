//  *もくじ
//  *
//  *１．関数とはなにか？
//  *　　タスクや値計算を実行する分の集まり（MDN)
//  *
//  *２．今までの講座とのつながりについて
//  *　　オブジェクトのメソッドが関数です。
//  *　　メソッドの短縮記法についても説明

const foo = {
  // alert: function () {},
  alert() {},
};

foo.alert;

//  *３．関数の基礎のついて理解する
//  *　　return　の有無でなにが違うか
function 関数名(仮引数１, 仮引数２) {
  //いろいろな処理
  return 関数の返り値;
}

function cut(food) {
  // 切る処理
  const cutFood = food.slice();
  return cutFood;
}

const cutCarrot = cut(carrot); //人参
const cutPotato = cut(potato); //じゃがいも

function throwAway(food) {
  //捨てる処理
  delete food;
}

function isTweetable(text) {
  return text.length <= 140;
}

function alertTweetable(text) {
  // if (text.length <= 140) {
  //   alert("you can tweet!");
  // }
  if (isTweetable(text)) {
    alert("you can tweet!");
  }
}
//  *４．匿名（無名）関数について理解する
//  *　　関数は値として利用できる（関数式）

const isTweettable = function (text) {
  return text.length <= 140;
};

function alertTweetable(text) {
  if (isTweetable(text)) {
    alert("you can tweet!");
  }
}
//  *５．コールバック関数について理解する
//  *　　Windowオフジェクトのメソッド等でもよく使われます

//　関数の中でコールバック関数を行う関数を高階関数という
function 高階関数(コールバック関数) {
  // 処理
  コールバック関数();
}

function bring(food){
  if (/* 手洗いを終えたら */){
    //食材を持ってきてもらう処理
  }
}

function peer(food){
  if (/* 手洗いを終えたら */){
    //食材の皮をむく処理
  }
}

function cut(food){
  if (/* 手洗いを終えたら */){
    //食材を切ってもらう処理
  }
}

//高階関数を使った場合の処理
function washed(fn,food){
  // if( /*手洗いを終えたら */) {
  //   fn(); コールバック関数の処理
  // }
  if( /*手洗いを終えたら かつ 宿題が終えたら*/) {
    fn(food); //コールバック関数の処理
  }
}

function bring(food){
  //食材を持ってきてもらう処理
}

function peer(food){
　 //食材の皮をむく処理
}

function cut(food){
  //食材を切ってもらう処理
}

// washed(bring)
washed(bring,"にんじん");

//高階関数を使った時のメリット
// １．関数が得ていった場合の記述量が減る
// ２．それぞれの関数がコンパクトになり、役割が明確になる
// ３．後々、処理が変わる場合に変更する箇所が1か所で済む


function unFollow(){
  console.log("フォローを外しました");
}

// function cancelTweet(){
//   console.log("ツイートをキャンセルしました")
// }

const cancelTweet = function(){
  console.log("ツイートをキャンセルしました");
}

function confrimed(fn){
  if ( window.confirm("実行しますか？")){
    fn();
  }
}

confrimed(unFollow);

confrimed(function(){
  console.log("ツイートをキャンセルしました");
}
);

// function prompted(fn){
//   const input =  window.prompt("実行しますか？文字列を入れてください")
//   if (input === "実行"){
//     fn();
//   }
// }

// prompted(function() {console.log("リポジトリを削除")});

//高階関数を使って、匿名関数のコールバック関数に引数（input）を渡して匿名関数の中で判定処理をしている
//高階関数
function prompted(fn){
  const input =  window.prompt("実行しますか？文字列を入れてください")
  fn(input);
}

//コールバック関数の関数は匿名関数で作成
prompted(function(input) {
    if (input === "実行"){
      console.log("リポジトリを削除");
    }
  }
);

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
  console.log("フォロー解除");
})

const foods = ["にんじん", "じゃがいも", "玉ねぎ"];

// foods.forEach(function() {
//   console.log("foo");
// })

foods.forEach(function(food) {
  console.log(food);
})