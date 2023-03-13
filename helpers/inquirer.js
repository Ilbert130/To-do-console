import colors from "colors";
import inquirer from "inquirer";

const questions = [
    {
        type: 'list',
        name: 'option',
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

//To pause the flow and see which option we can choice
const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

export {
    inquirerMenu,
    pause,
    readInput
}