
const express =require('express');

const app = express() ;

const port = 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

const mailer = require('express-mailer');

const auth = {

	user:'faridaabdalla0@gmail.com',
	pass:'nanash31'
}

const options ={

	from:"faridaabdalla0@gmail.com",
	services: "Gmail",
	host:"smtp.gmail.com",
	secureConnection: true,
	port: 465,
	auth: auth,
	transportMethod: 'SMTP'
}

mailer.extend(app, options);

app.get('/contacts', (req, res) => {

	const message ="This is a sample email";
	const recipient = {

		to: "laurensambu@gmail.com",
		subject:"Test Email"
	}

	app.mailer.send('email',recipient, (error)=> {
		console.log(error)
	});

	res.send('NodeJS Application')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))