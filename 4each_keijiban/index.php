<!doctype HTML>
<html lang="ja">

<head>
<meta charset="utf-8">
<title>4eachblog 掲示板</title>    
<link rel="stylesheet" type="text/css" href="style.css">    
</head>

<header>
    <div><img src="4eachblog_logo.jpg" class="logo"></div>
        
    <div class=menu>
        <ul>
            <li>トップ</li>
            <li>プロフィール</li> 
            <li>4eachについて</li> 
            <li>登録フォーム</li> 
            <li>問い合わせ</li> 
            <li>その他</li> 
        </ul>
    </div>    
</header>   
    
<body>
    
    <?php
    
    mb_internal_encoding("utf8");
    $pdo = new PDO("mysql:dbname=lesson11;host=localhost;","root","mysql");
    
    $stmt = $pdo->query("select*from 4each_keijiban");

    ?>
    
    <div class=left>

        <h1>プログラミングに役立つ掲示板</h1>

        <form method="post" action="insert.php">
            
            <h3>入力フォーム</h3>

            <div>
                <label>ハンドルネーム</label><br>
                    <input type="text" name="name">
            </div>

            <div>
                <label>タイトル</label><br>
                <input type="text" name="title">    
            </div>

            <div>    
                <label>コメント</label><br>
                <textarea rows="7" cols="50" name="comments">
                </textarea>
            </div>
            
                <input type="submit" value="投稿する" class="submit">
              
               
        </form><p>
        
        <?php
        
        while($row = $stmt->fetch()){
        
        echo"<div class=article>";
        echo"<h2>".$row['title']."</h2>";
        echo"<div class='contents'>";
        echo $row['comments'];
        echo"<div class='handlename'>posted by".$row['name']."</div>";
        echo"</div>";
        echo"</div>";
        
        }
        
        ?>        
        <br>
        
        </div>
        
    <div class=right>
            <h3>人気の記事</h3>
            <ul class="migi">
                <li>PHPオススメ本</li>
                <li>PHP MyAdminの使い方</li>
                <li>今人気のエディタTop5</li>
                <li>HTMLの基礎</li>
            </ul>
            <h3>オススメリンク</h3>
            <ul class="migi">
                <li>インターノウス株式会社</li>
                <li>XAMPPのダウンロード</li>
                <li>Eclipseのダウンロード</li>
                <li>Braketsのダウンロード</li>
            </ul>
            <h3>カテゴリ</h3>
            <ul class="migi">
                <li>HTML</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>JavaScript</li>
            </ul>
    </div> 
    
    <footer>
        <div>
            copyright internous | 4each blog is the one which provides A to Z about programming.
        </div>
    </footer>
    
</body>    
    
    
    
    
</html>