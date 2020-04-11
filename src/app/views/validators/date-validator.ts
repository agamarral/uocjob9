import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function dateValidator(control: AbstractControl): { [key: string]: any } | null {

    let valid = false;

    if (control.value) {
        let date = moment(control.value, 'DD/MM/YYY', true);
        valid = date.isValid();
    }
    return valid ? null : { invalidDate: { valid: false, value: control.value } };
}