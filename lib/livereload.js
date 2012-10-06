/**
---
	@name Less Monitor - LiveReload plugin
	@description Monitor, parse and Live Reload LESS files in your browser.
	@author Guilherme Dupont
	@version 0.1.0

	Styleguide:
		https://github.com/gdupont/idiomatic.js

	Work in progress

...
*/

/*jslint node: true */
/*global Class: true, Options: true*/

'use strict';

 /**
  * Dependencies
  */
require('mootools');

var fs = require('fs'),
	path = require('path'),
	url = require('url'),
	http = require('http'),
	ws = require('ws').Server;

/**
 * LessMonitor Class
 * @type {Class}
 */
 var LiveReload = new Class({

	Implements: [ process.EventEmitter, Options ],

	options: {
		urlpath: '',
		port: 35729

	},

	initialize: function() {
		this.server = http.createServer(this.serveStatic).listen( this.options.port );
		this.ws = new ws({ server: this.server });
		return this;
	},

	init: function( app, options ) {
		this.setOptions( options );
		this.monitor = app;

		this.monitor.on( 'done', function() {
			this.config();
			this.emit( 'init', this.options );
		}.bind(this) );
		return this;
	},

	config: function() {
		this.ws.on( 'connection', function(client) {
			this.emit( 'connection', client );

			client
				.on( 'message', function( message ) {

					this.message( message, client );
					this.emit( 'message', message, client );

				}.bind(this))
				.on( 'close', function() {

					this.emit( 'close', client );

				}.bind(this));

		}.bind(this));

		this.monitor
			.on( 'parseComplete', function( file, outputFile, last ) {
				this.reload( outputFile );
			}.bind(this));

	},

	serveStatic: function( request, response ) {
		var urlPath = url.parse( request.url ).pathname,
			localPath = path.join( __dirname, '../static', urlPath );

		fs.readFile( localPath, function( error, data ) {
			if ( error ) {
				response.writeHead( 403, { 'Content-type': 'text/plain' } );
				response.end( 'Forbidden' );
			} else {
				response.writeHead( 200, { 'Content-type': 'text/javascript' } );
				response.end( data );
			}
		});
	},

	parseData: function( json ) {
		var data = {};
		try {
			data = JSON.parse( json );
		} catch (e) {}
		return data;
	},

	message: function( message, client ) {
		// parse the JSON data object
		var data = this.parseData( message );

		// valid commands are: url, reload, alert and hello for 1.7
		// first handshake
		if( data.command === 'hello' ) {
			return this.hello( data, client );
		}

	},

	hello: function( data, client ) {
		client.send( JSON.stringify({
			command: 'hello',
			protocols: [
				'http://livereload.com/protocols/official-7'
			],
			serverName: 'less-livereload'
		}) );
		client.key = client.upgradeReq.headers['sec-websocket-key'];
		this.emit( 'handshake', client );
	},

	reload: function( file ) {
		this.send({
			command: 'reload',
			path: path.join( this.options.urlpath, file ).split( '\\' ).join( '/' ),
			liveCSS: true
		});
	},

	send: function( data ) {
		this.ws.clients.forEach( function( client ) {
			if ( client.readyState === 1 ) {
				client.send( JSON.stringify(data) );			}
		});
		this.emit( 'send', data, this.ws.clients );
	}
 });

 module.exports = new LiveReload();