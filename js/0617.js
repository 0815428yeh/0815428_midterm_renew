function aa() {
    var timer = null;
    var oDiv = document.getElementById('div1');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
    var speed = 2;
    function move() {
        if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
            oUl.style.left = 0;
        }
        if (oUl.offsetLeft > 0) {
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
        }
        oUl.style.left = oUl.offsetLeft + speed + 'px';
    }
    timer = setInterval(move, 30);
    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(move, 30);
    }
    var oA = document.getElementsByTagName('a');
    oA[0].onmouseover = function() {
        speed = -2;
    };
    oA[1].onmouseover = function() {
        speed = 2;
    };
}
aa();