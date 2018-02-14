const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app=express()
 app.use(express.static(path.join(__dirname, 'public')));

app.post('/', function(req, res){
    
	
	
	response = "speech given helo"; //Default response from the webhook to show it's working

	res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
   
});

  
 app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
