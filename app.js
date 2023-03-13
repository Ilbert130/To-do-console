import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import { Tasks } from "./models/tasks.js";



console.clear();

const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    do{

        opt = await inquirerMenu();

        switch(opt){
            case '1': //To create a task
                const desc = await readInput('Descripcion:');
                tasks.createTask(desc);

                break;
            case '2':
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;    
        }

        
        await pause();

    }while(opt !== '0');
}

main();