window.onload=function () {
    var hover = document.querySelector(".hover");
    var li_1 = document.querySelector('.li-1')
    var ul_1 = document.querySelector('.ul-1')
    var con = document.querySelector('.con')
    var a2 = document.querySelectorAll('.a2')
    var mobile = document.querySelector('.mobile')
    var email = document.querySelector('.email')
    var bd1 = document.getElementById("bd1")
    var bd2 =document.getElementById("bd2")
	var img1 = document.querySelector('#img-1')

    li_1.onmouseover=function () {
        hover.style.display='block'
    }
    ul_1.onmouseout=function () {
        hover.style.display='none'
    }
    con.onmouseover=function () {
        con.style.backgroundColor='white'
		img1.src="./img/slogen.png"
        for(var i=0;i<a2.length;i++){
            a2[i].style.color='black'
        }
    }
    con.onmouseout=function () {
        con.style.backgroundColor='rgba(100,155,191,.3)'
		img1.src="./img/slogen_fix.png"
        for(var i=0;i<a2.length;i++){
            a2[i].style.color='white'
        }
    }

    mobile.onclick=function () {
        mobile.classList.add('active')
        email.style.color="black"
        email.style.borderBottom="none"
        bd1.style.display='block'
        bd2.style.display='none'
    }
    email.onclick=function () {
        this.style.borderBottom="2px solid #ff6100"
        this.style.color="#ff6100"
        mobile.classList.remove('active')
        bd2.style.display='block'
        bd1.style.display='none'
    }
}