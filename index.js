const express = require( 'express' );
const app = express();

const path = require( 'path' );

const converter = require( './lib/convert' );
const apiBCB = require( './lib/api.bcb' );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.get( '/', async( req, res, next ) => {
    const cotacao =  await apiBCB.getCotacao();

    res.render( 'home', {
        cotacao
    } );

} );

app.get( '/cotacao', ( req, res, next ) => {

    let { cotacao, quantidade } = req.query;
    const conversao = converter.convert( cotacao, quantidade );

    cotacao = parseFloat( cotacao );
    quantidade = parseInt( quantidade );

    if ( isNaN( cotacao ) || isNaN( quantidade ) ) {
        res.render( 'cotacao', {
            error: 'Cotação e quantidade deve ser um valor numérico!'
        })
    }
    else {
        res.render( 'cotacao', {
            error: false,
            cotacao: converter.toMoney( cotacao ),
            quantidade: converter.toMoney( quantidade ),
            conversao: converter.toMoney( conversao )
        } );
    }

} );

app.listen( 3000, err => {
    if ( err ) {
        console.log( 'Could not start server' );
    }
    else {
        console.log( 'Server running...' );
    }
} );