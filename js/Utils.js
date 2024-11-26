export class Validations{
    validateEmail(email){
        // validate email
        // Regular expression to validate email format:
        // ^                   : Start of the string
        // [a-zA-Z0-9._-]+     : One or more alphanumeric characters, dots, underscores, or hyphens
        // @                   : The "@" symbol
        // [a-zA-Z0-9.-]+      : One or more alphanumeric characters, dots, or hyphens
        // \.                  : A literal dot
        // [a-zA-Z]{2,4}       : Between 2 and 4 alphabetic characters (e.g., com, org, net)
        // $                   : End of the string
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    validateLength(value, minLength, maxLength){
        // validate length
        if (value.length < minLength || value.length > maxLength){
            return false;
        }
        return true;
    }

    validateIsNotNull(value){
        // validate is not null
        if (value === null || value === undefined || value === ''){
            return false;
        }

        return true;
    }

    validatePhone(phone){
        // validate phone
        // Regular expression to validate phone format:
        // ^                   : Start of the string
        // [0-9]{10}           : Ten digits
        // $                   : End of the string
        let phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

}