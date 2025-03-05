//complete this code
class Rectangle {
	constructor(width,height){
		if(width<=0 || height<=0){
			throw new error("heigth and width are positive...")
		}
		this.width=width;
		this.height=height;
	}
		get width(){
			return this.width;
		}
		get height(){
			return this.height;
		}
		getArea(){
			return this.width * this.height
		}
	}


class Square extends Rectangle {
	constructor(side){
		if(side<=0){
			throw new error("side are positive...")
		}

		super(side,side)
	}
		getPerimeter(){
			return 4*this.width
		}
	}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

