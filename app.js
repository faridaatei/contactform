
const express =require('express');

const app = express() ;
const bodyParser = require('body-parser')

const port = 3000
app.use(bodyParser.json())

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

const mailer = require('express-mailer');

const auth = {

	user:'063cfeb4548b86',
	pass:'2cd6dbdc4ffb42'
}

const options ={

	from:"faridaabdalla0@gmail.com",
	host:"smtp.mailtrap.io",
	port: 25,
	auth: auth,
	transportMethod: 'SMTP'
}

mailer.extend(app, options);
app.use((req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers",
		"Origin, x-Requested-with, Content-Type, Accept"

		);
		next();


	
});

app.post('/contacts', (req, res) => {

	
	const recipient = {

		to:"cfaee923fd-c9af4e@inbox.mailtrap.io",
		subject:req.body.subject,
		name:req.body.name,
		message:req.body.message
		
	}

	app.mailer.send('email',recipient, (error => {
		console.log(error)

	}));


	res.send('NodeJS Application')
})

app.listen(port, () => console.log(`app >http://localhost:${port}!`))