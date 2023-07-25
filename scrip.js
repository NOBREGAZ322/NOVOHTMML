// função togglemode
function togglemode()
{
    const html = document.documentElement
    html.classList.toggle("light")

    const img=document.querySelector("#profile img")


    if (html.classList.contains("light"))
    {
        img.setAttribute("src", './aasents/avatar-light.png')
    }
    else
    {
        img.setAttribute("src",'./aasents/Avatar.png')
    }

    // pegga a tag img ,substituir a img 
}