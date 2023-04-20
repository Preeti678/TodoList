document.querySelector('#push').onclick = function
(){
  //validate input field
  if(document.querySelector('#newtask input').
  value.length == 0){
    alert("Please enter a task")
  }
  else
  {
    //adding a new task
    document.querySelector('#tasks').innerHTML
    += `
        <div class="task">
         <span id = "taskname">
          ${document.querySelector
          ('#newtask input').value}
         </span>
         <button class = "delete">
         <i class="fa-solid fa-xmark"></i>
         </button>
        </div>
    `;
    //deleting a task
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++)
    {
      current_tasks[i].onclick = function(){
        this.parentNode.remove();
      }
    }
    //crossing off a completed task
    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++)
    {
      tasks[i].onclick = function(){
        this.classList.toggle('completed');
      }
    }
    //clearing the input field after each entry
    document.querySelector("#newtask input").
    value = "";
  }
}