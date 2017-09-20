var openedBrackArray = [];
var bracketsConf = [];


module.exports =
    function check(str, bracketsConfig) {
        bracketsConf = bracketsConfig;
        openedBrackArray = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] == findBraketPair(str[i])) {
                if (str[i] == findBraketPair(str[i], true))
                    if (deleteOpenBraket(str[i])) {
                        continue;
                    }
                openedBrackArray.push(str[i]);
            } else if (str[i] == findBraketPair(str[i], true)) {
                if (!deleteOpenBraket(str[i])) {
                    return false;
                }
            }
        }
        openedBrackArray;
        if (openedBrackArray.length != 0) return false;
        return true;
    }


function deleteOpenBraket(type) {
    let del = false;
    if (openedBrackArray[openedBrackArray.length - 1] == findBraketPair(type)) {
        openedBrackArray.splice(openedBrackArray.length - 1, 1);
        return true;
    }
    return false;
}



function findBraketPair(bracket, close = false) {
    var position = 0;
    //[['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]
    bracketsConf.forEach((elem, index) => {
        if (elem.indexOf(bracket) >= 0) position = index;
    })
    return close ? bracketsConf[position][1] : bracketsConf[position][0];
}