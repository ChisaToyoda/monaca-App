  var question=['きみのなまえはなんていうの？','じぶんのこといつもなんていうの？','だれにおてがみをかくの？','どんなことがうれしかったの？','それっていつのこと？','きみ、それでどんな気持ちだったの？','そっかあ。その人、優しいんだね？','その人ってたとえばどんなかんじ？キツネはぼくのこと、金色の小麦畑みたいっていってたけど','ふうん。そんな感じ方もあるんだ。それで、その人とこれからどうつきあっていきたいの？'];
   var defaulttxt=['なまえ','ぼく','アントワーヌ','羊の絵を書いてくれた','地球って星にいたとき','心があったかくなった','面白い','砂漠で見つけた井戸','夜空を見上げたら僕のこと思い出してほしいな'];
   var answerarray=['なまえ','ぼく','アントワーヌ','羊の絵を書いてくれた','地球って星にいたとき','心があったかくなった','面白い','砂漠で見つけた井戸','夜空を見上げたら僕のこと思い出してほしいな'];
  var imagearray=['prince.png','princeandplanet.png','foxanprince.png','cleaningprince.png','lyingprince.png','waterandprince.png','rosesandprince.png','foxanprince.png','flyingprince.png'] ;

function QandA(cnt){   
document.write(
  '<div data-role="page" id="add-page'+cnt+'">'+
  '<div data-role="header" data-position="fixed" data-theme="c"><h1>おてがみをかく</h1>'+
  '<a href="#list-page" data-icon="back" class="ui-btn-left">もどる</a>'+
  '</div>'+
  '<div data-role="content"> '+
 '<img src="image/'+imagearray[cnt]+'" width="100%"><br>'+
 question[cnt]+
'<textarea id="answer'+cnt+'" placeholder='+defaulttxt[cnt]+'></textarea><br>');
  };

//ページ遷移for文で回したかったけど可変変数うまくいかない
function next(cnt){
 let sended = "#answer";
 sended+=+String(cnt);
 alert(sended);
 answerarray[cnt]=$(sended).val();
 alert(answerarray[cnt]);
};


function next0(){
 answerarray[0]=$("#answer0").val();
};

function next1(){
 sended = $("#answer1").val();
 answerarray[1]=sended;
};

function next2(){
 sended = $("#answer2").val();
 answerarray[2]=sended;
 };


function next3(){
 answerarray[3]=$("#answer3").val();
 };


function next4(){
 answerarray[4]=$("#answer4").val();
};


function next5(){
 answerarray[5]=$("#answer5").val();
};

function next6(){
 answerarray[6]=$("#answer6").val();
};

function next7(){
 answerarray[7]=$("#answer7").val();
};

function next8(){
 answerarray[8]=$("#answer8").val();
 };

function addlist(cnt) {
  sended = "#answer";
  sended+=+String(cnt);
  answerarray[cnt]=$(sended).val();

    $("#letter").append("<div id='lettercontent' class='animated fadeInUp'><h3>しんあいなる" + answerarray[2] + "へ</h3><p>いつも"+answerarray[6] +  answerarray[2]+"はまるで、</p><p>"+ answerarray[1]+"にとっては"+answerarray[7]+"みたい。</p><p>"+answerarray[7]+"をみるたびに</p><p>" +answerarray[2]+"のことを思い出すんだなあ。</p><p>"+answerarray[4]+"だって、</p><p>"+answerarray
    [3]+"のすっごく"+answerarray[5]+"。</p><p>いつもほんとうにありがとう。</p><p>これからも"+answerarray[8]+"、だいすきだよ。</p><h3>"+answerarray[0]+"より</h3></div>").trigger( "create" );
    
    };


function resetletter(){
answerarray=[];
answerarray=['なまえ','ぼく','アントワーヌ','羊の絵を書いてくれた','地球って星にいたとき','大事にするものが手に入って心があったかくなった','面白い','砂漠で迷子になったパイロット','夜空を見上げたら僕のこと思い出してほしいな'];
$('#letter').empty();
};

$(document).ready($(function() {
  $('#startbutton').animate({
    'marginTop': '2em'
  },1500);
})
);


function businessletter(cnt) {
  sended = "#answer";
  sended+=+String(cnt);
  answerarray[cnt]=$(sended).val();
    
    $("#letter").append("<h3>"+answerarray[2] + "様</h3><p>いつも大変お世話になっております。</p><p>"+answerarray[4]+"、"+answerarray[1]+"のために"+answerarray[3] + "件では大変お世話になりました。</p><p>社内でもまるで"+answerarray[7]+"のようで"+answerarray[6]+" と話しております。</p><p>改めて御礼申し上げます。</p><p>これからも"+answerarray[8]+"。よろしくお願い申し上げます。</p><h3>"+answerarray[0]+"</h3>").trigger( "create" );
    
    };
