const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.get('/', (req, res)=>{
	res.render('index');
});
app.use(express.static('public'));

app.use("/getData", function(req, res, next){
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




app.listen(3000);
