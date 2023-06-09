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

    //To list task pending or completed
    listPendingCompleted(completed){
        console.log();
        this.listTask(completed).forEach((task, i)=> {
            const idx = `${i + 1}.`.green;
            const {desc, completedOn} = task;
            const state = (completedOn) ? `${completedOn}`.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${state}`);
        })
    }

    //To list tasks by filter
    listTask(completed){
        if(completed){
            return this.listArr.filter(task => task.completedOn !== null);
        }

        return this.listArr.filter(task => task.completedOn === null);
    }

    //To delete a task
    deleteTask(id =''){
        if(this._list[id]){
            delete this._list[id];
        }
    }
    
    //To check a task
    toggleCompleted(ids = []){

        ids.forEach(id => {
            const task = this._list[id];
            if(!task.completedOn){
                task.completedOn = new Date().toISOString();
            }
        });

        this.listArr.forEach(task => {
            if(!ids.includes(task.id)){
                this._list[task.id].completedOn = null;
            } 
        });
    }
}

export{
    Tasks
}