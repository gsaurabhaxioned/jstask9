let button=document.querySelectorAll('.btn'),
    audio=document.querySelectorAll('.audio');

    button.forEach((i,index)=>{
        i.addEventListener('click',function(){
            audio[index].play();
        });
    });





















