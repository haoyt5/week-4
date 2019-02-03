const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.get('/', (req, res)=>{
	res.render('index');
});
app.use(express.static('public'));

app.use("/getData", function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

	req.lackMessage = "Lack of Parameter";
	req.wrongMessage = "Wrong Parameter";
	getNum = req.query.number; 
	n = parseInt(getNum);
	sum = (n*(n+1))/2;
	if(n == getNum && n > 0){
		res.send("The parameter is "+ getNum + ". The sum from 1 to "+ n + " is " + sum);
	}else if(getNum===undefined){
		res.send(req.lackMessage);
	}else if(getNum <= 0 || typeof getNum !== 'number'){
		res.send(req.wrongMessage);
	}else{
		res.send(req.wrongMessage);
	}
	next();
});
 


 app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
 });
app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
app.post('/', function(req, res, next) {
    // Handle the post for this route
  })

app.listen(3000);
