  var question=['きみのなまえはなんていうの？','じぶんのこといつもなんていうの？','だれにおてがみをかくの？','どんなことがうれしかったの？','それっていつのこと？','きみ、それでどんな気持ちだったの？','そっかあ。その人、優しいんだね？','その人ってたとえばどんなかんじ？キツネはぼくのこと、金色の小麦畑みたいっていってたけど','ふうん。そんな感じ方もあるんだ。それで、その人とこれからどうつきあっていきたいの？'];
   var defaulttxt=['なまえ','ぼく','アントワーヌ','羊の絵を書いてくれた','地球って星にいたとき','心があったかくなった','面白い','砂漠で見つけた井戸','夜空を見上げたら僕のこと思い出してほしいな'];
   var answerarray=['なまえ','ぼく','アントワーヌ','羊の絵を書いてくれた','地球って星にいたとき','心があったかくなった','面白い','砂漠で見つけた井戸','夜空を見上げたら僕のこと思い出してほしいな'];
  var imagearray=['prince.png','princeandplanet.png','foxanprince.png','cleaningprince.png','lyingprince.png','waterandprince.png','rosesandprince.png','foxanprince.png','flyingprince.png'] ;
  var today=new Date();
  var month=today.getMonth();
  var viewmonth=month+1;
  var date=today.getDate();
  
//質問のページ描写
function QandA(cnt){   
document.write(
  '<div data-role="page" id="add-page'+cnt+'">'+
  '<div data-role="header" data-position="fixed" data-theme="c"><h1>おてがみをかく</h1>'+
  '<a href="#list-page" data-icon="back" class="ui-btn-left">TOP</a>'+
  '</div>'+
  '<div data-role="content"> '+
 '<img src="image/'+imagearray[cnt]+'" width="100%"><br>'+
 question[cnt]+
'<textarea id="answer'+cnt+'" placeholder='+defaulttxt[cnt]+'></textarea><br>');
  };

//配列への代入for文で回したかったけどうまくいかない
function next(cnt){
 let sended = "#answer";
 sended+=+String(cnt);
 answerarray[cnt]=$(sended).val();
};

//しょうがないから一個一個書く
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

//最後の質問ページからお手紙ページに遷移する際の処理
function addlist(cnt) {
 answerarray[8]=$("#answer8").val();

    $("#letter").append("<div id=lettercontent class='animated fadeInUp'><h3>しんあいなる" + answerarray[2] + "へ</h3><p>いつも"+answerarray[6] +  answerarray[2]+"はまるで、</p><p>"+ answerarray[1]+"にとっては"+answerarray[7]+"みたい。</p><p>"+answerarray[7]+"をみるたびに</p><p>" +answerarray[2]+"のことを思い出すんだなあ。</p><p>"+answerarray[4]+"だって、</p><p>"+answerarray
    [3]+"のすっごく"+answerarray[5]+"。</p><p>いつもほんとうにありがとう。</p><p>これからも"+answerarray[8]+"、だいすきだよ。</p><h3>"+answerarray[0]+"より</h3></div>").trigger( "create" );

    $("#letterprev").append("<div id=lettercontent class='animated fadeInUp'><h3>しんあいなる" + answerarray[2] + "へ</h3><p>いつも"+answerarray[6] +  answerarray[2]+"はまるで、</p><p>"+ answerarray[1]+"にとっては"+answerarray[7]+"みたい。</p><p>"+answerarray[7]+"をみるたびに</p><p>" +answerarray[2]+"のことを思い出すんだなあ。</p><p>"+answerarray[4]+"だって、</p><p>"+answerarray
    [3]+"の</p><p>すっごく"+answerarray[5]+"。</p><p>いつもほんとうにありがとう。</p><p>これからも"+answerarray[8]+"、だいすきだよ。</p><h3>"+answerarray[0]+"より</h3></div>").trigger( "create" );
    };

//使えなかったかなこれ
function resetletter(){
answerarray.length = 0;
answerarray=['なまえ','ぼく','アントワーヌ','羊の絵を書いてくれた','地球って星にいたとき','大事にするものが手に入って心があったかくなった','面白い','砂漠で迷子になったパイロット','夜空を見上げたら僕のこと思い出してほしいな'];
$('#lettercontent').empty();
};

//スタートボタンふわっと
$(document).ready($(function() {
  $('#startbutton').animate({
    'marginTop': '2em'
  },1500);
})
);

//お礼状バージョンの最後のページへの遷移処理
function businessletter(cnt) {
  sended = "#answer";
  sended+=+String(cnt);
  answerarray[cnt]=$(sended).val();
  
  let arraymonth=['新春の候','残寒の候','早春の候','陽春の候','新緑の候','紫陽花の候','大暑の候','残暑の候','初秋の候','秋晴の候','晩秋の候','師走の候',];
  

    $("#letter").append("<p>拝啓\t"+arraymonth[month]+"、ますますご清栄のこととお慶び申し上げます。</p><p>"+answerarray[4]+"、"+answerarray[1]+"のために"+answerarray[3] + "件、誠にありがとうございました。</p><p>"+answerarray[2]+"様の"+answerarray[7]+"のような"+answerarray[6]+"一面を知ることができ嬉しく思いました。</p><p>改めて御礼申し上げます。</p><p>今後とも"+answerarray[8]+"所存です。よろしくお願い申し上げます。</p><p>末筆ながら貴社の更なるご発展をお祈り申し上げます。</p><h3>令和元年"+viewmonth+"月"+date+"日</h3><h3>"+answerarray[0]+"</h3><h3>"+answerarray[2] + "様</h3>").trigger( "create" );
    
    };
//最後のページから戻るときにこれやらないとバグる。。。
  function refresh(){
    location.href="index.html";
  };
