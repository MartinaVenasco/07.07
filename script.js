const formEl = document.querySelector(".todolist");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputEl = formEl.querySelector("input");
  const newTask = inputEl.value;

  const newLiHtml = `<li> <input type="checkbox"/><span><h3>${newTask}</h3>
  </span><p>${
    +new Date().getHours() + ":" + new Date().getMinutes()
  } </p><button class="delete">DELETE</button></li>`;

  const listEl = document.querySelector(".tasklist");
  listEl.innerHTML += newLiHtml;
  inputEl.value = "";

  const buttonD = document.querySelector(".delete");

  listEl.addEventListener("click", (event) => {
	if (event.target.className === "delete") {
		event.target.closest("li").remove(); 
	  };
	});
  });


//metodo oggetti get/set//

// const tasklist = {
//   list: [],
//   addTask(task) {
//     this.list.push(task);
//     this.task = task;
//     this.renderHTML;
//   },
//   renderHTML() {
//     listEl.innerHTML = `<li id="id" class="message"> <input type="checkbox"/><span><h3>${task}</h3>
// </span><p>${
//       +new Date().getHours() + ":" + new Date().getMinutes()
//     } </p><button class="delete">DELETE</button></li>`;

//     const formEl = document.querySelector(".todolist");

//     formEl.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const inputEl = formEl.querySelector("input");
//       const newTask = inputEl.value;
//       const listEl = document.querySelector(".tasklist");
//       listEl.innerHTML += newLiHtml;
//       inputEl.value = "";

//       const buttonD = document.querySelector(".delete");

//       buttonD.addEventListener("click", (e) => {
//         document.querySelectorAll("#id").forEach((message) => message.remove());
//       });
//     });
//   },
// };
