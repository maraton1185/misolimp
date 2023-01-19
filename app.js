const port = 3001;

const express = require("express");
const hbs = require("hbs");
const exHbs = require("express-handlebars"); 
const app = express();
const attr = require("./menu.js");

hbs.registerPartials(__dirname + "/views/partials");
app.set('views', __dirname + '/views');
app.set("view engine", "html");
app.engine('html', require('hbs').__express);
app.engine("html", exHbs(
    {
        layoutsDir: __dirname + "/views/layouts", 
        defaultLayout: "layout",
        extname: "html",
        helpers:{    
            currentMonth: function(arg, options) {
                
				d = new Date();
				monthA = 'январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь'.split(',');
				return monthA[d.getMonth()]
				
            },
			nextMonth: function(arg, options) {
                d = new Date();
				monthA = 'январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь'.split(',');
				i = d.getMonth();
				i = i== 11 ? 0 : i+1;
				return monthA[i];
            }
        }
    }
));

app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){  
    attr.setActive("/");   
    response.render("home", attr);    
});

app.get("/content", function(request, response){
    attr.setActive("/content");   
    response.render("content", attr);   
});

app.get("*", function(request, response){
    attr.setActive("/404");   
    response.render("404", attr);   
});

app.listen(port);