let divL = document.getElementsByClassName('logo')[0];
let imgL = document.getElementsByTagName('img')[0];
let sun = document.getElementsByTagName('img')[1];
let h2L = document.getElementsByTagName('h2')[0];
let a = document.getElementsByTagName('a');
let sec1 = document.getElementsByClassName('sec1')[0];
let header = document.getElementsByTagName('header')[0];
let icon = document.getElementsByClassName('fa-ellipsis')[0];
let nav = document.getElementsByTagName('nav')[0];
let overR = document.getElementById('overR');
let btn1 = document.getElementById('btn1');
let btn = document.getElementById('tns');
sun.onclick = function() {
    if(this.src.split('/').pop() === "whiteSun.png") {
        this.src = "pictures/sun/blackSun.png";
        document.body.style.backgroundColor = '#dee';
        document.body.style.color = 'black';
        h2L.style.color = 'black';
        divL.style.borderRightColor = 'black';
        imgL.src = 'pictures/logo/logo-white2.png';
        sec1.style.boxShadow = '1px 1px 10px 3px black';
        header.style.boxShadow = '1px 1px 10px 3px black';
        btn1.style.boxShadow = '1px 1px 5px black';
        btn1.style.color = 'black';
        btn1.style.background = 'white';
        btn.style.color = 'black';
        btn.style.borderColor = 'black';
    }else{
        this.src = "pictures/sun/whiteSun.png";
        document.body.style.backgroundColor = '#151515';
        document.body.style.color = 'white';
        h2L.style.color = 'var(--colorLo, #BDB3A5)';
        divL.style.borderRightColor = 'var(--colorLo, #BDB3A5)';
        imgL.src = 'pictures/logo/logo-black2.png';
        sec1.style.boxShadow = '1px 1px 10px white';
        header.style.boxShadow = '1px 1px 10px white';
        btn1.style.boxShadow = '1px 1px 5px white';
        btn1.style.color = 'white';
        btn1.style.background = 'black';
        btn.style.color = 'white';
        btn.style.borderColor = 'white';

    }
}

function navBC() {
    if (sun.src.split('/').pop() === "whiteSun.png") {
        nav.style.backgroundColor = 'var(--colorB, #151515)';
        nav.style.boxShadow = '1px 1px 10px white';
    } else {
        nav.style.backgroundColor = 'var(--colorW, #BDB3A5)';
        nav.style.boxShadow = '1px 1px 10px black';
    }
}
icon.onclick = function() {
    let iconColor = getComputedStyle(icon).color;
    if (iconColor === 'rgb(31, 139, 228)') {
        this.classList.remove('icon');
        nav.style.cssText = `
            visibility: hidden;
            opacity: 0;
        `;
    } else {
        if (window.innerWidth < 600) {
            this.classList.add('icon');
            nav.style.cssText = `
                visibility: visible;
                opacity: 1;
                transform: translateY(0%);
            `;
            navBC();
            overR.classList.add('opc')
        } else {
            this.classList.add('icon');
            nav.style.cssText = `
                visibility: visible;
                opacity: 1;
            `;
            navBC();
        }
    }
}
function resize() {
    icon.classList.remove('icon');
    if (window.innerWidth < 890) {
        nav.style.cssText = `
            visibility: hidden;
            opacity: 0;
        `;
        navBC();

        if (document.onclick) return;
        document.onclick = function(event) {
            if (!nav.contains(event.target) && !icon.contains(event.target)) {
                if (window.innerWidth < 600) {
                    nav.style.transform = 'translateY(-105%)';
                    icon.classList.remove('icon');
                    overR.classList.remove('opc')

                } else {
                    nav.style.cssText = `
                        visibility: hidden;
                        opacity: 0;
                    `;
                    icon.classList.remove('icon');
                }
            }
        }
    } else {
        document.onclick = null;
        nav.style.cssText = `
            visibility: visible;
            opacity: 1;
        `;
    }
}
resize();
window.onresize = resize;
let list = document.getElementsByTagName('li')
if(document.URL == 'file:///E:/DL-RA/index.html'){
    list[0].style.borderBottom = '2px solid  rgb(31, 139, 228'
}else if(document.URL == 'file:///E:/DL-RA/our-serves.html'){
    list[1].style.borderBottom = '2px solid  rgb(31, 139, 228'
}else if(document.URL == 'file:///E:/DL-RA/about-us.html'){
    list[2].style.borderBottom = '2px solid  rgb(31, 139, 228'
}
function up(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
}
let card = document.getElementsByClassName('card')
let btnu = document.getElementById('btnup')
let sec2 = document.getElementById('sec2')
let repImg = document.getElementById('repImg');
window.onscroll = function(){
    if(scrollY >= 60){
        btn1.style.display = 'block'
        sec2.style.transform = 'translateX(0)'
        sec2.style.opacity = '1'
        repImg.style.transform = 'translateX(0)'
        repImg.style.opacity = '1'
    }else{
        btn1.style.display = 'none'
    }
    if(window.innerWidth < 600){
        if(scrollY >= 1000){
            for(let i = 0;i < card.length; i++){
                card[i].style.opacity = '1'
            }
            btn.style.opacity = '1';
            btnu.style.opacity = '1';
            
        }
    }else{
        if(scrollY >= 800){
            for(let i = 0;i < card.length; i++){
                card[i].style.opacity = '1'
            }
            btn.style.opacity = '1';
            btnu.style.opacity = '1';
        }else{
            for(let i = 0;i < card.length; i++){
                card[i].style.opacity = '0'
            }
            btn.style.opacity = '0';
            btnu.style.opacity = '0';
        }
    }
}

