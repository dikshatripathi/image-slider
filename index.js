let flag=0;
showDisplay(flag);

//for alider arrow
function controller(x){
    flag=flag+1;    
    showDisplay(flag);       //x=1 flag=2 flag=2+1=3     //x=-1 flag=2-1=1
}

//it shows first element
function showDisplay(num){
    let slide=document.getElementsByClassName("slide");

    //edge cases
     if(num==slide.length){
        flag=0;
        num=0;
     }
     if(num<0){
        flag=slide.length-1;
        num=slide.length-1;
     }


    //for hiding the present  data
    for(let y of slide){
     y.style.display="none";
    }


    slide[num].style.display="block";
}
