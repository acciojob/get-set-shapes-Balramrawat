//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.heigth=height;
		if(width<=0 || heigth<=0){
			throw new error("heigth and width are positive...")
		}

		get width(){
			return this.width;
		}
		get heigth(){
			return this.heigth;
		}
		getarea(){
			return this.width * this.heigth
		}
	}
}

class Square extends Animal {
	constructor(side){
		if(side<=0){
			throw new error("side are positive...")
		}

		super(side,side)

		getPerimeter(){
			return 4*this.width
		}
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

