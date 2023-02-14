const figlet = require('figlet');

figlet('Pranav',(err, data)=>{
    if(err){
        console.log('An error has occured' + data);
        return;
    }

    console.log(data);
})