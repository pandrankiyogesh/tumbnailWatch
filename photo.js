
var imageids=['animal1','animal2','animal3','animal4','animal5','animal6','animal7','animal8','animal9']
var k=1
var m=1
var p=2
var duplicates=[] 
for (let i=0;i<imageids.length;i++)
{
    var image=document.getElementById(imageids[i]).getAttribute('src')
    duplicates.push(image)
}
console.log(duplicates)
function a(i)
{
    var show_image=document.getElementsByClassName("show")[0]
    var image_address=document.getElementById(imageids[i]).getAttribute('src')
     show_image.innerHTML=`
      <img src="${image_address}" class="showing_image">`
}
   function right()
    { 
        console.log("right")
           if(m<imageids.length-2) //2 (no.of items in slide show -1)
           {
            let i=0
            while (i<3)
            {
                var show_image=document.getElementById(imageids[i])
                show_image.setAttribute('src',duplicates[m])
                i=i+1
                m=m+1
            }
            k=k+1
            p=m-1
            m=k
           }
   }
   function left()
   {
    console.log("left")
    if(p>=2)
    {
        let i=2
        while(i>=0)
        { 
           var show_image=document.getElementById(imageids[i])
           show_image.setAttribute('src',duplicates[p]) 
           i=i-1
           p=p-1
        }
        k=k-1
        p=k
    }
   }