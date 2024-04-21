
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

{
    function videoe() {
        document.getElementById('myvideo').removeAttribute('controls')
    }
}


function fun(){
    const header = document.querySelector('#nav');

    if(window.scrollY > 120){
      header.classList.add('scrolled');
    }
    else{
      header.classList.remove('scrolled')
    }
}
    

