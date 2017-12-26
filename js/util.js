define([
	"Canvas",
	"Thing",
	"image!./img/background.jpg",
	"image!./img/fruit.png",
	"GameLoop"],function (Canvas,Thing,background,fruit,GameLoop) {
	
	let ctx1 = Canvas.init("canvas1");
	let ctx2 = Canvas.init("canvas2");

	let ane;
	let fruits;

	function bginit() {
		let bgImg = new Image();
		ctx1.bg(background);
		ane = Thing.ane(ctx1);
		ane.draw({lineWidth:20, stroleStyle:"#3b154e", globalAlpha:0.6});
	}

	function initFruits(){
		fruits = Thing.fruit(ctx2);
		fruits.draw(ane,fruit);
		GameLoop.animate(function(delta){
			fruits.move(delta);
		});
	}

	ctx2.ctx.beginPath();
	ctx2.ctx.strokeStyle = "#fff";
    var circle = {
        x : 100,    //圆心的x轴坐标值
        y : 100,    //圆心的y轴坐标值
        r : 50      //圆的半径
    };
    //沿着坐标点(100,100)为圆心、半径为50px的圆的逆时针方向绘制弧线
    ctx2.ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI / 2, true);    
    //按照指定的路径绘制弧线
    ctx2.ctx.stroke();

	return {
		bginit, initFruits
	}
})
