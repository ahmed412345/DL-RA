let divL = document.getElementsByClassName('logo')[0];
let imgL = document.getElementsByTagName('img')[0];
let sun = document.getElementsByTagName('img')[1];
let h2L = document.getElementsByTagName('h2')[0];
let header = document.getElementsByTagName('header')[0];
let icon = document.getElementsByClassName('fa-ellipsis')[0];
let nav = document.getElementsByTagName('nav')[0];
let overR = document.getElementById('overR');
let part = document.getElementsByClassName('part');
let card = document.getElementsByClassName('card');
let butai = document.getElementsByTagName('a');
let iframe = document.getElementsByTagName('iframe')[0];
let btn1 = document.getElementById('btn1');
// let docCont = iframe.contentDocument;
function blackTheme(){
    sun.src = "pictures/sun/blackSun.png";
    document.body.style.backgroundColor = '#dee';
    document.body.style.color = 'black';
    btn1.style.boxShadow = '1px 1px 5px black';
    btn1.style.color = 'black';
    btn1.style.background = 'white';
    h2L.style.color = 'black';
    divL.style.borderRightColor = 'black';
    imgL.src = 'pictures/logo/logo-white2.png';
    header.style.boxShadow = '1px 1px 10px 3px black';
    for(let i = 0; i < part.length; i++){
        part[i].style.boxShadow = '1px 1px 20px 2px black';
    }
    for(let i = 0; i < card.length; i++){
        card[i].style.boxShadow = '1px 1px 20px 2px black';
    }
    for(let i = 0; i < butai.length; i++){
        butai[i].style.color = 'black';
    }
    // docCont.body.style.backgroundColor = '#dee'
    // docCont.body.style.color = 'black'

}
function whiteTheme(){
    sun.src = "pictures/sun/whiteSun.png";
    document.body.style.backgroundColor = '#151515';
    document.body.style.color = 'white';
    btn1.style.boxShadow = '1px 1px 5px white';
    btn1.style.color = 'white';
    btn1.style.background = 'black';
    h2L.style.color = 'var(--colorLo, #BDB3A5)';
    divL.style.borderRightColor = 'var(--colorLo, #BDB3A5)';
    imgL.src = 'pictures/logo/logo-black2.png';
    header.style.boxShadow = '1px 1px 10px white';
    for(let i = 0; i < part.length; i++){
        part[i].style.boxShadow = '1px 1px 20px 2px rgb(150, 148, 143)'
    }
    for(let i = 0; i < card.length; i++){
        card[i].style.boxShadow = '1px 1px 20px 2px rgb(150, 148, 143)'
    }
    for(let i = 0; i < butai.length; i++){
        butai[i].style.color = 'white'
    }
    // docCont.body.style.backgroundColor = '#151515'
    // docCont.body.style.color = 'white'
}
sun.onclick = function() {
    if(this.src.split('/').pop() === "whiteSun.png") {
        localStorage.setItem('theme','blackTheme');
        blackTheme();
    }else{
        localStorage.setItem('theme','whiteTheme');
        whiteTheme();
    }
}
let savedTheme = localStorage.getItem('theme');
if(savedTheme){
    eval('(' + savedTheme + ')()');
}else{
    whiteTheme();
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
                    overR.classList.remove('opc');

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
if(document.URL.includes('index.html')){
    list[0].style.borderBottom = '2px solid  rgb(31, 139, 228'
}else if(document.URL.includes('our-serves.html')){
    list[1].style.borderBottom = '2px solid  rgb(31, 139, 228'
}else if(document.URL.includes('about-us.html')){
    list[2].style.borderBottom = '2px solid  rgb(31, 139, 228'
}
let partH = document.getElementsByClassName('partH');
let partP = document.getElementsByClassName('partP');
for(let i = 0; i < part.length; i++){
    part[i].addEventListener('mouseover',function(){
        partH[i].style.opacity = '1';
        partP[i].style.transform = 'translateY(0)';
    });
    part[i].addEventListener('mouseout',function(){
        partH[i].style.opacity = '0';
        partP[i].style.transform = 'translateY(400px)';
    });
}
let mainS = document.getElementsByClassName('sectionserv2')[0];
let bookS = document.getElementsByClassName('sectionbook')[0];
let quotesS = document.getElementsByClassName('sectionquotes')[0];
let aiS = document.getElementsByClassName('sectionai')[0];
//book old
function repl(section){
    mainS.style.transform = 'translateX(-50px)';
    mainS.style.opacity = '0';
    setTimeout(function(){
        mainS.style.display = 'none';
        mainS.style.transform = 'translateX(0)';
        section.style.display = 'flex';
    },100)
    setTimeout(function(){
        section.style.opacity = '1';
    },100)
}
part[0].addEventListener('click', function(){
    repl(bookS);
    window.scroll(0, 0)
});
part[1].addEventListener('click', function(){
    repl(quotesS);
    window.scroll(0, 0)
});
part[2].addEventListener('click', function(){
    repl(aiS);
    window.scroll(0, 0)
});
function back(section){
    section.style.transform = 'translateX(10px)';
    section.style.opacity = '0';
    setTimeout(function(){
        section.style.display = 'none';
        section.style.transform = 'translateX(0)';
        mainS.style.display = 'flex';
        mainS.style.opacity = '0';
    },100);
    setTimeout(function(){
    section.style.transform = 'translateX(0)';
    mainS.style.opacity = '1';
    },100);
}
let backI1 = document.getElementsByClassName('fa-backward')[0];
let backI2 = document.getElementsByClassName('fa-backward')[1];
let backI3 = document.getElementsByClassName('fa-backward')[2];
backI1.onclick = function(){
    back(bookS);
}
backI2.onclick = function(){
    back(quotesS);
    window.speechSynthesis.cancel();
}
backI3.onclick = function(){
    back(aiS);
}
let booknav = document.getElementById('booknav');
let target = document.getElementsByClassName('target')[0];
function book(src){
    booknav.style.opacity = '0'
    setTimeout(function(){
        booknav.style.display = 'none'
        target.style.display = 'block'
    },500)
    setTimeout(function(){
        target.style.opacity = '1'
    },1000)
    iframe.src = src;
}
// docCont.body.style.backgroundColor = '#151515'
// docCont.body.style.color = 'white'
let bacbtn = document.getElementsByClassName('fa-arrow-left-long')[0];
function backTB(){
    target.style.opacity = '0'
    setTimeout(function(){
        target.style.display = 'none'
        booknav.style.display = 'block'
    },500)
    setTimeout(function(){
        iframe.removeAttribute('src');
        booknav.style.opacity = '1'
    },1000)
}
let result = document.getElementsByClassName('result')[0];
let input = document.getElementById('input');
let type = document.getElementById('type');
function search(){
    let filter = input.value.toLowerCase();
    let items1 = result.getElementsByTagName('p');
    let items2 = result.getElementsByTagName('span');
    let items3 = result.getElementsByTagName('h4');
    let itemsC = result.getElementsByTagName('div');
    // console.log(itemsC.length)
    for (let i = 0; i < items1.length; i++) {
        let display = 'none'
        if (type.value === 'quotes' && items1[i] && items1[i].textContent.toLowerCase().includes(filter)){
            itemsC[i].style.display = '';
            display = ''
        }else{
            if(type.value === 'Author' && items2[i] && items2[i].textContent.toLowerCase().includes(filter)){
                itemsC[i].style.display = '';
                display = ''
            }else{
                if(type.value === 'book' && items3[i] && items3[i].textContent.toLowerCase().includes(filter)){
                    itemsC[i].style.display = '';
                    display = ''
                }else{
                    itemsC[i].style.display = 'none';
                }
            }
        }
    }   
}
type.onchange = function(){
    search();
}
input.onkeyup = function() {
    search();
}
let p = result.getElementsByTagName('p');
let h4 = result.getElementsByTagName('h4');
for(let i = 0; i < p.length; i++){
    p[i].innerHTML += '<i class="fa-solid fa-volume-high"></i>';
}
let voice = document.getElementsByClassName('fa-volume-high');
// دالة لقراءة النصوص الصوتية
for(let i = 0; i < voice.length; i++){ 
    let talk = new SpeechSynthesisUtterance(p[i].textContent); 
    voice[i].onclick = function() { 
        talk.lang = 'en-US'; 
        talk.pitch = .5; 
        talk.rate =  1; 
        talk.volume = 1; 
        if(window.speechSynthesis.speaking){ 
            window.speechSynthesis.cancel(); 
            window.speechSynthesis.speak(talk); 
        }else{ 
            window.speechSynthesis.speak(talk); 
        } 
    } 
 
}
console.log('%cplease do not try to edit my web site','font-size:50px; color:red;');
if(window.top !== window.self){
    window.top.location.replace(window.self.location);
}
function up(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
}
window.onscroll = function(){
    if(scrollY >= 60){
        btn1.style.display = 'block';
    }else{
        btn1.style.display = 'none';
    }
}
let a = document.getElementsByClassName('contain')[0];
console.log(a.getElementsByTagName('div').length)