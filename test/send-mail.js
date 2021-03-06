/* Copyright (c) 2013 Richard Rodger */
"use strict";

var sendconf = require( './sendconf.mine.js' )

var seneca = require( 'seneca' )()
seneca.use( '..', sendconf )

seneca.ready( function( err ) {
  if( err ) {
    return console.log( err );
  }

  seneca.act(
    "role: 'mail', cmd: 'send'",
    {
      code: sendconf.send.code,
      to: sendconf.send.to,
      content:
      {
        name: 'Richard'
      }
    }, function( err, out ) {

    console.dir( err )
    console.dir( out )

    // nodemailer keeps connections open
    seneca.close()
  } )
} )
