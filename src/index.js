document.addEventListener("DOMContentLoaded", () => {

 document.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  document.querySelector("#submit").addEventListener('click', () => {
    let newTodo = document.getElementById('new-task-description').value
    const ul = document.getElementById("tasks")
    const li = document.createElement('li')
    const text = document.createTextNode(newTodo)
    li.appendChild(text)
    ul.appendChild(li)

    
    
})


document.querySelector("#submit").addEventListener('click', () => {
  document.getElementById('new-task-description').value = ""

})

})





























//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

  
//   const newTaskUl = document.getElementById("tasks");

 
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
 
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);