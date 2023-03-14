import { inquirerMenu, listTaskDelete, pause, readInput, confirmDelete, showListCheckList } from "./helpers/inquirer.js";
import { readDB, saveDB } from "./helpers/Savefile.js";
import { Tasks } from "./models/tasks.js";



console.clear();

const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const taskDB = readDB();

    if(taskDB){
        //loading the data saved
        tasks.loadTaskFromArray(taskDB);
    }

    do{

        opt = await inquirerMenu();

        switch(opt){
            case '1': //To create a task
                const desc = await readInput('Descripcion:');
                tasks.createTask(desc);
                break;

            case '2'://To show all tasks
                tasks.allTasks();
                break;

            case '3'://To show complited tasks
                tasks.listPendingCompleted(true);
                break;

            case '4'://To show pending tasks
                tasks.listPendingCompleted(false);
                break;

            case '5':
                const ids = await showListCheckList(tasks.listArr);
                tasks.toggleCompleted(ids);
                break;

            case '6'://To delete a task
                const id = await listTaskDelete(tasks.listArr);
                if(id !== '0'){
                    const ok = await confirmDelete();
                    if(ok){
                        tasks.deleteTask(id);
                        console.log('Tarea borrada');
                    }
                }
                break;    
        }

        saveDB(tasks.listArr);
        await pause();

    }while(opt !== '0');
}

main();