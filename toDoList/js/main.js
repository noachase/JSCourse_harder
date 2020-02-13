const list = document.getElementById('todo'); 
const completed = document.getElementById('completed');
const input = document.querySelector('.header-input');
const add = document.getElementById('add');

function addTodo (toDo) {
    const item = `<li class="todo-item">
                    ${toDo}
                        <div class="todo-buttons">
                            <button class="todo-remove"></button>
                            <button class="todo-complete"></button>
                        </div>
                </li>`;

    const pos = 'beforeend';
    list.insertAdjacentHTML(pos, item);

}
addTodo('asdad');