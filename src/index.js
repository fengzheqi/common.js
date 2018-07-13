/**
 * 校验15位营业执照编号
 * @param code {String} 编号
 * @return {Boolean}
 */
function validateLicense_15(code) {
    if (code.length !== 15) {
        return false;
    }

    let ti = 0;
    let si = 0;
    let cj = 0;
    let pj = 10;

    for(let i = 0; i < code.length; i++) {
        ti = parseInt(code.substring(i, i + 1));
        si = pj + ti;
        cj = (si % 10 === 0 ? 10 : si % 10) * 2;
        pj = (cj % 11) === 0 ? 10 : (cj % 11);

        if (i === code.length - 1) {
            if ((si % 10) === 1) {
                return true;
            } else {
                return false;
            }

        }
    }
}

/**
 * 校验18为营业执照编号
 * @param code {String} 编号
 * @return {Boolean}
 */
function validateLicense_18(code) {
    if (code.length !== 18) {
        return false;
    }
    let reg = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9Y])$/;
    if (!reg.test(code)) {
        return false;
    }
    let str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    let ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    let codes = new Array(2);
    codes[0] = code.substr(0, code.length - 1);
    codes[1] = code.substr(code.length - 1, code.length);
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += str.indexOf(codes[0].charAt(i)) * ws[i];
    }
    let c18 = 31 - (sum % 31);
    if (c18 === 31) {
        c18 = 'Y';
    } else if (c18 === 30) {
        c18 = '0';
    }
    if (c18 !== parseInt(codes[1])) {
        return false;
    }

    return true;
}
