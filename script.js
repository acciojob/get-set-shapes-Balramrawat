//complete this code
class Rectangle {
	constructor(width,height){
		// if(width<=0 || height<=0){
		// 	throw new error("heigth and width are positive...")
		// }
		this._width=width;
		this._height=height;
	}
		get width(){
			return this._width;
		}
		get height(){
			return this._height;
		}
		getArea(){
			return this._width * this._height
		}
	}


class Square extends Rectangle {
	constructor(side){
		// if(side<=0){
		// 	throw new error("side are positive...")
		// }

		super(side,side)
	}
		getPerimeter(){
			return 4*this._width
		}
	}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); 
console.log(rectangle.height); 
console.log(rectangle.getArea()); 

const square = new Square(7);
console.log(square.width); 
console.log(square.height); 
console.log(square.getArea()); 
console.log(square.getPerimeter()); 

