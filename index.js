const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
   .post('/', (req, res) => response = "This is a sample response from your webhook!";res.setHeader('Content-Type', 'application/json');res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
)

 //Requires application/json MIME type
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
