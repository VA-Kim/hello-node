var express = require('express'); //설치한 express module을 불러와서 변수에 담는다.
var app = express(); // express를 실행하여 app object를 초기화 합니다.

app.get('/',function(res, req){   // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World!'); // "hello world"를 보냅니다.
});

app.listen(3000, function(){  //3000번 포트 사용
  console.log('Server On!');  // 서버가 실행되면 콘솔창에 표시될 메세지
});
