var startTime = new Date();
var number = Math.floor(Math.random()*3) + 1;

while(true){
 var answer = parseInt(window.prompt('数あてゲーム。1～3の数字を入力してください\n999を入力すると終了できます'));
 var message;
 if(answer === number){
　 message = 'あたり!';
　 break;
 }else if(answer < number && answer != 999){
   message = '残念!もっと大きいです';
 }else if(number < answer && answer != 999){
   message = '残念!もっと小さいです';
 }else if(answer === 999){
   message = '終了しました';
   break;
 }else{
   message = '1～3の数字を入力してください';
 }
} 

var endTime = new Date();

document.getElementById('choice').textContent = message + '  かかった時間は' + (endTime -startTime + "ms");

function Reload(){
 location.reload();
}
