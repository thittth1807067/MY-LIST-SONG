var CREATSONG_API = "https://2-dot-backup-server-001.appspot.com/_api/v2/songs";
var song = {
    name:'BaiCaTuoiTre',
    description: " xuanhung24011@gmail.com ",
    singer: "Hung",
    author: "Author",
    thumbnail: "http://song-thumbnail.png" ,
    link: "https://c1-ex-swe.nixcdn.com/NhacCuaTui921/BaiCaTuoiTre-DaLABLinhCaoMelG-4452195.mp3"
}
var a = localStorage.getItem('token');
var req = new  XMLHttpRequest();
req.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 201){
        alert(this.responseText)
    }
}
req.open('POST', CREATSONG_API, true);
req.setRequestHeader('Content-type','application/json;charset=UTF-8');
req.setRequestHeader('Authorization',  'Basic '+localStorage.getItem('token'));
req.send(JSON.stringify(song));