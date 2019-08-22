document.write("■■■問1■■■"+"<p>");

for(var a=1; a<=5; a++){
    document.write("★");
}

document.write("<p>"+"■■■問2■■■"+"<p>");

for(var b=1; b<=2; b++){
    for(var c=1; c<=3; c++){
        document.write("★");}
    document.write("<br>");
}

document.write("<p>"+"■■■問3■■■"+"<p>");

for(var d=1; d<=2; d++){
    for(var e=1; e<=5; e++){
        document.write("☆");}
    document.write("<br>");
}

document.write("<p>"+"■■■問4■■■"+"<p>");

for(var f=1; f<=4; f++){
    for(var g=1; g<=5; g++){
        document.write("★");}
    document.write("<br>");
}

document.write("<p>"+"■■■問5■■■"+"<p>");

for(var h=1; h<=4; h++){
    for(var i=1; i<=3; i++){
        document.write("★");}
    document.write("<br>");
}

document.write("<p>"+"■■■問6■■■"+"<p>");

for(var j=1; j<=3; j++){
    for(var k=1; k<=3; k++){
        if(k%2==0){
            document.write("☆");}
            else{document.write("★");}
        }document.write("<br>");
}

document.write("<p>"+"■■■問7■■■"+"<p>");

for(var l=1; l<=5; l++){
    for(var m=1; m<=5; m++){
        if(m%2==0){
            document.write("☆");}
            else{document.write("★");}
        }document.write("<br>");
}

document.write("<p>"+"■■■問8■■■"+"<p>");

for(var n=1; n<=5; n++){
    for(var o=1; o<=n; o++){
        document.write("★");
    }document.write("<br>");
}

document.write("<h1>上級</h1>");

document.write("<p>"+"■■■問1■■■"+"<p>");

for(var p=1; p<=5; p++){
    for(var q=1; q<=5; q++){
        document.write("★");
    }document.write("<br>");
}

document.write("<p>"+"■■■問2■■■"+"<p>");

for(var r=1; r<=5; r++){
    for(var s=1; s<=5; s++){
        if(r%2==0 && s%2==1 || r%2==1 && s%2==0){
            document.write("☆");}
        else{document.write("★");}
    }document.write("<br>");
}

document.write("<p>"+"■■■問3■■■"+"<p>");

for(var t=1; t<=5; t++){
    for(var u=1; u<=5; u++){
        if(u==t){
            document.write("☆");}
        else{document.write("★");}
    }document.write("<br>");
}

document.write("<p>"+"■■■問4■■■"+"<p>");

for(var v=1; v<=5; v++){
    for(var w=1; w<=v; w++){
        document.write("★");}
    document.write("<br>");
}

document.write("<p>"+"■■■問5■■■"+"<p>");

for(var x=1; x<=5; x++){
    for(var y=1; y<=x; y++){
        if(y==x){
            document.write("☆");}
        else{document.write("★");}
    }document.write("<br>");
}
















