var $btn1 = $('button:nth-of-type(1)');
var $btn2 = $('button:nth-of-type(2)');



var $btn1 = $('button:nth-childe(1)');
var $btn2 = $('button:nth-of-type(2)');


// function a(){
//     alert("클림됨");
// }
//함수를 인자자체로 넘겨주어 실행문을 사용가능하게 할수 있다
$btn1.click(function a(){
    alert("클림됨");
});