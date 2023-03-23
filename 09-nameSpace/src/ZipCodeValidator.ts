
/// <reference path="Validation.ts" />
namespace Validation {
    const numberRegxp = /^[0-9]+$/
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegxp.test(s)
        }
    }
}