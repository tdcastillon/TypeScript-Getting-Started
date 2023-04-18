import { Person } from './person';

export class Player implements Person {

    constructor(public name: string, public age: number = 15, public highScore: number = 0) {}

    formatName() : string {
        return this.name.toUpperCase();
    }
}