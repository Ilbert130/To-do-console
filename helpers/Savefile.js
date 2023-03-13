import * as fs from 'node:fs';

const file = './db/data.json';

//Function to save the file
const saveDB = (data) => {
    
    fs.writeFileSync(file, JSON.stringify(data));
}

//Function to read the file
const readDB = () => {

    if(!fs.existsSync(file)){
        return null;
    }

    const info = fs.readFileSync(file, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

export{
    saveDB,
    readDB
}