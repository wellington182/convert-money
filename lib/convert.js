module.exports = {
    convert: ( cotacao, quantidade ) => {
        return cotacao * quantidade;
    },

    toMoney: valor => valor.toFixed( 2 )
}