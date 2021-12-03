/**
 * デフォルト値
 */
const seyHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
seyHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);

console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 配列をまとめて受け取る
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [...arr4];
console.log(arr5);

const arr6 = [30, 40];
const arr7 = [...arr4, ...arr6];
console.log(arr7);

/**
 * map や filter を使った配列の処理
 */
const nameArr = ["ヤマダ", "山本", "田中"];
// 従来の書き方
console.log("従来の配列ループ");
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// map
console.log("mapでの配列ループ");
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
nameArr.map((name) => console.log(name));
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// ----------------------------
// filter
// ----------------------------
const numArr = [1, 2, 3, 4, 5];
console.log("奇数のみ取り出す");
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
