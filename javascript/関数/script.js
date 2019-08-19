document.write("■■■問1■■■"+"<p>");

function round(rad){
    return "半径"+ rad +"cmの円の面積は"+ rad*rad*3.14 +"です。"
}　


document.write(round("5")+"<br>");

document.write(round("7")+"<br>");

document.write(round("10")+"<br>");

document.write("<p>"+"■■■問2■■■"+"<p>");

function cost(gr,ad,ch){
    return gr + "グループの料金は" + (500*ad+200*ch) +"円です。"
}

document.write(cost("A","2","4")+"<br>");

document.write(cost("B","1","5")+"<br>");

document.write(cost("C","3","7")+"<br>");