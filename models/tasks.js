import { Task } from "./task";


class Tasks {

    constructor(){
        this._list = {};
    }

    //Creating a new ta
    createTask(desc){
        const task = new Task(desc);
        this._list[homework.id] = homework;
    }
}