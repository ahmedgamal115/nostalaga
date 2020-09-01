var save =localStorage.getItem("colorbar");
if(save !== null){
    document.documentElement.style.setProperty("--main-color",save);
    document.querySelectorAll(".color-bar li").forEach(element =>{
        element.classList.remove("act");
        if(element.dataset.color === save){
            element.classList.add("act");
        }
    });
}
var randombackground = true;
var randomstorge = localStorage.getItem("randomstorge");
if(randomstorge !== null){
    if(randomstorge === 'true'){
        randombackground = true;
    }else{
        randombackground = false;
    }
        document.querySelectorAll(".span-random span").forEach(element =>{
            element.classList.remove("active");
        });
        if(randomstorge === 'true'){
            document.querySelector(".span-random .yes").classList.add("active");
        }else{
            document.querySelector(".span-random .no").classList.add("active");
        }
    }
    
var IntervalControll;
// select span 
const random = document.querySelectorAll(".span-random span");
// loop on span 
random.forEach(span => {
    span.addEventListener('click',(e) => {

            e.target.parentElement.querySelectorAll(".active").forEach(element =>{
                element.classList.remove("active");
            if(e.target.dataset.background === 'no'){
                document.querySelector(".landing-page").style.backgroundImage = 'url("img/1.jpg")'
            }
            });
            e.target.classList.add("active");
            if(e.target.dataset.background === 'yes'){
                randombackground = true;
                intervelbk();
                localStorage.setItem("randomstorge",true);
            }else{
                randombackground = false;
                clearInterval(IntervalControll);
                localStorage.setItem("randomstorge",false);
            }
    })
    
});

document.querySelector(".Nav-bar").onclick =function(){
    this.classList.toggle("activ");
    document.querySelector('.list').classList.toggle("on");
};
document.querySelectorAll('.list li a').forEach( a =>{
    a.addEventListener('click',(e)=>{
        document.querySelector(".Nav-bar").classList.toggle("activ");
        document.querySelector('.list').classList.toggle("on");
    });
});


document.querySelector(".fa-cog").onclick = function (){
    this.style.visibility= "hidden";
    document.querySelector(".sitting-box").classList.toggle("open");
};
document.querySelector(".but-Done").onclick = function(){
    document.querySelector(".fa-cog").style.visibility= "visible";
    document.querySelector(".sitting-box").classList.toggle("open");
}
// select li 
const colorbar = document.querySelectorAll(".color-bar li");
// loop on li 
colorbar.forEach(li => {
    li.addEventListener('click',(e) => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("colorbar",e.target.dataset.color);
            e.target.parentElement.querySelectorAll(".act").forEach(element =>{
                element.classList.remove("act");
            });
            e.target.classList.add("act");
    })
    
});
// select landing page
var layout = document.querySelector('.landing-page');
// array of img
var imgesArray =["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
function intervelbk(){
    if(randombackground === true){
    // change image in time
IntervalControll = setInterval(function(){
// random number
    var rondom = Math.floor(Math.random()*imgesArray.length); 
// set image
    layout.style.backgroundImage = 'url("img/'+imgesArray[rondom]+'")';
}
    ,5000)
}
}
intervelbk();

var ourskillspage = document.querySelector(".skills-box");
var aboutus = document.querySelector(".About-box");
window.onscroll = function(){
    var skilloffsetTop = ourskillspage.offsetTop;
    var skilloffsetHeight = ourskillspage.offsetHeight;

    // about Offset Top
    var aboutOffsetTop = aboutus.offsetTop;
    // about offset Height
    var aboutoffsetHeight = aboutus.offsetHeight;
    //window height
    var windowheight = this.innerHeight;
    //window scrollTop
    var windowscrollTop = this.pageYOffset;
    if(windowscrollTop > (aboutOffsetTop + aboutoffsetHeight - windowheight)){
        document.querySelector(".About-box .img-box img").style.filter = 'grayscale(0%)';
        document.querySelector(".About-box .info p").style.opacity = '1';
    }

    if(windowscrollTop > (skilloffsetTop + skilloffsetHeight - windowheight)){
        var spanskills = document.querySelectorAll(".skills-box .prograss span");
        spanskills.forEach(skill =>{
            skill.style.width = skill.dataset.pro;
        });
    }
};
// start galary section
    var pop = document.querySelectorAll(".imge-box img");
    pop.forEach(img =>{
        img.addEventListener('click',(e)=>{
            // create layout for pop imega when click
            var popelment = document.createElement('div');
            //crate class for pop layout
            popelment.className = 'popcover';
            //insert pop layout to body
            document.body.appendChild(popelment);
            //create dive in pop to insert image
            var popbox = document.createElement("div");
            //create class for div of image
            popbox.className = 'pop-box';
            //check if image has alt or no 
            if(img.alt !== ""){
                // create contant text 
                var altpop = document.createElement('h2');
                //create text value 
                var textpop = document.createTextNode(img.alt);
                //insert text in contant h2
                altpop.appendChild(textpop);
                //insert altpop in popbox
                popbox.appendChild(altpop);
            }
            //create image element
            var popimg = document.createElement("img");
            //take src from image
            popimg.src = img.src;
            //insert image in div image pop
            popbox.appendChild(popimg);
            //insert image pop to body
            document.body.appendChild(popbox);
            //create button for closs pop
            var buttonpop = document.createElement('div');
            //create class for buttonn pop
            buttonpop.className = "buttonn-pop";
            //create placeholder of button
            var buttontextpop = document.createTextNode("X");
            //insert value in button
            buttonpop.appendChild(buttontextpop);
            //insert buttonpop in popbox
            popbox.appendChild(buttonpop);
        });
    });
    //button to close pop-box
    document.addEventListener('click',(e) =>{
        if(e.target.className == 'buttonn-pop'){
            e.target.parentNode.remove();
            document.querySelector('.popcover').remove();
        }
    });
// end galary section

document.querySelectorAll('.bublle .bublle-con').forEach(bublle =>{
    this.addEventListener('click',(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
