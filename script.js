function add(){
    let input  = document.getElementById('input');
    if(input.style.display != 'none'){
        input.style.display = 'none';
    }else{
        input.style.display = 'block';
    }
}


const todos = document.querySelectorAll('.todo');
const all_container = document.querySelectorAll('.container');
let draggabletodo = null;

todos.forEach((todo)=>{
    todo.addEventListener('dragstart', dragstart);
    todo.addEventListener('dragend', dragend);
    
});
function dragstart(){
    draggabletodo = this;
    console.log('dragstart');
}
function dragend(){
    draggabletodo = null;
    console.log('dragend');
}
       


all_container.forEach((container)=>{
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('dragover');
    });
});

all_container.forEach((container)=>{
    container.addEventListener('dragenter',(e)=>{
        console.log('dragenter');
    });
});


all_container.forEach((container)=>{
    container.addEventListener('dragleave',(e)=>{
        console.log('dragleave');
    });
});

all_container.forEach((container)=>{
    container.addEventListener('drop',(e)=>{
        e.target.append(draggabletodo);
        console.log('drop');
    });
});


const input = document.querySelector('input');
const btn = document.querySelector('.form > button');



btn.addEventListener('click',(e)=>{
    if(input.value != ''){
        const new_todo = document.createElement('div'); 
        const input_val = document.getElementById('task').value;
        const txt = document.createTextNode(input_val);

        new_todo.appendChild(txt);
        new_todo.classList.add('todo');
        new_todo.setAttribute('draggable','true');

        const span = document.createElement('span');
        const span_txt = document.createTextNode('\u00D7');
        span.classList.add('close');
        span.appendChild(span_txt);

        span.addEventListener('click' ,()=>{
            span.parentElement.style.display = 'none';
        });
        
        new_todo.appendChild(span);

        to_do.appendChild(new_todo);

        new_todo.addEventListener('dragstart', dragstart);
        new_todo.addEventListener('dragend', dragend);

        // console.log(new_todo);
    }
});

const close_btn = document.querySelectorAll('.close');

close_btn.forEach(btn =>{
    btn.addEventListener('click' ,()=>{
        btn.parentElement.style.display = 'none';
    });
});