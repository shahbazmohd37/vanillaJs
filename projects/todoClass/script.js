// data = [{task: '', status: ?, id: }]
// while adding i should push task in data
// I can switch between task completed and active;
// fun to edit task/ delete task/ update the task

// dom elements

const formElem = document.querySelector('form');
const allElem = document.querySelector('.all');
const activeElem = document.querySelector('.active');
const completedElem = document.querySelector('.completed');
const tabElem = document.querySelector('.tabs');

class Todo {
    constructor() {
        this.taskList = [];
        this.activeTask = [];
        this.completedTask = [];
        this.count = 0;
        this.currentTab = 'all'
    }
    addTask(e) {
        e.preventDefault();
        const value = document.getElementById('input').value;
        this.taskList.push({
            task: value,
            status: 'active',
            id: this.count++
        });
        // basis of selected tab display result in that tab
        this.renderTask();
        // update active task from here
    }
    renderTask() {
        let taskList;
        if (this.currentTab === 'all') {
            taskList = this.taskList;
        } else {
            taskList = this.taskList.filter(item => item.status === this.currentTab)
        }
        const elem = document.querySelector(`.${this.currentTab}`);
        elem.innerHTML = '';
        taskList.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `<input class="inputTask" type="text" value='${item.task}' /></span><span class="save">save changes</span><input type="checkbox" ${item.status === 'completed' ? 'checked': ''} class="checkbox"/><span class="close">X</span>`
            li.id = `task_${item.id}`
            elem.appendChild(li);
        });
        // update active task from here
    }
    updateTask(e) {
        const target = e.target.parentElement.id;
        const targetClass = e.target.classList;
        if (target) {
            // input is clicked => make it editable
            // modify is clicked => make changes in data;
            // checkbox clicked = > update status
            // close => delete from data and re render
            if (targetClass.contains('inputTask')) {
                e.target.readOnly = false
            }
            if (targetClass.contains('save')) {
                this.modifyTask(target)
            }
            if (targetClass.contains('checkbox')) {
                this.modifyStatus(target)
            }
            if (targetClass.contains('close')) {
                this.deleteTask(target)
            }
        }
    }
    modifyTask(id) {
        const elem = document.getElementById(id);
        this.taskList.forEach(item => {
            if (item.id === +id.split('_')[1]) {
                item.task = elem.firstChild.value;
            }
        });
    }
    modifyStatus(id) {
        this.taskList.forEach(item => {
            if (item.id === +id.split('_')[1]) {
                if (item.status === 'active') {
                    item.status = 'completed'
                } else {
                    item.status = 'active'
                }
            }
        });
    }
    deleteTask(id) {
            this.taskList = this.taskList.filter((item) => item.id !== +id.split('_')[1]);
            console.log('tasklist after deletion', this.taskList);
            const elem = document.querySelector(`.${this.currentTab}`)
            this.renderTask();
        }
        // showtask() {
        //     this.renderTask();
        // }
        // showRespectiveTask(id) {
        //     switch (id) {
        //         case 'active':
        //             this.showtask('active')
        //             break;
        //         case 'completed':
        //             this.showtask('completed')
        //             break
        //         default:
        //             this.renderTask();
        //     }
        // }
    showSelectedTab(e) {
        const prevSelected = document.querySelector('.selected');
        prevSelected.classList.remove('selected');
        e.target.classList.add('selected');
        const id = e.target.id;
        this.currentTab = id
        document.querySelector('.show').classList.remove('show');
        const elem = document.querySelector(`.${id}`);
        elem.classList.add('show');
        this.renderTask();
    }
}

var todoObj = new Todo();

formElem.addEventListener('submit', todoObj.addTask.bind(todoObj));
allElem.addEventListener('click', todoObj.updateTask.bind(todoObj));
activeElem.addEventListener('click', todoObj.updateTask.bind(todoObj));
completedElem.addEventListener('click', todoObj.updateTask.bind(todoObj));
// activeElem.addEventListener('click', todoObj.showActiveTask.bind(todoObj))
// completedElem.addEventListener('click', todoObj.showCompletedTask.bind(todoObj))
tabElem.addEventListener('click', todoObj.showSelectedTab.bind(todoObj))

// add tasklist => add in the list and check the selected tab and add;
// if update is done ->
// render task function should render on basis of tabs to particular elem ->