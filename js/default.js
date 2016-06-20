
var result = window.confirm('準備OK?');

if(result){
document.getElementById('choice').textContent = 'OKが押されました';
}else{
  document.getElementById('choice').textContent = 'キャンセルが押されました';
}
