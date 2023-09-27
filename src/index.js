document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let text = document.getElementById("new-task-description");
  let submit = document.querySelector("input[type=submit]");
  let ul = document.getElementById("tasks");
  let totalList = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newLi = document.createElement("li"); 
    let button = document.createElement("button"); 
    button.innerHTML = "X"; 
    button.addEventListener("click", () => {
      newLi.remove();
    });
    newLi.innerHTML = text.value; 
    newLi.appendChild(button); 
    ul.appendChild(newLi); 
    totalList.push(newLi); 
    console.log(totalList); 
    text.value = ""; 
  });
});
