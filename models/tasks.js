import { Task } from "./task.js";


class Tasks {

    constructor(){
        this._list = {};
    }

    get listArr(){
        const list = [];

        //taking the name of the properties and storing them in an array
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    //Creating a new task
    createTask(desc){
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    //showing all tasks
    allTasks(){

        console.log();
        this.listArr.forEach((task, i)=>{

            const idx = `${i + 1}.`.green;
            const {desc, completedOn} = task;
            const state = (completedOn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${state}`);
        });
    }

    //loading the data from the JSON File
    loadTaskFromArray(tasks){
        tasks.forEach(element => {
            this._list[element.id] = element;
        });
    }
}

export{
    Tasks
}