<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title>GetSong</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="maimaisong-style.css">
    </head>
    <body>
    <header class="row">
    <div class="col-4 logo-name" >
    <div class="col-2 logo">
    <img src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/7/76/DQpgw.gif/revision/latest?cb=20180107145751">
    </div>
    <div class="col-10 nameApp">
    SONG SONG MAI
</div>
</div>
<div class="col-2 search">
    <input type="text">
    </div>
    <div class="col-6 menu">
    <ul>
    <li><a href="#">Trang chủ</a></li>
<li>
<a href="#">Danh sách</a>
<ul class="sub-menu">
    <li><a href="#">Bài hát Việt</a></li>
<li><a href="#">Bài hát Nhật</a></li>
<li><a href="#">Bài hát Hoa</a></li>
</ul>
</li>
<li><a href="#">Danh sách</a></li>
<li><a href="register.html" target="_blank">Đăng kí</a></li>
<li><a href="login.html" target="_blank">Đăng nhập</a></li>
</ul>
</div>
</header>
<section class="row">
    <nav class="col-2">
    <ul>
    <li><a href="#">Nhạc cá nhân</a></li>
<li><a href="#">Nhạc yêu thích</a></li>
<li><a href="#">Nhạc vừa nghe</a></li>
<li><a href="get-song.html">Nhạc mới nhất</a></li>
<li><a href="#">Nhạc đã tải</a></li>
</ul>
</nav>
<main class="col-7">
    <div class="song-player">
    <div class="song-detail">
    <marquee behavior="scroll" direction="left">
    <div class="current-song-title">
    <span id="current-play-title"></span>
    </div>
    </marquee>
    </div>
    <div class="player">
    <audio controls id="my-mp3" autoplay>
<source src="" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
</div>
</div>
<div class="list-song" id="list-song">
    </div>
    </main>
    <aside class="col-3">

    </aside>
    </section>
    <footer class="row">Copy right &#169; 2019 MaiMaiSong</footer>
<script src="get-song-js.js"></script>
    </body>
    </html>