#!/usr/bin/env node
var connect = require('connect');

var server = connect(
	connect.logger()
  , connect.static(__dirname)
);

server.listen(3000)
