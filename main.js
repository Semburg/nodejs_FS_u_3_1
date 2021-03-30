const fs = require('fs');

const {logMe} = require('./functions');

console.log(logMe("as"));

let log = "test log 4"

let newLog = logMe(log)
let newLog2 = "\n" + logMe(log)

// fs.mkdir("./logs", {recursive: true}, (err)=>{
//     if(err) throw err;
// })

// fs.writeFile('./logs/log.txt', newLog, 'utf-8', (err) => {
//         if (err) throw err
//         console.log('file written')
// })





// fs.appendFile('message2.txt', logMe("as4"), (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });


if (fs.existsSync('./logs/log.txt')) {
    fs.appendFile('./logs/log.txt',newLog2, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
} else if(!fs.existsSync("./logs")){

    fs.mkdir("./logs", {recursive: true}, (err)=>{
        if(err) throw err;
    })

    fs.writeFile('./logs/log.txt', newLog, 'utf-8', (err) => {
        if (err) throw err
        console.log('file written')
})

}

//!   how to fix here the asyncronouis?
//!   solved - see line 36   (...if(!fs.existsSync("./logs"))...)
