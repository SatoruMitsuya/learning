// Q どうやって変数を宣言するのか？
// A const 変数名 = 初期値;
//   let 変数名 = 初期値;
//   ver 変数名 = 初期値;

const foo = 100;
const _foo = 100;
const $foo = 100;
const 1foo = 100; //error

const fooWidth = 100; //〇camelCase　JSではこちらが慣例
const foo_width = 100; //×Snake_case

// const の特徴
// 再代入ができない、再定義できない
// ほぼほぼconstを使う

//これはConstを変更できる。
const obj = { foo: 123};

console.log(obj.foo);

obj.foo = 456;
console.log(obj.foo);

// let の特徴
// 再代入ができる、再定義できない。
// どうしてもの時にletを使う

let letNumber = 100;
// let letNumber = 200; error

console.log(letNumber);

letNumber = 200;
console.log(letNumber);

console.log("ok");

// var の特徴
// 再代入ができる、再定義できる。
var verNumber = 100;
var verNumber = 200;

console.log(verNumber)

