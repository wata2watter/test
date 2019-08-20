<?php

$a=array("東京"=>"N0.1",
         "神奈川"=>"No.2",
         "埼玉"=>"No.3",
         "千葉"=>"No.4",
        "その他"=>"ではない");
foreach($a as $key=>$value){
    echo $key."は関東".$value."です。";
    echo "<br>";}

?>