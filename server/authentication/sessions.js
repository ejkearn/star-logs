let session = require('express-session');
let MongoStore = require('connect-mongodb-session')(session);



console.log(process.env.CONNECTIONSTRING)

let store = new MongoStore(
	{
		uri: "mongodb://student:student@ds233500.mlab.com:33500/starfeet-db",
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error(error);
});

//@ts-ignore
module.exports = session({
	secret: ';ljkd;jfsafds;ajldsaf;kljkfljds;dfarts',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})