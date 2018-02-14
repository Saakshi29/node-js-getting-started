const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
.post('/form', function(req, res){
    
	
	
	response = "This is a sample response from your webhook!"; //Default response from the webhook to show it's working

	res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
   // console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
