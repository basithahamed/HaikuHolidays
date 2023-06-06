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
    console.log(y)
    x.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${y})`;

}

imageArr=['https://haikuholidays.com/images/1.jpeg','https://haikuholidays.com/images/2.jpeg']
var color=0;
setInterval(() => {
    if(color==0)
    {
        changeMe(imageArr[color]);
        console.log(imageArr[color])
        color=color+1
    }
    else if(color==1)
    {
        changeMe(imageArr[color]);
        console.log(imageArr[color])

        color=0

    }

}, 3000);

// changeMe(imageArr[0])