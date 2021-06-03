//===================== REQUIRING ROUTES

var indexRoutes = require("./routes/index")

//===================== CONFIG

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// ==================== START SERVER


// app.listen(3000, function(){
// 	console.log("The YelpCamp Server has Started")	
// });

// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//     console.log("Server Has Started!");
// });