/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    translate(code) {
        const errDescription = this.errors.get(code);

        if (errDescription) {
            return errDescription;
        }
        return 'Unknown error';
    }
}
