const Event= require('events');
const e=new Event();
e.on('details',function(name,marks){
    console.log("Name: "+name);
    console.log("Marks: "+marks);
});
e.emit('details',"Abhijith",100);