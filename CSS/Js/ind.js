// console.log('hello world');
// let a = 9;
// let A = 5;

// let a = 7;

// console.log(a);

// var g = 3;

// {
//     var g = 8;
// }

// console.log(g);

// var c = 10;
// // var t = 2

// var res = c-2;
//     console.log(res);

// var c = "hjadh";
// console.log(typeof(c));

// comparison operator
// equal to  w===t
// greater than 2 < 1    false
// smaller than 2 > 1    true
// smaller than 0 >= 1   false

// and , or , not

// && , || , !=

// AND  &&
// true && false  = false
// false && false = false
// false && true = false
// true && true = true;

// or ||

// true || false = true;
// false || false = false;
// false || true = true;
// true || true = true;

// not !=
// true  = false
// false = true;

// let age = 19

// if( true || false){
//     console.log(" i am coming");
// }else{
//     console.log(" now it my turn")
// }

// if(true){
//     console.log("i am also here")
// }

// if(  ){  //comparesion operator
//     console.log("i am a boy")
// }

// console.log(c*2);

// console.log(a, A);

// ---------------------------------------------------------

// let age = 50;

// if(age<=18){
//     console.log("child")
// }else if(age>=100){
//     console.log("enter write input");
// }else{
//     console.log("adult")
// }

// ---------------------------------------------------------
// let a = 2;

// nested condition  2 > 0

// if(a > 0){
//     if(a%2 == 0){   //2%2 == 0
//         console.log("a is positive even no")
//     }else{
//         console.log(" a is positive odd no")
//     }
// }else{
//     if(a%2 == 0){
//         console.log("a is negative even no")
//     }else{
//         console.log(" a is negative odd no")
//     }
// }

// while, for , do while

// while(){

// }

// console.log("1 ,")
// let a = 1;

// while(true){   // 2<10    10<10
//     console.log(a);
//     a = a+1;  // a =  1+1 // 2
// }

// let y = 0;
// while(y < 5){
//     console.log("Suraj Kumar")
//     y++;
// }

// *****
// *****
// *****
// *****

// let a = 'C'

// switch(a) {
//     case 'A':
//         console.log("i got A")
//         break;
//     case 'B':
//         console.log("i got B");
//         break;
//     case 'C':
//         console.log("i got C")
//         break;
//     default:
//         console.log("i am other then A ")
//         break;
// }

// console.log(" here i came")

// let a = 12
// let i = 1;
// while(i<=10){
//     console.log(a , "*" , i , " = ", a*i);
//     i++; // i = i+1  // 2 * 1 = 2  // 2 * 2 = 4
// }
// console.log(" 2nd table : ")

// let b = 6
// while(i<=10){
//     console.log(b , "*" , i , " = ", b*i);
//     i++; // i = i+1  // 2 * 1 = 2  // 2 * 2 = 4
// }

// let a =7;
// for(let i = 1; i<=10; i++){
//     console.log(a , "*" , i , " = ", a*i);
// }

// console.log(" 2nd table : ")

// let b = 6
// for(let i = 1; i<=10; i++){
//     console.log(b , "*" , i , " = ", b*i);
// }

// *        start = 0;  end 5; 
// **
// ***
// ****
// *****

// for(let i = 0; i<5; i++){ // 1, 2
//     let str ="";
//     for(let j = 0; j<=i; j++){  // 0<=0
//             str=str+"*";
//     }
//     console.log(str);
// }

//*****  start = 5;  end = 1;  i-- i 5 i   == 3
//****    for(j=0; j<i; j++){    o<5   1<5  2<5    5<5    0<4 1<4  2<4 3<4 4<4

    //}
//***
//**
//* 


// ***** 
// ****
// ***


// for( let i =5; i>0;  i--){   //  5> 0 4<0
//     let str;
//     for(let j = 0; j<i; j++){    0<5
//         str = str+"*";                       // ****    5<5  0 <4
//     }
//     console.log(str);
// }

// let a="";

// console.log(typeof(a))


// for (let i = 5; i > 0; i--) {
//     let str = ""
//     for (let j = 0; j < i; j++) {
//         str = str+"*";
//     }
//     console.log(str);
// }
//     *
//    **
//   ***
//  ****
// *****


// second largest number in array 
//let Ary = [23, 27, 31,7, 11, 15, 19];



//let size = Ary.length;
//let max  = 0;  // 23  27

// for(let i =0; i<size; i++){   // 
//     if(max < Ary[i]){  
//         max = Ary[i];
//     }
// }

// let secondMax = 0;   // 27

// for(let i =0; i<size; i++){
//     if(secondMax < Ary[i] && Ary[i] < max){  // 27  < 31  && 31 < 31
//         secondMax = Ary[i];
//     }
// }

// console.log(max);
// console.log(secondMax)

// console.log(Ary);

// let Ary = [23, 27, 31,7, 11, 15, 19]  
// let item = 103;

// let flag = false;

// for(let i =0; i<Ary.length; i++){
//     if(Ary[i] == item){
//         flag = true;
//         break;
//     }
// }

// console.log(flag);

//let arr=[1,6,3,13,2];  // 1 2 3 4 4 5    arr[3] = 6 // 1 2 3 6 13

// for(let i=0;i<arr.length;i++)
// {
//     var sum=0;
//     sum+=arr[i]; // sum = sum + arr[i];
// }

// let index =  3;
// let size = arr.length;

// console.log(size)

// for(let i = size; i> index; i--){ //  5   3 > 3
//     arr[i]  = arr[i-1];
// }

// arr[3] = 6;

// console.log(arr);

// let a = 9;
// let b = 5;

// let c = a;  //  c = 9    a  = b   b  = c
// a = b;
// b = c;

// console.log('the ans for a=   ', a ,' this is for b = ', b);
// a b
// console.log((2 > 3) ? " this is false " : " this is true ");

let student = [

    { 
    name : "Suraj",
    class : "616",
    roll_no : 8187,
    }, 
    
    {
        name : "vikee",
        class : "617",
        roll_no : 8182,
    },

    {
        name : "rahul",
        class : "617",
        roll_no : 8182,
    },
    {
        name : "rohan",
        class : "617",
        roll_no : 8182,
    },
]


// console.log(student.name, student.class, student.roll_no);
// console.log(student.name);
// console.log(student.class);
// console.log(student.roll_no);

// console.log(student[1].name)
// let i = 0;

// student.map((item)=>{
//     console.log(item.name, item.class, item.roll_no);
//     i++;
// })


// bubble sort  in  array 

// let arr =[1, 3 ,13 , 21 ,2, 5 , 4 , 7 ]; 

// for(let i=0; i<arr.length; i++){   // 0 < 9
//     for(let j = 0; j<(arr.length-1)-i; j++){  // 1  2, 8
//         if( arr[j]>arr[j+1]){  // 1 > 21   21 > 3  0 < 1 0 2 0 3 
//             let temp  =  arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }



// let arr = [1, 3 ,13 , 21 , 2, 5 , 4 , 7]; 

// let i = 0,j = arr.length-1;
// while( i < j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++; j--;
// }

// console.log(arr)

// [7 4 5 2 21 13 3 1 ]


// Function

// function add_number(a , b){
//     let x = a+b;
//     return x;
// }

// let ans = add_number(1,4);
// let ans2  = add_number(7, 4);
// console.log(ans+1);

// -----------------------------------------
// String

// let a = "Sure";
// let b = "Trust";

// let h = "MOM";
// let x = a+b;
// console.log(x);

// console.log("t" === "t");

// ---------------------------------

// function isPalandrone(a){
//     let j= a.length-1;
//     for(let i =0; i<j; i++){
//         if(a[i] != a[j]){
//             return false;
//         }
//         j--;
//     }
//     return true;
// }
// console.log(isPalandrone("madam"));


//  function in the Objects

const info = {
    add : (a , b)=> {return a+b},
    mult : (a, b)=> { return a*b },
    divname :  {
        div1 : (a,b )=> { return a/b},
        div2 : (a, b, c)=> {return (a/b)/c},
    }
}

// console.log(info.add(1,5));
// console.log(info.mult(5,2));

// console.log(info.divname.div1(10,2));
console.log(info.divname.div2(20,2,2));

// const infomation = {
//     name : "suraj",
//     id : 1231,
// }

// console.log(infomation.name);
// console.log(infomation.id);

// ======================== FAT ARROW Function ==============

const fun1 = (a, b) => {
    return(a+b);
}

// console.log(fun1(2,2));

console.log("The Answer of adding two number : ", fun1(3,5)," is the result of it")