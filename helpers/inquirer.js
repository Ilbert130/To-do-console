import colors from "colors";
import inquirer from "inquirer";

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value:'1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value:'3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value:'6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value:'0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

//Create the menu and allows us choise an option
const inquirerMenu = async() => {
    console.clear();
    console.log('========================'.green);
    console.log('= Selecione una opcion ='.green);
    console.log('========================'.green);

    const {option} = await inquirer.prompt(questions);
    return option;
}