function draw_function() {

    var allAns = document.getElementsByClassName("answer-item");
    var x_ans = [];
    var y_ans = [];
    var r_ans = [];
    var check = [];
    var xi=0;
    var yi=0;
    var ri=0;
    var checki=0;
    for (var j = 0; j < allAns.length; j++) {
        if(j%4==0) {
            x_ans[xi]=parseFloat(allAns[j].innerHTML);
            xi++;
        }
        if(j%4==1) {
            y_ans[yi]=parseFloat(allAns[j].innerHTML);
            yi++;
        }
        if(j%4==2) {
            r_ans[ri]=parseFloat(allAns[j].innerHTML);
            ri++;

        }
        if(j%4==3) {
            check[checki]=allAns[j].innerHTML;
            checki++;
        }
    }
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var min_element = width > height ? height : width;
    min_element /= 2;
    var radius_element = document.getElementById("radius");
    var radius = radius_element.value;

    ctx.beginPath();
    _draw_xy(ctx, width, height);


    if (radius == "") {
        radius = 0;
        var left_m = ((min_element / 10)*1.5); //15%
        ctx.font = "30px Arial";
        ctx.fillStyle = "blueviolet";
        ctx.fillText("Радиус не установлен",width/2-(left_m*4), height/2 - (min_element / 10));
        ctx.fill();
    } else {
        radius *= ((min_element / 10)*1.5);
        ctx.fillStyle = "blueviolet";
        ctx.font = "10px Arial";
        ctx.fillText("R/2",width/2+radius/2, height/2);
        ctx.fill();
        ctx.fillText("R/2",width/2-radius/2, height/2);
        ctx.fill();
        ctx.fillText("R/2",width/2, height/2-radius/2);
        ctx.fill();
        ctx.fillText("R/2",width/2, height/2+radius/2);
        ctx.fill();
        ctx.fillText("R",width/2+radius, height/2);
        ctx.fill();
        ctx.fillText("R",width/2-radius, height/2);
        ctx.fill();
        ctx.fillText("R",width/2, height/2-radius);
        ctx.fill();
        ctx.fillText("R",width/2, height/2+radius);
        ctx.fill();
    }

    ctx.fillStyle = "blue";
    ctx.moveTo(width/2, height/2);
    ctx.arc(width/2, height/2, radius/2, -Math.PI, -Math.PI/2);
    ctx.rect(width/2 - radius, height/2, radius, radius);

    ctx.moveTo(width/2, height/2 + radius/2);
    ctx.lineTo(width/2 + radius/2, height/2);
    ctx.lineTo(width/2, height/2);
    ctx.fill();


    var pix_to_digit = ((min_element / 10)*1.5); //15%

    var x_dig;

    var y_dig;



    ctx.fillStyle = "blue";
    ctx.stroke();
    ctx.fill();

    if (radius != ""){

    }

    var xr;
    var yr;
    for (var j = 0; j < allAns.length/4; j++){
        ctx.fillStyle = "red";
        xr=x_ans[j]/r_ans[j];
        yr=y_ans[j]/r_ans[j];
        ctx.fillRect(radius*xr+width/2-1.5,-radius*yr+height/2-1.5,3,3);
    }

}





var bt;
function val(val) {
    if(bt!=undefined){
        bt.style.background=val.style.background;
    }
    val.style.background='blueviolet';
    bt=val;
    document.getElementById("X").value=bt.value;
}


var btR;
function valR(val) {
    if(btR!=undefined){
        btR.style.background=val.style.background;
    }
    val.style.background='green';
    btR=val;
    document.getElementById("radius").value=btR.value;
    return redraw();
}

function _draw_xy(ctx, width, height) {
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);

    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
}

function redraw() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_function();
    return true;
}


function change_Y(obj) {
    return _validate_changing(obj, -5, 3);
}

function _validate_changing(object, min_value, max_value) {
    var parameter = Number(object.value);

    if (isNaN(parameter) || object.value == "") {
        return false;
    }
    else {
        parameter = parseFloat(parameter.toFixed(3));
        if (parameter >= max_value) {
            parameter = max_value - 0.001;
        }
        if (parameter <= min_value) {
            parameter = min_value + 0.001;
        }
        object.value = parameter;
    }
    return true;
}

function input_Y(val) {
    return _validate_input(val, -5, 5);
}

function _validate_input(new_value, min_value, max_value) {
    var parameter = Number(new_value);

    if (isNaN(parameter)) {
        return false;
    }
    parameter = parseFloat(parameter.toFixed(3));
    return true;
}

$(window).load(function () {
    $('input[type="text"]').on('keypress', function() {
        var keys = ['0','1','2','3','4','5','6','7','8','9','.','-'];
        if (event.key == '.' && this.value == "") {
            this.value = 0;
        }
        if (event.key == '.' || event.key == '-') {
            if (this.value.indexOf(event.key) > -1) {
                //already have a dot or minus
                return false
            }
        }
        return keys.indexOf(event.key) > -1
    })
});

$(window).load(function () {
    $('input[type="text"]').on('paste', function() {
        var paste_data = Number(event.clipboardData.getData('text/plain'));
        return !isNaN(paste_data);
    })
});

$(window).load(function () {
    $('input[type="checkbox"]').on('change', function() {
        $('input[type="checkbox"]').not(this).prop('checked', false);
    });
});

$(window).load(function () {
    document.addEventListener('change', function(e){
        check_submit_avalible();
    })
});

function check_submit_avalible() {
    var X = document.getElementById("X");
    var X_tip = X.value != "";
    var Y = document.getElementById("Y");
    var Y_tip = Y.value != "";
    var R = document.getElementById("radius");
    var R_tip = R.value != "";

    var sub_but = document.getElementById("magic_button");
    if (X_tip && Y_tip && R_tip) {
        sub_but.disabled = false;
    } else {
        sub_but.disabled = true;
    }
}



$(window).load(function () {

    $('canvas').on('click', function (e) {
        e.preventDefault();
        var radius_element = document.getElementById("radius");
        var radius = radius_element.value;
        if (radius == "") {
            alert("Please, set R parameter");
        } else {
            var canvas = document.getElementById("myCanvas");
            var rect = canvas.getBoundingClientRect();

            var x = event.pageX - rect.left,
                y = event.pageY - rect.top;

            var width = canvas.width;
            var height = canvas.height;
            var min_element = width > height ? height : width;
            min_element /= 2;
            var pix_to_digit = ((min_element / 10)*1.5); //15%

            var x_dig = (x-width/2) / pix_to_digit;
            var y_dig = -(y-height/2) / pix_to_digit;

            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "red";
            ctx.fillRect(x-1.5,y-1.5,3,3);
            var answer = document.getElementById("Answer");


            $('<form action="controller" method="POST">' +
                '<input type="number" name="X" value="' + x_dig + '">' +
                '<input type="number" name="Y" value="' + y_dig + '">' +
                '<input type="number" name="R" value="' + radius + '">' +
                '</form>')
                .appendTo($(document.body))
                .submit();
        }
    });
});

