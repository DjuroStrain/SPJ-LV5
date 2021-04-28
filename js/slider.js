
var i = 0;

var images = [];

images[0] = "img/slider_1";
images[1] = "img/slider_2";
images[2] = "img/slider_3";
images[3] = "img/slider_4";
images[4] = "img/slider_5";

 function Next() {
    if(i < images.length - 1)
    {
        i++;
    }

    else
    {
        i = 0;
    }

    document.getElementById("slika").src = images[i];
}

function Prev()
{
        if(i > 0)
        {
            i--;
        }

        else
        {
            i = images.length-1;
        }
        
        document.getElementById("slika").src = images[i];   
}