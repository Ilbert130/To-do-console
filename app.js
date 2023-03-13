import { inquirerMenu, pause } from "./helpers/inquirer.js";



console.clear();

const main = async () => {

    let opt = '';

    do{

        opt = await inquirerMenu();
        console.log(opt);

        switch(opt){
            case '1':
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