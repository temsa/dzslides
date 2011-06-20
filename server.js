#!/usr/bin/env node
var connect = require('connect'),
    optimist = require('optimist'),
    cluster = require('cluster'),
    io = require('socket.io'),
	bridge = require('cluster-socket.io');


var argv = optimist
    .usage('Serve the slides.\nUsage: $0')
    
    .alias('p', 'port').default({p: 3000}).describe('p', 'Set server port')
    .alias('r', 'repl').default({r: 8888}).describe('r', 'Set repl port for realtime administration')
    
    .boolean('h').alias('h','help').describe('h', "Print help")
    
    .argv;

if(argv.h) return optimist.showHelp();
      
var server = connect(
	connect.logger(),
    connect.static(__dirname)
);

io = io.listen(server);

cluster.repl.define('notify', function(master,sock,msg){ io.sockets.send('notify', msg)});


io.sockets.on('connection', function (socket) {
  var slideChanges = {};
  
  function storeSlide(slide, date) {
  	console.log("changing slide to #", slide, " @",date);
  	slideChanges[date] = slide
  }
  
  socket.on('start', storeSlide);
  socket.on('slide', storeSlide);
  socket.on('stop',  storeSlide);
  
  socket.on('forward', function(){socket.broadcast.emit('forward')});
  socket.on('back',    function(){socket.broadcast.emit('back')   });
});

cluster(server)
  .use(bridge(io))
  .use(cluster.stats())
  .use(cluster.repl(argv.r))
  .use(cluster.reload())
  .listen(argv.p);
