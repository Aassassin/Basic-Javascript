//const title =document.getElementById("title");
//console.log(title)
//const desc =document.getElementById("description");
//const form =document.getElementById("form");
//console.log(form)
//const container =document.querySelector(".container");
//console.log(container) //checking connection

// const title = document.getElementById("title");
// const description = document.getElementById("description");
// const form = document.querySelector("form");
// const container = document.querySelector(".container");
// let tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks"))
// :[];
// showAllAddTasks();

// function showAllAddTasks() {
//   tasks.forEach((value, index) => {
//     const div = document.createElement("div");

//     div.setAttribute("class", "task");

//     const innerDiv = document.createElement("div");
//     div.append(innerDiv);
//     const p = document.createElement("p");
//     p.innerText = value.title;
//     innerDiv.append(p);
//     const span = document.createElement("span");
//     span.innerText = value.description;
//     innerDiv.append(span);
//     const btn = document.createElement("button");
//     btn.setAttribute("class", "deleteBtn");
//     btn.innerText = "-";
//     btn.addEventListener("click", () => {
//       removeTasks();
//       tasks.splice(index, 1);
//       localStorage.setItem("tasks",JSON.stringify(tasks));
//       showAllAddTasks();
//     });
//     div.append(btn);
//     container.append(div);
//   });
// }
// function removeTasks() {
//   tasks.forEach(() => {
//     const mainDiv = document.querySelector(".task");
//     mainDiv.remove();
//   });
// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   removeTasks();
//   tasks.push({
//     title: title.value,
//     description: description.value,
//   });
//   localStorage.setItem("tasks",JSON.stringify(tasks));
//   showAllAddTasks();
// });


//OOP concept
//constructor function

//DOM manipulation
// const Form1 =document.getElementById("form1");
// const Customername =document.getElementById("customerName");
// const AddAmount =document.getElementById("addamount");
// let accounts =[];
// Form1.addEventListener("submit",(e)=>{
// e.preventDefault();
// const account =new BankAccount(Customername.value,+AddAmount.value);
// accounts.push(account)
// console.log(accounts);
// });



// //for deposit
// const Form2=document.getElementById("form2");
//  const DepoAccountNo =document.getElementById("depoaccountNumber");
//  const DepoAccount =document.getElementById("depoamount");

//  Form2.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   const depovalue = accounts.find((value,index)=>value.accountNumber===+DepoAccountNo.value)
// depovalue.deposit(+DepoAccount.value) ;
// console.log(accounts);
// })


// //for withdraw
// const Form3 =document.getElementById("form3");
// const CheckaccountNo = document.getElementById("checkaccountNumber");
// const Withdrawamt = document.getElementById("withdrawamount");

// Form3.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   const Withdrawvalue =accounts.find((value,index)=>value.accountNumber===+CheckaccountNo.value)
//   Withdrawvalue.withdraw(+Withdrawamt.value);
// console.log(accounts);
// })



// // function BankAccount(CustomerName,balance =0){
// // this.customerName = CustomerName;
// // this.accountNumber = Date.now();
// // this.balance = balance;

// // this.deposit =function(amount){
// //   this.balance =this.balance +amount

// // }
// // this.withdraw =function(amount){
// //   this.balance =this.balance - amount
// // }
// // }

// // const anilAccount =new BankAccount("Rahul giri",5000);
// // const RamAccount =new BankAccount("Ram");
// // RamAccount.deposit(3000);
// // anilAccount.withdraw(1000)
// // console.log(anilAccount);
// // console.log(RamAccount)



// //constructor function in javascript

// // function BankAccount(CustomerName,balance=0){
// // this.CustomerName = CustomerName;
// // this.accountNo = Date.now();
// // this.balance =balance;

// // // this.deposit =function(amount){
// // // this.balance +=amount;
// // //}
// // // this.Withdraw =function(amount){
// // //   this.balance-=amount;
// // // }

// // }
// // BankAccount.prototype.deposit =function(amount){
// //   this.balance +=amount;
// //   console.log(`Deposited ${amount},Current balance is :${this.balance}`);
// // }
// // BankAccount.prototype.Withdraw =function(amount){
// //   if(this.balance>=amount){
    
  
// //   this.balance-=amount;
// //   console.log(`withdraw ${amount},Current balance is:${this.balance}`);
// //   }else{
// //     console.log(`Insufficient fund,Current balance is : ${this.balance}`);
// //   }
// // }


// //  const myacc =new BankAccount("Rahul",5000);
// //  const myacc1 =new BankAccount("Rahul");
// // // const myacc2 =new BankAccount("shyam");
// //  myacc1.deposit(8000);
// // myacc.Withdraw(6000);
// // // myacc2.deposit(3000)
// //  console.log(myacc,myacc1);
// // // console.log(myacc1);
// // // console.log(myacc2);


// //Class based OOP(concept in javascript)

// //Constructor
//   //constructor is a special method that is used to_ 
//   //initialize the object,when it is created

// // class BankAccount {


// // //constructor
// // constructor(CustomerName,balance = 0){
// //   this.CustomerName=CustomerName;
// //   this.accountNumber = Date.now();
// // this.balance =balance;
// // }
// // deposit(amount){
// //   this.balance =this.balance +amount;
// //   console.log(`deposited ${amount}, Current balance is : ${this.balance}`)
// // }

// // withdraw(amount){
// //   if(this.balance>=amount){
// //     this.balance=this.balance-amount;
// //     console.log(`Withdraw ${amount}, Current balance is : ${this.balance}`)
// //   }else{
// //     console.log(`Insufficient fund, Current balance is :${this.balance}`)
// //   }
// // }
// // }

// // const myaccc =new BankAccount("Rahul",5000);
// // const myaccc1 =new BankAccount("jyot");
// // console.log(myaccc);
// // myaccc.withdraw(5001);
// // myaccc1.deposit(5500);
// // console.log(myaccc1);


// class Person{
// constructor(firstName,LastName,age,gender){
//   this.firstName=firstName;
//   this.LastName=LastName;
//   this.age=age;
//   this.gender =gender;

// }
// sayhello(){
//   console.log(`My name is ${this.firstName} and my age is ${this.age} and I am ${this.gender}`)
// }
// }
// const myPerson =new Person("Rahul","Giri","22","Male");
// console.log(myPerson);
// const hello =myPerson.sayhello();
// console.log(hello);


//Inheritance
// function BankAccount(CustomerName,balance=0){
//     this.CustomerName =CustomerName;
//     this.balance =balance;
//     this.accounNo =Date.now();

//     // this.deposit =function (amount){
//     //     this.balance +=amount;
//     // }
//     // this.withdraw=function(amount){
//     //     this.balance -=amount;
//     // }

// }


// //creating prototype method
//  BankAccount.prototype.deposit =function (amount){
//      this.balance +=amount;
//  }
// BankAccount.prototype.withdraw =function(amount){
//     this.balance -=amount;
// }
// const myacc =new BankAccount("rahul",5000);
// console.log(myacc);
// myacc.withdraw(2000);


// function CurrentAccount(CustomerName,balance =0){
//     BankAccount.call(this,CustomerName,balance)
//     this.transactionLimit =50000;

// }
// const myacc2 =new  CurrentAccount("Assassin",2000);
// console.log(myacc2);

// function SavingAccount(CustomerName,balance =0){
//     BankAccount.call(this,CustomerName,balance)
//     this.transactionLimit =40000;

// }

// CurrentAccount.prototype.takebusinessloan =function(amount){
//     console.log(`taking business loan is : ${amount}`)
// }
// const myacc3 =new SavingAccount("RAAhul",100000);
// console.log(myacc3);
// CurrentAccount.prototype =Object.create(BankAccount.prototype);

// myacc2.takebusinessloan(3000000);


// //Classwork
// function Human(weight,height,name){
//     this.weight=weight;
//     this.height=height;
//     this.name=name;
    
//     // this.saybye=function(){
//     //     console.log(`Goodbye ${this.name} meet u tommorrow`);
//     // }
// }
// Human.prototype.saybye =function(name){
//     console.log(`Goodbye ${name}`)
// }
// const wild =new Human(70,5.4,"Rahul");
// console.log(wild);
// wild.saybye("Assassin");



//function based OOP
// function BankAccount(CustomerName,balance =0){
//     this.CustomerName =CustomerName;
// this.accountNumber =Date.now();
// this.balance=balance;

// }
// BankAccount.prototype.deposit =function(amount){
//     this.balance+=amount;
// }
// BankAccount.prototype.withdraw =function(amount){
//     this.balance -=amount;
// };

// //child class(Inheritance)
// function CurrentAccount(CustomerName,balance =0){
//     BankAccount.call(this,CustomerName,balance);//constructor calling
//     this.transactionLimit =50000;
// }
// CurrentAccount.prototype =Object.create(BankAccount.prototype);
// CurrentAccount.prototype.takebusiessLoan =function(amount){
//     console.log(`Taking loan is allowed upto ${amount}`)
// }

// //const myacc =new BankAccount("Rahul",5000);
// const myacc =new CurrentAccount("Rahul",6000);
// myacc.deposit(2000);
// myacc.takebusiessLoan(60000)
// console.log(myacc);




// Class based OOP and Inheritance
// class BankAccount {
// CustomerName
// accountNumber
// #balance

// constructor(CustomerName,balance =0){
//     this.CustomerName=CustomerName;
//     this.accountNumber=Date.now();
//     this.#balance =balance;
// }
// deposit(amount){
//     this.#balance+=amount;
//     console.log(`Deposited ${amount},Current balance is :${this.#balance}`)
// }
// Withdraw(amount){
//     if(this.#balance>=amount){
//         this.#balance-=amount;
//     console.log(`Withdraw ${amount},Current balance is : ${this.#balance}`)
//     }else{
//         console.log(`Insufficient fund, You have only : ${this.#balance}`)
//     }
// }
// //setter
// set balance(amount){
// this.#balance =amount;
// }
// //getter
// get balance(){
// return this.#balance;
// }
// }

// class CurrentAccount extends BankAccount {
//     constructor(CustomerName,balance =0){
//       super(CustomerName,balance);
//       this.transactionLimit =50000;
//     }
//      #CalculateInterest(amount){
//       const Interest =amount*0.1;
//       console.log(`Interest amount is :${Interest}`)
//     }
//     TakeBussinessLoan(amount){
//         this.#CalculateInterest(amount)
//         console.log(`Taking bussiness loan is :${amount}`)
//     }
// }

// const myacc =new CurrentAccount("Rahul",10000);
// myacc.TakeBussinessLoan(90000)


// console.log(myacc);



//Static property and method

// class Calculator{
//     static add(a,b){
//         return a+b;
//     }
//     static sub(a,b){
//         return a-b
//     }
//     static mul(a,b){
//         return a*b;
//     }
//     static div(a,b){
//         return a/b;
//     }
// }
// let addition =Calculator.add(4,5);
// let subst =Calculator.sub(9,3);
// let multiply =Calculator.mul(9,3);
// let divide =Calculator.div(9,3);
// let ans = Math.random();
// console.log(ans)
// //console.log(addition,subst,multiply,divide)

// class User{
//     static id= 1;
//     constructor(name,age,income){
//         this.name=name;
//         this.age=age;
//         this.income=income;
//         this.id=User.id++;
//     }
//     static sortByAge(a,b){
//         return a.age-b.age;
//     }
//     static sortByIncome(a,b){
//         return a.income-b.income;
//     }

// }
// const user1=new User("Assassin",22,10000);
// const user2=new User("Rahul",21,122200);
// const user3=new User("Kitkat",19,18009);
// const users =[user1,user2,user3];
// //console.log(user1,user2,user3);
// //users.sort(User.sortByAge)
// users.sort(User.sortByIncome)
// console.log(users);


// function hello(name="RAM"){
//     setTimeout(()=>{
//     for(let i=0;i<=10;i++){
//          console.log(`${name} :${i}`);
//     }
// },4000);
// }

// function bye(){
//     setTimeout(() => {
//       alert("Hello world")  
//     }, 5000);
    
//     console.log("bye")
// }
// hello();
// bye();


//hoisting
// console.log(myfunc(4,3));
// function myfunc(a,b){
//   return a+b;
// }

// console.log(myfunc(3,2));
// const myfunc =(a,b)=>{
//   return a+b;
// }


//bom

// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.href);

// const myfunc =()=>location.assign("https://www.youtube.com");
// console.log(history);
// console.log(screen)

//async and await in javascript(promise handling)
// const h1 =document.querySelector("h1");
// const url ="https://catfact.ninja/fact";

// const fetchdata =async()=>{
// try{
  
//   const res =await fetch(url);
  
// const data =await res.json();

// h1.innerText =data.fact;

// }catch(error){
//   console.log(error.message);
// }
// }
// fetchdata();


//normal function

// const obj ={
//   name:"rahul",
//   printName:function(){
//     console.log(this.name);
//   }
// };
// obj.printName();

//Arrow function
const obj1 ={
  name:"Assassin",
  printName:()=>{
    console.log(this.name);
  }
}
obj1.printName();

//here, in normal function 'this' refers to the object and it will print "rahul"
// but in arrow functio 'this' keyword refers to the global object and it will print
// 'undefined'

//normal function
// function printArgument(){
//   console.log(arguments);
// }
// printArgument(1,2,3)


//arrow function
// const printArgument =()=>{
//   console.log(arguments);
// }
// printArgument(1,2,3);

//here in normal function you can access the argument object but in arroe function you cannot
//acccess the arguemnt object


// function person(name){
//   this.name= name;
// }
// const john =new person("john");
// console.log(john.name);

const person =(name)=>{
  this.name =name;
}
const ram =new person("ram");
console.log(ram.name);