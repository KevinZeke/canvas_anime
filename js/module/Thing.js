define(["Canvas","Common"],function (Canvas,Common) {
	function Ane(context, num) {
		this.x = [];
		this.len = [];
		this.context = context;
		this.num = num||50;
	}

	Ane.prototype._init = function (gap) {
		if(!this.context) throw new Error("canvas context is not defined");
		if(!gap) gap = 20;
		for(let i = 0; i < this.num ; i++){
			this.x[i] = parseInt(i*gap+Common.rnd(20));
			this.len[i] = parseInt(200+Common.rnd(50));
		}
		return this;
	}
	Ane.prototype.draw = function (css) {
		css = Common.extendObj({strokeStyle:"purple",lineWidth:20,lineCap:"round"}, css);
		this._init(css.gap);
		let line = new Canvas.Line(this.context);
		line.css(css);
		for (var i = 0; i < this.num; i++) {
			line.drawPath([this.x[i], this.context.height], [this.x[i], this.context.height - this.len[i]]);
		}
		return this;
	}

	function Fruit(context, num) {
		this.pos = [];
		this.context = context;
		this.num = num||30;
	}

	Fruit.prototype._init = function () {
		for(let i = 0;i < this.num; i++){
			this.alive[i] = false;
		}
		return this;
	}
	Fruit.prototype.draw = function (ane,image) {
		this.image = image;
		for(let i = 0;i < this.num; i++){
			let aneId = parseInt(Common.rnd(ane.x.length));
			let posObj = {x: ane.x[aneId], y: this.context.height - ane.len[aneId]};
			this.pos.push(posObj);
			this.context.img(image, posObj.x, posObj.y, 10, 10);
		}
		return this;
	}
	Fruit.prototype.move = function (speed) {
		this.context.clearAll(); 
		for(let i = 0;i < this.num; i++){
			let offsetX = 0;
			let offsetY = -0.01*speed * (i%2?2:1);
			this.context.img(this.image, this.pos[i].x+=offsetX, this.pos[i].y+=offsetY, 10, 10);
		}
	}
 
	return {
		ane:function (context,num) {
			return new Ane(context, num);
		},
		fruit:function (context,num) {
			return new Fruit(context, num);
		}
	}
})