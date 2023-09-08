

imageArr=['https://haikuholidays.com/images/1.jpeg','https://haikuholidays.com/images/2.jpeg']
var color=0;
setInterval(() => {
    if(color==0)
    {
        changeMe(imageArr[color]);
        // console.log(imageArr[color])
        color=color+1
    }
    else if(color==1)
    {
        changeMe(imageArr[color]);
        // console.log(imageArr[color])

        color=0

    }

}, 3000);

// changeMe(imageArr[0])