var i = 0;
const fileUrl = 'assets/code.txt';
var txt ; fetch(fileUrl).then( r => r.text() ).then( t => txt=t )
var lettersPerClick = 3;

document.onkeypress=function(e)
{
    if(e.key=="~")
    {
        document.getElementById("grant").style.display="block";
        document.getElementById("code").innerHTML = ">   ";
        i=0;
    }
    else  if(e.key=="!")
    {
        document.getElementById("deny").style.display="block";
        document.getElementById("code").innerHTML = ">   ";
        i=0;
    }
    else  if(e.key=="`")
    {
        document.getElementById("password").style.display="block";
    }
    else
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
                document.getElementById("code").innerHTML += "<br><br>>   ";
                i++;
            }
        }
    }
}

function hide(id)
{
    if(id===1)
    {
        document.getElementById("grant").style.display="none";
    }
    else if(id===2)
    {
        document.getElementById("deny").style.display="none";
    }
    else if(id===3)
    {
        document.getElementById("password").style.display="none";
        document.getElementById("code").innerHTML += "<br><br>----> Login Successfully<br><br>>   ";
    }
}