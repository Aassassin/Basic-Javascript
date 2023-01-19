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
const Form1 =document.getElementById("form1");
const Customername =document.getElementById("customerName");
const AddAmount =document.getElementById("addamount");
let accounts =[];
Form1.addEventListener("submit",(e)=>{
e.preventDefault();
const account =new BankAccount(Customername.value,+AddAmount.value);
accounts.push(account)
console.log(accounts);
});



//for deposit
const Form2=document.getElementById("form2");
 const DepoAccountNo =document.getElementById("depoaccountNumber");
 const DepoAccount =document.getElementById("depoamount");

 Form2.addEventListener("submit",(e)=>{
  e.preventDefault();
  const depovalue = accounts.find((value,index)=>value.accountNumber===+DepoAccountNo.value)
depovalue.deposit(+DepoAccount.value) ;
console.log(accounts);
})


//for withdraw
const Form3 =document.getElementById("form3");
const CheckaccountNo = document.getElementById("checkaccountNumber");
const Withdrawamt = document.getElementById("withdrawamount");

Form3.addEventListener("submit",(e)=>{
  e.preventDefault();
  const Withdrawvalue =accounts.find((value,index)=>value.accountNumber===+CheckaccountNo.value)
  Withdrawvalue.withdraw(+Withdrawamt.value);
console.log(accounts);
})



function BankAccount(CustomerName,balance =0){
this.customerName = CustomerName;
this.accountNumber = Date.now();
this.balance = balance;

this.deposit =function(amount){
  this.balance =this.balance +amount

}
this.withdraw =function(amount){
  this.balance =this.balance - amount
}
}

// const anilAccount =new BankAccount("Rahul giri",5000);
// const RamAccount =new BankAccount("Ram");
// RamAccount.deposit(3000);
// anilAccount.withdraw(1000)
// console.log(anilAccount);
// console.log(RamAccount)

