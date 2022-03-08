'use strict'
const li=$('.rightmenu>ul>li')
const sec=$('.section')
const sec2=$('.section.sec2')
const sec2h1=$('.section.sec2 h1')
li.on('click',function(){
    const thiss=$(this);
    const idx=thiss.index();
    console.log(thiss.index());
    thiss.addClass('on').siblings().removeClass('on')
    const sectop=sec.eq(idx).offset().top;
    console.log(sectop);
    $('html').animate({scrollTop:sectop},500)
    if (idx===1) {
        sec2h1.animate({left:'0'} ,1300)
        
    }
    // $('html').stop().animate({scrollTop:sectop},500)
});

// const ul=document.querySelector('.rightmenu>ul')
// const ulli=document.querySelectorAll('.rightmenu>ul>li')
// ul.addEventListener('click',(e)=>{
//     const et=e.target;
//     console.log(e.target);
//     console.log(e.currentTarget);
//     ulli.forEach((el,idx)=>{
//         if(et===el){
//             console.log(idx);
//         }
//     })
// })

const btn=$('.btn');
const left=$('.leftmenu');
let toggleKey=0;
btn.on('click',function(){
    const thiss=$(this);
    const img=thiss.find('img');
    console.log(toggleKey , '<<<<togglekey-1');
    
    if (toggleKey===0) {
        img.attr('src','img/ii1.png')
        left.animate({left:0} , 200)
        toggleKey=1
        
    }else if(toggleKey===1){
        
        img.attr('src','img/ii.png')
        left.animate({left:'-100%'} , 200)
        toggleKey=0
    }
    
    console.log(toggleKey , '<<<<togglekey-2');
})

const gnbli=$('.leftmenu .gnb>ul>li');
gnbli.on('click',function(){
    const thiss=$(this)
    const thisssub=thiss.find('ul.sub')
    const that=thiss.siblings().find('ul.sub')
    thisssub.slideDown(300)
    that.slideUp(100)
    console.log(thiss.find('ul.sub'));
})