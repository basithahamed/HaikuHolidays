function showMenu() {
    // document.getElementById("lmobile").style.display="block";
    var x = document.getElementById("lmobile");   
    if(x.style.display=='block')
    {
        x.style.display = 'none';

    }
    else
    {
        x.style.display = 'block';

    }
}


// for the background Change
function changeMe(y)
{
    var x=document.getElementById("pic")
    // console.log(y)
    x.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${y})`;

}

