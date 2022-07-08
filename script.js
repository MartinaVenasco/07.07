const formEl = document.querySelector(".todolist"); 
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".tasklist");

const TASK_LIST_STORAGE = "taskList";
const localStorageList = localStorage.getItem(TASK_LIST_STORAGE);
console.log({ localStorageList });

if (localStorageList) {
  listEl.innerHTML = localStorageList;
}
const taskList = [];

console.log(formEl);

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const newTask = inputEl.value;


  const newLiHtml = `<li> <input type="checkbox"/><span><h3>${newTask}</h3>
  </span><p>${
    +new Date().getHours() + ":" + new Date().getMinutes()
  } </p><button class="delete">DELETE</button></li>`;

  
  listEl.innerHTML += newLiHtml;
  inputEl.value = "";
  localStorage.setItem(TASK_LIST_STORAGE, listEl.innerHTML);})

  
listEl.addEventListener("click", function (event) {
  const targetEL = event.target;

  console.log(event.target); 
  console.log(event.currentTarget);

  if (targetEL.tagName === "INPUT") {
    console.log("click su input");
  }

  if (targetEL.tagName === "BUTTON") {
    console.log("sono un button elimina");
    const parentLI = targetEL.closest("li");

    if (parentLI) {
      parentLI.remove();
      localStorage.setItem(TASK_LIST_STORAGE, listEl.innerHTML);
    }
   }
});   






// //metodo oggetti get/set//
// const formEl = document.querySelector(".todolist");
// const inputEl = formEl.querySelector("input");
// const listEl = document.querySelector(".tasklist"); // lista
// const TASK_LIST_STORAGE = "taskList";
// const localStorageList = localStorage.getItem(TASK_LIST_STORAGE);
// console.log({ localStorageList });

// const taskList = {
//   list: [],
//   addTask(task) {
//     this.list.push(task);
//     this.renderHTML();
//     this.saveOnLocalStorage();
//   },
//   removeTask(index) {
//     this.list.splice(index, 1);
//     this.renderHTML();
//     this.saveOnLocalStorage();
//   },
//   renderHTML() {
//     listEl.innerHTML = this.list // ['Ciao']
//         .map((task, index) => {
//           // Ciao
//           const currentDate = new Date();
//           const date = ` ${currentDate.getHours()}:${currentDate.getMinutes()}`;

//           const newTaskHTML = `<li>
//           <input type="checkbox" /> 
//           <time>${date}</time> 
//           <span>${task}</span>
//           <button data-index="${index}">elimina</button>
//         </li>`;

//           return newTaskHTML;
//         })
//         .join("");
//   },
//   saveOnLocalStorage() {
//     localStorage.setItem(TASK_LIST_STORAGE, JSON.stringify(this.list));
//   }
// };

// taskList.list = JSON.parse(localStorageList) || [];

// if (taskList.length !== 0) {
//   taskList.renderHTML();
// }

// formEl.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const newTask = inputEl.value;
//   taskList.addTask(newTask);

//   inputEl.value = "";
// });

// listEl.addEventListener("click", function (event) {
//   const targetEL = event.target;



//   if (targetEL.tagName === "INPUT") {
//     console.log("click su input");
//   }

//   if (targetEL.tagName === "BUTTON") {
//     taskList.removeTask(targetEL.getAttribute("data-index"));

//     if (taskList.list.length === 0) {
//       console.log("inserisco nuovamente i primi elementi in array");
//       taskList.list = ["Primo"];
//       taskList.renderHTML();
//     }
//   }
// });