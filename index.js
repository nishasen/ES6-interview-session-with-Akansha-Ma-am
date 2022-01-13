//Ques 1
function consoleNum(){
  var isWorkshop = true;
  var num = 10;
  if(isWorkshop){
    let num=20;
    console.log(num)
  }
  console.log(num)
}

consoleNum();

//Ques 2
function sum(a, b){
  return a+b;
}
//(Convert this function to arrow function)
// function sum =(a, b)=>a+b; 
sum(1, "2")

//Ques 3
let c = null;
let d;
console.log(d)
console.log(typeof c, typeof d)
console.log(c==d);
console.log(c===d);
//Why type of null is object type?

//Ques 4
{
  var x = 2;
  var x = 3;
  console.log(x)
}

// {
//   let y = 2;
//   let y = 3;
//   console.log(y)
// }

//Ques 5
const myData = {name : "Akansha", hobby: "Painting"}
myData.name = "Tanay"
console.log(myData)

// myData = {name : "Tanay", hobby: "Cracking PJs"}
// console.log(myData)


//Ques 6
let arr1=[4,5,6];
//Convert is array to [1, 2,3,4,5,6,7,8]
arr1 = [1, 2,3,...arr1,7,8]
console.log(arr1)

//ques 7
var arr4 = [1,2]
var arr2 = [arr4, [3,4]]
var arr3 = [...arr2, [7,8]]
console.log(arr2)
console.log(arr3)

//ques8
let app =[..."apple"]
console.log(app)

//ques 9
var aa=1, bb=2;
[aa,bb]=[bb,aa]
console.log(aa,bb)



