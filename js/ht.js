 // 代码雨
 window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    // 浏览器宽高
    var W = window.screen.availWidth;
    var H = window.screen.availHeight;
    canvas.width = W;
    canvas.height = H;
    var fontSize = 18;
    var colunms = Math.floor(W / fontSize);
    // 坐标
    var coordinate = [];
    for (var i = 0; i < colunms; i++) {
        coordinate.push(0);
    }
    var str = "javascript html5 canvas";
    function draw() {
        // 背景色
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        context.font = "800 " + fontSize + "px  宋体";
        // 字体颜色
        context.fillStyle = "#01fef5";
        for (var i = 0; i < colunms; i++) {
            var index = Math.floor(Math.random() * str.length);
            var x = i * fontSize;
            var y = coordinate[i] * fontSize;
            context.fillText(str[index], x, y);
            if (y >= canvas.height && Math.random() > 0.88) {
                coordinate[i] = 0;
            }
            coordinate[i]++;
        }
    }

    function randColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    draw();
    setInterval(draw, 30);
};