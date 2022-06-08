setInterval(GetWidth,100);
function GetWidth() {
    var width = window.innerWidth;
    if (width > 580){
        document.getElementById('Title').style.fontSize=width / 25+"px";
        document.getElementById('NoAcc').style.fontSize=width / 60+"px";
        document.getElementById('Signup').style.fontSize=width / 60+"px";
        document.getElementById('Username').style.fontSize=width / 60+"px";
        document.getElementById('Email').style.fontSize=width / 60+"px";
        document.getElementById('Password').style.fontSize=width / 60+"px";
        document.getElementById('rePassword').style.fontSize=width / 60+"px";
        document.getElementById('Submit').style.fontSize=width / 60+"px"; 
    } else {
        document.getElementById('Title').style.fontSize=width / 18+"px";
        document.getElementById('NoAcc').style.fontSize=width / 36+"px";
        document.getElementById('Signup').style.fontSize=width / 36+"px";
        document.getElementById('Username').style.fontSize=width / 36+"px";
        document.getElementById('Email').style.fontSize=width / 36+"px";
        document.getElementById('Password').style.fontSize=width / 36+"px";
        document.getElementById('rePassword').style.fontSize=width / 36+"px";
        document.getElementById('Submit').style.fontSize=width / 36+"px"; 
    }
}