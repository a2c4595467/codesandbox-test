/**
 * const, let等の変数宣言
 */

// 従来の変数宣言
var val1 = "var変数を宣言";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letでの宣言
let val2 = "let変数を宣言";
console.log(val2);

// let は上書きが可能
val2 = "let変数は上書きが可能";
console.log(val2);

// let は再宣言ができない
//let val2 = "let変数を再宣言";

// const 宣言
const val3 = "const変数を宣言";
console.log(val3);

// const 変数は上書き不可
//val3 = "const変数を上書きします";

// const val3 = "const変数を再宣言";
// console.log(val3);

// オブジェクトを定義
const val4 = {
  name: "aaaa",
  age: 30
};
console.log(val4);

// const定義のオブジェクトは書き換えが可能
val4.name = "bbbb";
console.log(val4);

// const定義のオブジェクトにプロパティ追加する
val4.address = "tokyo";
console.log(val4);

// const定義の配列
const val5 = ["dog", "cat"];
console.log(val5);

// 書き換え
val5[0] = "dog_dog";
console.log(val5);

// 要素の追加
val5.push("monky");
console.log(val5);

/**
 * テンプレート文字列
 */
// 文字列の中にJSを埋め込められる
const name = "aaa";
const age = 30;

// 「私の名前はaaaです。年齢は30歳です」
// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * アロー関数
 */
// 従来
function func1(str) {
  // 個々に処理を書く
  return str;
}
console.log(func1("func1()です"));

const func1b = function (str) {
  return str;
};
console.log(func1("変数の中に関数を入れたfunc2()です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2()です"));

// こういう書き方もできる
const func2b = (str) => str;
console.log(func2b("func2b()です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

//ブラケット省略も可能
const func3b = (num1, num2) => num1 + num2;
console.log(func3b(30, 20));

/**
 * 分割代入
 */
const myProfile = {
  name1: "aaa",
  age1: 30
};

const message3 = `名前は${myProfile.name1}です。${myProfile.age1}歳です`;
console.log(message3);

const { name1, age1 } = myProfile;
const message3b = `名前は${name1}です。${age1}歳ですよ`;
console.log(message3b);

// 配列
const myProfile2 = ["aaa", 30];
const message3c = `名前は${myProfile2[0]}です。${myProfile2[1]}歳ですわ`;
console.log(message3c);

const [name2, age2] = myProfile2;
const message3e = `名前は${name2}です。${age2}歳ですたい`;
console.log(message3e);
