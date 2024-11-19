//obj03.js

let arr = [1,2,3];

//arr[2] = 4;

//Java new int[3];
// new int[5]; -> ArrayList

//javascript 에 배열을 조작하는 함수

/*
앞    삭제 shift   추가 unshift
뒤    삭제 pop     추가 push
*/

//추가
console.log(arr);
arr.push(10);    //배열 뒤에 값 추가
arr.unshift(20); //배열 앞에 값 추가
console.log(arr);

//삭제

console.log(arr.pop());      //배열 뒤에 값 삭제
let shiftItem = arr.shift();    //배열 앞에 값 삭제
console.log(shiftItem);
console.log(arr);


let arr1 = [1,2,3];
let arr2 = [4,5,6]; 
//concat 배열 연결시키기
console.log(arr1.concat(arr2));
//concatenate

let arr3 = [80, ...arr1, 90];

//let arr3 = [80, 1,2,3, 90];
console.log(arr3);

console.log('----------------');
//let arr4 = arr1;
let arr4 = [...arr1]; 
//깊은복사 vs 얕은복사
//deep copy vs shallow copy
//주소가 아니라 배열 자체에 값으로 새로운 배열 (깊은복사)
console.log(arr1);
console.log(arr4);
arr4[2] = 30;
console.log(arr1);
console.log(arr4);

//splice 함수/메소드
//특정위치에 추가/삭제

let arr5 = [1,2,3,4,5];

console.log(arr5);
arr5.splice(1, 2);  //splice(위치인덱스, 삭제할갯수)
console.log(arr5);
arr5.splice(1, 1, 30);  //splice(위치인덱스, 삭제할갯수, 추가값)
//arr5[1] = 30;
console.log(arr5);
arr5.splice(2, 0, 40);  //2인덱스위치, 삭제는0개, 40값 추가
console.log(arr5);

console.log('-----------------------');
let obj = {};
console.log(obj);

obj.menu = "김밥";
obj.price = 3500;

obj.price = 3800;
obj.location = "큰길";
console.log(obj);

obj.menu = "참치김밥"; //수정 그냥 변수에 재저장

delete obj.menu;

console.log(obj);


//-----------------
console.log('---------------');

let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // 0 ~ 11    0:1월  10:11월
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

//String.valueOf
//Integer.parseInt
//member =  new Member();
console.log(Math.round(1.55));
console.log(Math.trunc(123.123));
