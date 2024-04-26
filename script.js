let nav_dailog=document.querySelector("#nav-dialog");
function handleclick(){
    nav_dailog.classList.toggle("hidden");
}
const initailtranslateltr=-48*4;
const initailtranslatertr=36*4;

function setupIntersectionObserver(element,isLtr,speed){
    const intersectionCallback=(entries)=> {
        const isIntersecting=entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener("scroll",scrollHandler);
            
        }
        else{
            document.removeEventListener("scroll",scrollHandler);
 
        }

    }

    const intersectionObserve= new IntersectionObserver(intersectionCallback)
    intersectionObserve.observe(element);

    function scrollHandler(){
        const translateX=(window.innerHeight-element.getBoundingClientRect().top)*speed;

        let totalTranslate=0;
        if(isLtr){
            totalTranslate=translateX + initailtranslateltr;
        }else{
            totalTranslate=-(translateX + initailtranslatertr);

        }
        element.style.transform=`translateX(${totalTranslate}px)`;
    }
}
const line1=document.querySelector("#Line1");
const line2=document.querySelector("#Line2");
const line3=document.querySelector("#Line3");
const line4=document.querySelector("#line4");






setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,true,0.8);


let dtEle=document.querySelectorAll("dt");
dtEle.forEach((e)=>{
    e.addEventListener("click",()=>{
        const ddid=e.getAttribute('aria-controls');
        const ddElement=document.getElementById(ddid);
        const arrow=e.querySelectorAll("i")[0];
        ddElement.classList.toggle("hidden");
        arrow.classList.toggle("-rotate-180");
    })
   

})

window.addEventListener("scroll",function(){
    let triangle= document.querySelector(".go-hd");

    if(window.scrollY>=672 && window.scrollY<=13276){
       triangle.style.display="block";
    }
    else{
        triangle.style.display="none";
    }
    
})