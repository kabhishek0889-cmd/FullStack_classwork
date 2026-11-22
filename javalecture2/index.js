// var marks  = 60;
// if(marks >= 80){
//     console.log('Grade A');
// }
// else if(marks >= 60){
//     console.log('Grade b');
// }
// else{
//     console.log('Grade c');
// }


// var days = "jan"
// switch(days){
//     case "sun":{
//         console.log("day 1");
//         break;
//     }
//     case "mon":{
//         console.log("day 2");
//         break;
//     }
//     case "tues":{
//         console.log("day 3");
//         break;
//     }
//     case "wed":{
//         console.log("day 4");
//         break;
//     }
//     case "thurs":{
//         console.log("day 5");
//         break;
//     }
//     case "frid":{
//         console.log("day 6");
//         break;
//     }
//     case "sat":{
//         console.log("day 7");
//         break;
//     }
//     default:
//         console.log("error");
//         break;
// }
// // ternary Operator
// var num = (5 ==='5') ? 6:7;
// console.log(num);


// for(let i =0;i<5;i++){
//     console.log(i)
// }

// let n = 405;
// while(n>0){
//     console.log(n%10);
//     n=Math.floor(n/10);
// }

// for(let i =0;i<5;i++){
//     for(let j = 0;j<6;j++){
//         console.log("nested loop"+ i*j);
//     }
// }


// lectur 3 javascript lab

// var funExpretion = function(){
//     console.log('HELLO ! WE ARE LEARNING FUNCTION EXPRESSION')
// }
// funExpretion()

// var namedFunExp = function nameFun(num){
//      return num*num;
// }
// console.log(namedFunExp(3));

// var arrowFun = ()=>{
//     console.log("We are working on arrow funstion");
// }
// arrowFun();

// const implicitArrowFun = (num) => num/10;
// var devision = implicitArrowFun(100);
// console.log(devision)

// function displayContent(name,age){
//     console.log({
//         Name : name,
//         Age:age

//     })
    
// }

// displayContent('Abhishek',21)

// var display = (name,age) =>{
//     console.log({
//         Name:name,
//         Age:age

//     })
// }
// display('Abhishek',20)

// var disk = (name,age) => ({Name:name, Age:age})
// console.log(disk('Abhishek',24));


// function argument(){
//     console.log(arguments);
// }
// argument(10,20,'hello');\\



// var aeguArrow = (...args) =>{
//     console.log({
//         name:args[0],
//         class: args[1],
//         details:args[2]

//     })
//     console.log(args.slice(1))
// }

// aeguArrow('xyz','Ae','job','hub');


// function greet(name='Abhishek'){
//     console.log("Hello",name)

// }
// greet();
// greet("Abhishek");

// function fabonacciSeries(){
//     let n =10;
//     var a = 0;
//     var b = 1;
//     var c = 0;

//     while(n>0){
//         console.log(a," ");
//         c=a;
//         a=b;
//         b += c;
//         n--;
//     }

// }
// fabonacciSeries()

//lexical Scope

// function outfun(){
//     var s = 10;
//     const b = 20;
//     const c = 30;


//     function inner(){
//         var innerv = 50;
//         console.log(s);
//         console.log(b);
//         console.log(c);
//     }
//     inner();
//     console.log(innerv);
// }
// outfun()

// closure


// function outFun(){
//     var message = "Hello";


//     function inFun(){
//         console.log(message);
//     }
//     return inFun;
  


// }
// var message = outFun();
// message()


// function Outcounter(){
//     var count = 0;

//     function inn(){
//         console.log(++count);
//     }
//     return inn;

// }
// var counter1 = Outcounter();
// var counter2 = Outcounter();
// counter1();
// counter1();
// counter1();
// counter2();

// IIFF function
// (function(){
//     console.log('Basic IIFF Function');
// })()

// ((name,age) =>{
//     console.log({
//         name:name,
//         age:age

//     })
// })('xyz',20)


// Array 

//push pop
// var arr = ['Abhi', 8];
// arr.push(6);
// console.log(arr)
// arr.pop(8);
// console.log(arr)

// unshift shift
// var arr = [6,7,8,9,0];
// arr.unshift(8);
// console.log(arr);

// var arr = [6,7,8,9,0];
// arr.shift(8);
// console.log(arr);

// includes()

// var arr  = [2,4,5,'xt'];
// arr.includes('xt');
// console.log(arr.includes('xt'));


//indexof()
// this return the index number of element

// console.log(arr.indexOf('xt'));

//slice

// console.log(arr.slice(1,3))

//concate()

// var arr1 = [1,2,3,4,5,2,43,2,4,5,5,3,1,434,5]
// var arr2 = [4,5,6,2,4,2,5,64,6,6,3,67,7,88,99,0]
// console.log(arr1+arr2)

// sort()
// arr1.push(12,25);
// console.log(arr1.sort())

var obj = [
{
    id : 1,
    Name : "Abhishek",
    age : 20,
    email:"kabhishek@gmail.com"
},

{
    id2 : 2,
    Name :"Govind",
    age : 20 ,
    email2:"govind@gmail.com"

},
{
    id : 3,
    Name : "Anand",
    age : 21,
    email:"anand@gmail.com"

}]

// ForEach
// obj.forEach((data)=>{
//     console.log(data)
// })

// obj.forEach((data,index,arr)=>{
//     console.log(index)
//     console.log(data)
//     console.log(arr)
  
// })

//MAP 

// var obj1 = obj.map((data)=>{
//     return{...data, age: data.age+1}
// })
// console.log(obj1)

// obj.map((data,index,arr)=>{
//     console.log('index:' , index);
//     console.log('arr:' ,arr)
// })

//filter

// var age21 = obj.filter((data)=> data.age === 21);
// console.log(age21)

//reduce single result deta hai array se

// console.log(obj.reduce ((sum,data) =>sum + Number( data.age),0))

// obj.map().filter().reduce()

// var arr = [8,9,6,3,2,5,6,8,9,24,2]
// console.log(arr.filter((data) => data%2 === 0).map((num) =>num+5).reduce((sum,num)=>sum+num))

// Object.keys(obj_name)
// Object.Value(obj_name)
// Delete obj.keyvalue

// try{
//     var a = Num;
//     const Num =10;


// }
// catch(e){
//     console.error('error',e.message)

// }
// finally{
//     console.log("code has been executed")

// }

// function ageE(age){

//     try{
//         if(age<18){
//             throw new Error("your age is not as requirement");
//         }
//         console.log('you are Eligible to give vote');
//     }catch(e){
//         console.log(e.message);
//     }
//     finally{
//         console.log("done");
//     }

// }
// ageE(10)

























