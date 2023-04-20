const convert = require( './convert' );

test( 'Convert 4 to 4', () => {
    expect( convert.convert( 4, 4 ) ).toBe( 16 );
} ); 

test( 'Convert 0 to 4', () => {
    expect( convert.convert( 0, 4 ) ).toBe( 0 );
} );

test( 'Convert to money', () => {
    expect( convert.toMoney( 2 ) ).toBe( '2.00' );
} );