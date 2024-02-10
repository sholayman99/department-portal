class ValidationHelper{
    static IsLater(value) {
        let  OnlyLaterRegx =/^[A-Za-z\'\s\.\,\-\!\@\#\$\%\^\&\*\(\)\[\]\{\}\:\;\"\<\>\?\/\+\=\_\\\|`\~]+$/
        return OnlyLaterRegx.test(value);
    }
    static isEmail(value) {
        let EmailRegx = /\S+@\S+\.\S+/;
        return EmailRegx.test(value);
    }
    static isPassword(value) {
        let EmailRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return EmailRegx.test(value);
    }
    static IsMobile(value) {
        let  MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        return MobileRegx.test(value);
    }
    static isNumber(value) {
        let  OnlyNumberRegx = /^\d+(\.\d+)?$/;
        return OnlyNumberRegx.test(value);
    }
    static isNull(value) {
        return value == null;
    }
    static  isEmpty(value) {
        return value.length === 0;
    }
}
export default ValidationHelper