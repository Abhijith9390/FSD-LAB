const EventEmitter = require('events');

const e=new EventEmitter();

e.on('login',function(){
    console.log('hello');
});

e.on('login1',function(){
    console.log('hii');
});

e.on('login',function(){
    console.log('hello');
});
e.emit('login');
e.emit('login1');
