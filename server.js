#!/usr/bin/env node
var connect = require('connect');
var optimist = require('optimist');
var argv = optimist
    .usage('Serve the slides.\nUsage: $0')
    
    .demand('p')
    .alias('p', 'port')
    .default({p: 3000})    
    .describe('p', 'Set server port')
    
    .boolean('h')
    .alias('h','help')
    .describe('h', "Print help")
    
    .argv
;
if(argv.h) return optimist.showHelp();

var server = connect(
	connect.logger()
  , connect.static(__dirname)
);

server.listen(argv.p);
