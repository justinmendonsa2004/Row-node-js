const http =require("http");

//create a server

let server = http.createServer(function(request,response){
    if(request.url === "/"){
        response.write("<h1>This home page</h1>");
         response.write("<p>This is description</p>");
    }else if(request.url ==="/about"){
        response.write("<h1>This about page</h1>");
    }else if(request.url ==="/home"){
        response.write("<h1>This is Home page</h1>");
    }else if(request.url ==="/contact"){
        response.write("<h1>This is Contact Number</h1>");
        }
     else{
        response.write("404 Not found")
     }   
    
    response.end();
});

server.on("connection", function(){
    console.log("New connection");
})
//listening the server

server.listen(3000, function(){

    console.log("Server is running on port 3000");

});