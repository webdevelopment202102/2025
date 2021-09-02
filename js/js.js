/*global alert, console, myFunction, functiontoptop, downfunc, ontop */
/*


focusing on loooop please 
1-there is no = 
2-you have to wright like this lilili[u]
3- change between the p and u and j and t 


*/

/*mobile-navbar*/

var simpleclick = document.querySelector(".simplenonty"),
    simpleclickh1 = document.querySelector(".simplenonty h1"),
    simpleclickspans = document.querySelector(".simplenonty .spans"),
    navlist =  document.querySelector(".ulist");

function simple() {
    'use strict';
    simpleclick.onclick = function () {
        navlist.classList.toggle("leftclass");
    };
}

simple();



/*mobile-navbar*/









/*scrollbuttons-of-navbar*/

var navliiiiiii  = Array.from(document.querySelectorAll(".mainnav ul li"));

function scroll() {
    
    'use strict';
    
    navliiiiiii[0].onclick = function num1() {
        
        removecolor();
        
        document.body.scrollTop = 0;/*safari*/
    
        document.documentElement.scrollTop = 0;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    navliiiiiii[1].onclick = function num1() {
        
        removecolor();
        
        
        document.body.scrollTop = 1200;/*safari*/
    
        document.documentElement.scrollTop = 1200;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    navliiiiiii[2].onclick = function num1() {
        
        removecolor();
        
        
        document.body.scrollTop = 2000;/*safari*/
    
        document.documentElement.scrollTop = 2000;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    navliiiiiii[3].onclick = function num1() {
        
        removecolor();
        
        
        document.body.scrollTop = 5800;/*safari*/
    
        document.documentElement.scrollTop = 5800;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    navliiiiiii[4].onclick = function num1() {
        
        removecolor();
        
        
        document.body.scrollTop = 7400;/*safari*/
    
        document.documentElement.scrollTop = 7400;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    navliiiiiii[5].onclick = function num1() {
        
        removecolor();
        
        
        document.body.scrollTop = 8200;/*safari*/
    
        document.documentElement.scrollTop = 8200;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    navliiiiiii[6].onclick = function num1() {
        
        removecolor();
        
        
        document.body.scrollTop = 9800;/*safari*/
    
        document.documentElement.scrollTop = 9800;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
       
    
}

scroll();

function removecolor() {
    'use strict';
    navliiiiiii.forEach(function (itms) {
        itms.classList.remove("colr");
    });
}

window.onscroll = function () {
    
    'use strict';
    /*reguler navbar*/ /*reguler navbar*/ /*reguler navbar*/ /*reguler navbar*/ /*reguler navbar*/
    if (document.body.scrollTop <= 800) {
        removecolor();
        navliiiiiii[0].classList.add('colr');
    }
    if (document.body.scrollTop >= 800) {
        removecolor();
        navliiiiiii[1].classList.add('colr');
    }
    if (document.body.scrollTop >= 1500) {
        removecolor();
        navliiiiiii[2].classList.add('colr');
    }
    if (document.body.scrollTop >= 5500) {
        removecolor();
        navliiiiiii[3].classList.add('colr');
    }
    if (document.body.scrollTop >= 6500) {
        removecolor();
        navliiiiiii[4].classList.add('colr');
    }
    if (document.body.scrollTop >= 7500) {
        removecolor();
        navliiiiiii[5].classList.add('colr');
    }
    if (document.body.scrollTop >= 9000) {
        removecolor();
        navliiiiiii[6].classList.add('colr');

    }
     /*reguler navbar*/ /*reguler navbar*/ /*reguler navbar*/ /*reguler navbar*/ /*reguler navbar*/
    
    
    
     /*beside navbar*/ /*beside navbar*//*beside navbar*//*beside navbar*//*beside navbar*//*beside navbar*/
    if (document.body.scrollTop <= 800) {
        removecolor2();
        besidealllilili[0].classList.add('colr');
    }
    if (document.body.scrollTop >= 1200) {
        removecolor2();
        besidealllilili[1].classList.add('colr');
    }
    if (document.body.scrollTop >= 1500) {
        removecolor2();
        besidealllilili[2].classList.add('colr');
    }
    if (document.body.scrollTop >= 9000) {
        removecolor2();
        besidealllilili[3].classList.add('colr');
    }
    if (document.body.scrollTop >= 12000) {
        removecolor2();
        besidealllilili[4].classList.add('colr');
    }
    if (document.body.scrollTop >= 13000) {
        removecolor2();
        besidealllilili[5].classList.add('colr');
    }
    if (document.body.scrollTop >= 18000) {
        removecolor2();
        besidealllilili[6].classList.add('colr');

    }
    /*beside navbar*//*beside navbar*//*beside navbar*//*beside navbar*//*beside navbar*//*beside navbar*/
    if (document.body.scrollTop >= 800) {
        simpleclick.classList.add("back");
    } else {
        simpleclick.classList.remove("back");
    }
    
    scrollontop();
    
    myFunction();
};


/*beside-navbar************************************************************************************************/


var besidealllilili  = Array.from(document.querySelectorAll(".ulist ul li"));

function scroll222() {
    
    'use strict';
    
    besidealllilili[0].onclick = function num1() {
        
        removecolor2();
        
        document.body.scrollTop = 0;/*safari*/
    
        document.documentElement.scrollTop = 0;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    besidealllilili[1].onclick = function num1() {
        
        removecolor2();
        
        
        document.body.scrollTop = 1200;/*safari*/
    
        document.documentElement.scrollTop = 1200;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    besidealllilili[2].onclick = function num1() {
        
        removecolor2();
        
        
        document.body.scrollTop = 2500;/*safari*/
    
        document.documentElement.scrollTop = 2500;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    besidealllilili[3].onclick = function num1() {
        
        removecolor2();
        
        
        document.body.scrollTop = 9500;/*safari*/
    
        document.documentElement.scrollTop = 9500;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    besidealllilili[4].onclick = function num1() {
        
        removecolor2();
        
        
        document.body.scrollTop = 13000;/*safari*/
    
        document.documentElement.scrollTop = 13000;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    besidealllilili[5].onclick = function num1() {
        
        removecolor2();
        
        
        document.body.scrollTop = 15000;/*safari*/
    
        document.documentElement.scrollTop = 15000;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
    
    besidealllilili[6].onclick = function num1() {
        
        removecolor2();
        
        
        document.body.scrollTop = 18000;/*safari*/
    
        document.documentElement.scrollTop = 18000;/*CHROOME*/
        
        this.classList.add("colr");
        
    };
       
    
}

scroll222();

function removecolor2() {
    'use strict';
    besidealllilili.forEach(function (itms) {
        itms.classList.remove("colr");
    });
}

/*beside-navbar************************************************************************************************/


/*scrollbuttons-of-navbar*/










/*aside*/

var div1 = document.querySelector(".aside"),
    
    div2 = document.querySelector(".have-1");

div1.onclick = function () {
    'use strict';
    this.classList.toggle("bottommm");
    
};

/*aside*/












/*reload page */

function reload() {
    'use strict';
    window.location.reload();
}

/*reload page */











/*nav background*/

var navava = document.querySelector(".mainnav"),
    
    haveh1 = document.querySelector(".mainnav h1"),
    
    lilili = document.querySelectorAll(".mainnav ul li"),
    
    aside  = document.querySelector(".have-1 i "),
    
    asideiiii  = document.querySelectorAll(".have-2 .inhave i");

function myFunction() {
    'use strict';
    if (document.body.scrollTop > 990 || document.documentElement.scrollTop > 900) {
        
        navava.classList.add("backgroundonit");
        
        haveh1.classList.add("color-new");
        
        var u;
        
        for (u = 0; u < lilili.length; u = u + 1) {
            
            lilili[u].classList.add("color-new");
        }
        
        aside.classList.add("color-new");
        
        var o;
        
        for (o = 0; o < asideiiii.length; o = o + 1) {
            
            asideiiii[o].classList.add("color-new");
        }
        
        
    } else {
        
        navava.classList.remove("backgroundonit");
        
        haveh1.classList.remove("color-new");
        
        var p;
        
        for (p = 0; p < lilili.length; p = p + 1) {
            
            lilili[p].classList.remove("color-new");
        }
        
        aside.classList.remove("color-new");
        
        var y;
        
        for (y = 0; y < asideiiii.length; y = y + 1) {
            
            asideiiii[y].classList.remove("color-new");
        }
        
    }
}

/*nav background*/









/*goingdown*/

function scroll12(x, y) {
    
    'use strict';
    
    window.scrollBy(x, y);
}

/*goingdown*/









/*to make the paragrah up*/

var araibc = document.querySelectorAll(".linka"),
    
    paragraph = document.querySelectorAll(".pepe");

function functionenferno() {
    
    'use strict';
    
    var w;
    
    for (w = 0; w < araibc.length; w = w + 1) {
        
        /* <= makeing a lots of proplems /// just wright this <*/
        
        araibc[w].onclick = function func() {
            
            this.parentNode.querySelector("p").classList.toggle("paddingtop");
            
        };
    }
       
/*explain
[1] creating a queryselectorall to the classs
[2] creating function cross among the clikc buttons by ({[for]}) 
[3] onclick inside the for loop that 
    will make the a function cross among the p style 
    and change it
*/
}

functionenferno();

/*to make the paragrah up*/










/*scroll*/
/*    1- get the button     */
var mybutton = document.getElementById('scrollTopppp');

/*    2-when the user scroll to any pixels    */

function scrollontop() {
    'use strict';
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.classList.remove("opacity0");
        mybutton.classList.add("opacity1");
        
    
    } else {
        mybutton.classList.remove("opacity1");
        mybutton.classList.add("opacity0");
    }
}

/*    3- when the user scroll to any pixels    */

function goupupupup() {
    
    'use strict';
    
    document.body.scrollTop = 0;/*safari*/
    
    document.documentElement.scrollTop = 0;/*CHROOME*/
    
}
/*scroll*/







/*acord*/
    
var acordides = document.querySelectorAll(".acord-link"),
    faplus = document.querySelectorAll(".acord-iteam .acord-link .fa-plus"),
    faminus = document.querySelectorAll(".acord-iteam .acord-link .fa-minus"),
    answer = document.querySelectorAll(".answer");

function removeacord() {
    "use strict";
    
    answer.forEach(function (item) {
        item.classList.remove("maxheight");
    });
}

function noneblock1() {
    "use strict";
    faminus.forEach(function (item1) {
        item1.classList.remove("displayblock1");
    });
}

function noneblock2() {
    "use strict";
    faplus.forEach(function (item) {
        item.classList.remove("displaynone2");
    });
}

function acording() {
    'use strict';

    var e;
    for (e = 0; e < acordides.length; e = e + 1) {
        /*loop into the acordeies iteams when i click it */
        acordides[e].onclick = function colc() {
            removeacord();
            this.parentNode.querySelector("div").classList.toggle("maxheight");
            noneblock1();
            this.querySelector(".fa-minus").classList.add("displayblock1");
            noneblock2();
            this.querySelector(".fa-plus").classList.add("displaynone2");
        };
    }
    
}

acording();


/*acord*/


/*count-up*/

var countup = Array.from(document.querySelectorAll(".count .countdown .clash6"));

var coun0 = setInterval(function counttimer() {
        'use strict';
    /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/
        countup[0].innerHTML = ++countup[0].innerHTML;
        /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/

       
    }, 10);

var coun1 = setInterval(function counttimer() {
        'use strict';

        
        /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/
        countup[1].innerHTML = ++countup[1].innerHTML;
        /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/
        
    }, 50);

var coun2 = setInterval(function counttimer() {
        'use strict';
          /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/
        countup[2].innerHTML = ++countup[2].innerHTML;
        /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/

    }, 100);

var coun3 = setInterval(function counttimer() {
        'use strict';
        
        /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/
        countup[3].innerHTML = ++countup[3].innerHTML;
        /*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*//*الزائد بتتكتب مرتين قبل الحاجة الى هاتتزود*/
    }, 150);



var ackewer = setInterval(function () {
    'use strict';
    clearInterval(coun0);
    clearInterval(coun1);
    clearInterval(coun2);
    clearInterval(coun3);
 
}, 10000);
/*count-up*/




/*portfoliol*/
var port = Array.from(document.querySelectorAll(".portfolio .lili ul li"));


function portfunc() {
    
    'use strict';
    
    var q;
    for (q = 0; q < port.length; q = q + 1) {
        port[q].onclick = function () {
            removelicolor();
            this.classList.add("activecolor");
        };
    }
}

portfunc();

function removelicolor() {
    
    'use strict';
    
    port.forEach(function (portiteams) {
        
        portiteams.classList.remove("activecolor");
        
    });
}


/************************************************************************************************/
var imgs = Array.from(document.querySelectorAll(".images .colese"));

function clicknone() {
    
    'use strict';
    
    var b;
        
        for (b = 0; b < imgs.length; b = b + 1) {
            
            imgs[b].classList.remove("none");
        }
    
    port[0].onclick = function () {
                
        var x;
        
        for (x = 0; x < imgs.length; x = x + 1) {
            
            imgs[x].classList.remove("none");
        }
        
    };
    port[1].onclick = function () {
                
        removeimages();
        imgs[0].classList.remove("none");
        imgs[1].classList.remove("none");
        
        
    };
    port[2].onclick = function () {
                
        removeimages();
        imgs[2].classList.remove("none");
        imgs[3].classList.remove("none");
        
    };
    port[3].onclick = function () {
                
        removeimages();
        imgs[4].classList.remove("none");
        imgs[5].classList.remove("none");
        
    };
    port[4].onclick = function () {
                
        removeimages();
        imgs[6].classList.remove("none");
        imgs[7].classList.remove("none");
        imgs[8].classList.remove("none");
        
    };
    
}

function removeimages() {
    
    'use strict';
    
    imgs.forEach(function (imgsiteams) {
        imgsiteams.classList.add("none");
        console.log("asdasd");
    });
}

clicknone();
/************************************************************************************************/

/*portfoliol*/


