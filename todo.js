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



// function BankAccount(CustomerName,balance =0){
// this.customerName = CustomerName;
// this.accountNumber = Date.now();
// this.balance = balance;

// this.deposit =function(amount){
//   this.balance =this.balance +amount

// }
// this.withdraw =function(amount){
//   this.balance =this.balance - amount
// }
// }

// const anilAccount =new BankAccount("Rahul giri",5000);
// const RamAccount =new BankAccount("Ram");
// RamAccount.deposit(3000);
// anilAccount.withdraw(1000)
// console.log(anilAccount);
// console.log(RamAccount)



//constructor function in javascript

// function BankAccount(CustomerName,balance=0){
// this.CustomerName = CustomerName;
// this.accountNo = Date.now();
// this.balance =balance;

// // this.deposit =function(amount){
// // this.balance +=amount;
// //}
// // this.Withdraw =function(amount){
// //   this.balance-=amount;
// // }

// }
// BankAccount.prototype.deposit =function(amount){
//   this.balance +=amount;
//   console.log(`Deposited ${amount},Current balance is :${this.balance}`);
// }
// BankAccount.prototype.Withdraw =function(amount){
//   if(this.balance>=amount){
    
  
//   this.balance-=amount;
//   console.log(`withdraw ${amount},Current balance is:${this.balance}`);
//   }else{
//     console.log(`Insufficient fund,Current balance is : ${this.balance}`);
//   }
// }


//  const myacc =new BankAccount("Rahul",5000);
//  const myacc1 =new BankAccount("Rahul");
// // const myacc2 =new BankAccount("shyam");
//  myacc1.deposit(8000);
// myacc.Withdraw(6000);
// // myacc2.deposit(3000)
//  console.log(myacc,myacc1);
// // console.log(myacc1);
// // console.log(myacc2);


//Class based OOP(concept in javascript)

//Constructor
  //constructor is a special method that is used to_ 
  //initialize the object,when it is created

// class BankAccount {


// //constructor
// constructor(CustomerName,balance = 0){
//   this.CustomerName=CustomerName;
//   this.accountNumber = Date.now();
// this.balance =balance;
// }
// deposit(amount){
//   this.balance =this.balance +amount;
//   console.log(`deposited ${amount}, Current balance is : ${this.balance}`)
// }

// withdraw(amount){
//   if(this.balance>=amount){
//     this.balance=this.balance-amount;
//     console.log(`Withdraw ${amount}, Current balance is : ${this.balance}`)
//   }else{
//     console.log(`Insufficient fund, Current balance is :${this.balance}`)
//   }
// }
// }

// const myaccc =new BankAccount("Rahul",5000);
// const myaccc1 =new BankAccount("jyot");
// console.log(myaccc);
// myaccc.withdraw(5001);
// myaccc1.deposit(5500);
// console.log(myaccc1);


class Person{
constructor(firstName,LastName,age,gender){
  this.firstName=firstName;
  this.LastName=LastName;
  this.age=age;
  this.gender =gender;

}
sayhello(){
  console.log(`My name is ${this.firstName} and my age is ${this.age} and I am ${this.gender}`)
}
}
const myPerson =new Person("Rahul","Giri","22","Male");
console.log(myPerson);
const hello =myPerson.sayhello();
console.log(hello);
