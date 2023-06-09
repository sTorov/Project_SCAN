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

    static validateInn(inn, error) {
        var result = false;
        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }
        if (!inn.length) {
            error.code = 1;
            error.message = 'ИНН пуст';
        } else if (/[^0-9]/.test(inn)) {
            error.code = 2;
            error.message = 'ИНН может состоять только из цифр';
        } else if ([10, 12].indexOf(inn.length) === -1) {
            error.code = 3;
            error.message = 'ИНН может состоять только из 10 или 12 цифр';
        } else {
            var checkDigit = function (inn, coefficients) {
                var n = 0;
                for (var i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (inn.length) {
                case 10:
                    var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                error.code = 4;
                error.message = 'Неправильное контрольное число';
            }
        }
        return result;
    }
}