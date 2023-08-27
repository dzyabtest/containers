/* eslint-disable indent */
// TODO: write your code here
export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Повторное добавление персонажа!');
        }

        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((item) => this.members.add(item));
    }

    toArrray() {
        return Array.from(this.members);
    }
}
