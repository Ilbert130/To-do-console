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

//method to read the input
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

//Method to delete the any one of the task 
const listTaskDelete = async(tasks = []) => {
    const choices = tasks.map((task, i) => {

        const idx = `${i+1}.`.green;

        return {
            value:task.id,
            name: `${idx} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
        }
    ];

    const {id} = await inquirer.prompt(questions);
    return id;
}

//Method to confirm the elimination
const confirmDelete = async(message) => {
    const question = [
        {
            type:'confirm',
            name:'ok',
            message:message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

//To check if a task is completed
const showListCheckList = async(tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i+1}.`.green;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: (task.completedOn) ? true : false
        }
    });

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices: choices
        }
    ];

    const {ids} = await inquirer.prompt(questions);
    return ids;
}

export {
    inquirerMenu,
    pause,
    readInput, 
    confirmDelete, 
    listTaskDelete,
    showListCheckList
}