import { AbstractControl } from '@angular/forms';

export function idValidator(control: AbstractControl): { [key: string]: any } | null {

    const validRegex = /^[XYZ]?([0-9]{7,8})([A-Z])$/i;
    const dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let valid = false;


    if (control.value && control.value.length === 9) {
        let id = control.value.toUpperCase().replace(/\s/, '');

        var niePrefix = id.charAt(0);
        switch (niePrefix) {
            case 'X':
                niePrefix = 0;
                break;
            case 'Y':
                niePrefix = 1;
                break;
            case 'Z':
                niePrefix = 2;
                break;
        }
        id = niePrefix + id.substr(1);

        if (validRegex.test(id)) {
            valid = (id.charAt(8) === dniLetters.charAt(parseInt(id, 10) % 23));
        }

        return valid ? null : { invalidNif: { valid: false, value: control.value } };
    }
    return { invalidNif: { valid: false, value: control.value } };
};