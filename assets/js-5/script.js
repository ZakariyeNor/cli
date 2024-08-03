 // Variables 

 const addTask = document.getElementById('add-task');

 const taskContainer = document.getElementById('task-container');

 const inputTask = document.getElementById('input-task');

 //Event LIstener for add bi=utton 

 addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask}`;
    task.appendChild('li');

    let check = document.createElement('button');
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.classList.add('check');
    task.appendChild('check');

    let deleteBn = document.createElement('button');
    deleteBn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBn.classList.add('deleteTask');
    task.appendChild('deleteBn');

    if(inputTask.value === ""){
        alert('Please Enter Value');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

 });