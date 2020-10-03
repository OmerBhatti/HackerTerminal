var i = 0;
const fileUrl = 'assets/code.txt';
var txt ; fetch(fileUrl).then( r => r.text() ).then( t => txt=t )
var lettersPerClick = 4;
var speed = 70;
var pressCount = 0;

document.onkeypress=function(e)
{
    if (i >= txt.length)
    {
        i = 0;
    }
    for (let count = 0; count < lettersPerClick; count++)
    {
        if(txt.charAt(i)!='\n')
        {
            document.getElementById("code").innerHTML += txt.charAt(i);
            i++;
        }
        else{
            document.getElementById("code").innerHTML += "<br>>   ";
            i++;
        }
    }
    setTimeout(typeWriter, speed);
}
$("#code").scrollTop($("#code")[0].scrollHeight);