const Event=require('events');
const e=new Event();
e.setMaxListeners(21);
for(let i=0;i<=20;i++){
    e.on('details',function(name,marks){
        console.log("Number: "+i);
        console.log("Name: "+name);
        console.log("Marks: "+marks);
    });
}
e.emit('details',"Abhijith",100);