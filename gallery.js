function callofimg()
{
    var allimages=document.images;
    for(i=0;i<10;i++)
    {
        allimages[i].src=`${i}.jpg`
    }

}
callofimg()
function bigwindow(imgurl)
{
    document.getElementById("imgcontainer").style.backgroundImage=`url(${imgurl})`
}