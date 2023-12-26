const path = require('path');
const express= require('express');
app=express();
app.use(express.static('./dist'));
app.get('*', function(request,response) {
	response.sendFile(path.join(__dirname,"/../dist/index.html"));
});
app.listen(process.env.PORT||3000,function(){
	console.log("the server is running on port %s" ,this.address().port);
});