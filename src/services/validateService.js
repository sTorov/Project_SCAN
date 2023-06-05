export class ValidateService{
    static validatePhoneNumberOrLogin(value) {
        if(value.startsWith("+")){
            return /^\+7\s[\d]{3}\s[\d]{3}\s[\d]{2}\s[\d]{2}$/.test(value);
        } else {
            return /^[\w]{5,}$/.test(value);
        }
    }

    static validatePassword(value){
        return !(value.length === 0 || value === null);
    }
}