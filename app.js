#!/usr/bin/node

/*主程序*/
const add=require('./sum');

var x=process.argv[2] || 1,
    y=process.argv[3] || 1;

console.log(`${x}+${y}=${add(x,y)}`);
