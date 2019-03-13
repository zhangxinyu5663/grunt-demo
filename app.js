#!/usr/bin/node

const http=require('http');
const log=console.log,
      url=require('url'),
      qs=require('querystring');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
  var addr=url.parse(req.url).query;
  var rect=qs.parse(addr);
  log(rect.width,rect.height);
  
  var result={
    area:Number(rect.width)*Number(rect.height),
    perimeter:2*(Number(rect.width)+Number(rect.height))
  }

  res.end(JSON.stringify(result));
}).listen(8080);
