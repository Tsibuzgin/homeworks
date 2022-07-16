'use strict';


function view() {
    const createTodoItem = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-4');

        wrapperElement.innerHTML = `<div class="taskWrapper">
            <div class="taskHeading">${data.title}</div>
            <div class="taskDescription">${data.description}</div>
        </div>`;


        return wrapperElement;
    };


    return {
        form: null,
        todoContainer: null,

        renderTodoItem(data) {
            const itemTemplate = createTodoItem(data);
            this.todoContainer.append(itemTemplate);
        },


        init(formElement, todoContainer) {
            this.form = formElement;
            this.todoContainer = todoContainer;
        }
    };
}