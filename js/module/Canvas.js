define(function () {

	function img(ctx,image,x,y,w,h) {
		ctx = ctx.ctx? ctx.ctx : ctx;
		ctx.drawImage(image,x,y,w,h);
	}
	
	function Context(id) {
		let dom = document.getElementById(id);
		if(dom){
			this.ctx = dom.getContext('2d');
			this.width = dom.width;
			this.height = dom.height;
		}
	}

	Context.prototype.img = function (image,x,y,w,h) {
		if(this.ctx)
			img(this.ctx,image,x,y,w,h);
	}

	Context.prototype.bg = function(image){
		if (this.ctx)
			img(this.ctx,image,0,0,this.width,this.height);
	}

	Context.prototype.clearAll = function () {
		this.clear(0, 0, this.width, this.height);
	}

	Context.prototype.clear = function (x,y,w,h) {
		this.ctx.clearRect(x,y,w,h); 
	}

	function Line(context) {
		if(!context) throw new Error("canvas context is not defined");
		this.context = context.ctx?context.ctx:context;
	}

	Line.prototype.drawPath = function () {
		this.context.beginPath();
		if(arguments.length > 0){
			this.context.moveTo(arguments[0][0],arguments[0][1]);
			for(let i = 1; i < arguments.length; i++){
				this.context.lineTo(arguments[i][0] , arguments[i][1]);
			}
		}
		this.context.stroke();
		return this;
	}

	Line.prototype.css = function (style) {
		for(var k in style){
			this.context[k] = style[k];
		}
		return this;
	}
	
	Line.prototype.close = function () {
		this.context.closePath();
		return this;
	}


	return {
		init:function (id) {
			return new Context(id);
		},
		img,
		Line
	}
});