import{serve } from 'bun'
serve({
    fetch(request){
        const url =new URL(request.url);
        if(url.pathname === '/'){
            return new Response("hellon bhaisaab !!",{status:200})
        }
        else        if(url.pathname === '/greet'){
            return new Response("namaste",{status:200})
        }
        else{
                return new Response("404 hogaya bc!!",{status:200})
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})