import { v4 } from "uuid";


class Homework {

    constructor(desc){

        //Creating the properties
        this.id= v4();
        this.desc = desc;
        this.completedOn = null;
    }

}

export {
    Homework
}