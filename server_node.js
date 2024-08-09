import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000
 const server = createServer((req,res )=>{
if (req.url== '/') {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain')
      res.end("heluuuuu")}

      else if(req.url== '/new') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain')
        res.end("kaha chale ?")
}
else {
  res.statusCode =400 ;
  res.setHeader('content-type', 'text/plain')
  res.end("yo bro wth !!! its a 404")
}
 })
 server.listen(port,hostname, ()=>{
   console.log(`seerver is listening at at http://${hostname}:${port}`);
 })