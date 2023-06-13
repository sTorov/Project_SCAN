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

    static validateCountDoc(value){
        return +value > 0 && +value < 1001;
    }

    static validateDate(startValue, endValue){
        if(Date.parse(startValue) > Date.now() || Date.parse(endValue) > Date.now()){
            return false;
        } else if(startValue === null || endValue === null){
            return null;
        } else if (Date.parse(startValue) > Date.parse(endValue)){
            return false;
        }
        return true;
    }

    static validateInn(inn) {
        if (typeof inn !== 'string') {
            inn = '';
        }

        if (typeof inn === 'number' || !inn.length || /[^0-9]/.test(inn) || inn.length !== 10) { 
                return false;
        }
        
        var checkDigit = function (inn, coefficients) {
            var n = 0;
            for (var i in coefficients) {
                n += coefficients[i] * inn[i];
            }
            return parseInt(n % 11 % 10);
        };

        var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n10 === parseInt(inn[9])) {
            return true;
        }

        return false;
    }
}