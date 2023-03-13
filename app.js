import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
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

            case '3':
                tasks.listPendingCompleted(true);
                break;

            case '4':
                tasks.listPendingCompleted(false);
                break;

            case '5':
                break;

            case '6':
                break;    
        }

        saveDB(tasks.listArr);
        await pause();

    }while(opt !== '0');
}

main();