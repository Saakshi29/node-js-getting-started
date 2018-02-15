const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const bodyParser = require("body-parser");








var app=express()
 app.use(express.static(path.join(__dirname, 'public')));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());


app.post("/", function(req, res) {
  var speech =
    req.body.metadata.intentName;
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});


/*app.post('/', function(req, res){
    
	
	
	var respo = req.body.metadata.intentName; //Default response from the webhook to show it's working

	res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": respo, "displayText": respo 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
   
});
*/
  
 app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
