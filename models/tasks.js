import { Task } from "./task";


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
        })
    }

    //Creating a new task
    createTask(desc){
        const task = new Task(desc);
        this._list[homework.id] = homework;
    }
}

export{
    Tasks
}