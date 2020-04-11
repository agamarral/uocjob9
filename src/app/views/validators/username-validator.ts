import { AbstractControl } from '@angular/forms';

export function usernameValidator(control: AbstractControl): { [key: string]: any } | null {

    let valid = control.value && !control.value.startsWith(" ") && !control.value.endsWith(" ");
    return valid ? null : { invalidName: { valid: false, value: control.value } };
}