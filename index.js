var express = require('express'); //설치한 express module을 불러와서 변수에 담는다.
var app = express(); // express를 실행하여 app object를 초기화 합니다.

// use로 대체함.
/*
app.get('/',function (req,res) { // '/' 위치에 'get'요청을 받는 경우, !!!파라미터의 순서가 굉장히 중요하다!!
 res.send('Hello World!'); // "Hello World!"를 보냅니다.
});
*/

// http method에 상광없이 무조건 실행됨.
// 현재위치 /public을 static폴더로 지정하는 명령어.
// 즉, '/'에 접속하면 '/public'에, '/css'에 접속하면 '/public/css'에 접속하는 셈이다.
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

// query를 통해서 이름을 받는다. 모든 query는 req.query에 저장된다.
// ex) localhost:3000/hello?nameQuery=Mike
app.get("/hello", function(req, res){
  res.render("hello", {name:req.query.nameQuery});
});

// route parameter를 통해 이름을 받는 코드.
// ex) localhost:3000/hello/Jane
app.get("/hello/:nameParam", function(req,res){
  res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function(){  //3000번 포트 사용
  console.log('Server On!');  // 서버가 실행되면 콘솔창에 표시될 메세지
});
