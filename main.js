var riddlesbanner = document.getElementById("riddlesbanner");
var num = Math.floor(Math.random() * 10001);
var code = "$options+new%#"+num
var counter = 0
//alert(counter)
function gmailclick(){
    if (counter==0){
        counter = 1;
        //alert(counter);
    }
}
function waffleclick(){
    if (counter==1){
        counter = 2;
        //alert(counter);
    } else if (counter==2){
        counter = 3;
        //alert(counter);
    }
}
function profilepicclick(){
    if (counter==3){
        counter = 4;
        //alert(counter);
    }
}
function termsclick(){
    if (counter==4){
        counter = 5;
        //alert(counter);
    }
}
function micclick(){
    if (counter==5){
        counter = 6;
        //alert(counter);
    } else if (counter==6){
        counter = 7;
        
        alert("ERROR(searchERRcode:"+code+") ERR CD:302 ADMINACCESSDENIED_3242 ERRDASHVALUE:laubfyg4387gfbkahu7gyb3kg#$TAG$TGSAFZDAG$#GASDFE$G$#EWGEWGWGUYBV&#WRGBVG#UGBEG*EBGIEUWBGE*G&@#FGEJBVNGEIRG*VER*(GHERJ?GVBERUIOGVER*GYW#RHGHERGQUERGB*UWGOQRBENQRIOGU*HEQAW&$*GUAHWGFIUH$*WTGRUGIFU)ERRSOLU:contact google support :)")
    }
}
function luckyclick(){
    textvalue = document.getElementById("textbox").value;
    if (textvalue==code & counter==7){
        alert("gg")
        x.style.display= "block";
    }
}
var aboutbtn = document.getElementById("about");
function aboutclick(){
    txtval = document.getElementById("textbox");
    if (counter==7){
        txtval.value="3487fg0yvbpqiwupj93jp93uhpr48iuvhnworicoinunban";
        //alert(counter);
    }
}
function adsclick(){
    txtval = document.getElementById("textbox");
    if (counter==7){
        txtval.value="s8347gfbvcqweoiuyvbqw3p8ru4hovi";
        //alert(counter);
    }
}
function backcmd(){
    x.style.display= "none";
    counter=0
    document.getElementById("textbox").value = ""; 
    
}
function showbanner(){
    riddlesbanner.style.display= "block";
}
function hidebanner(){
    riddlesbanner.style.display= "none";
}
