class Rectangle{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	static firstName = 'Yes';
	static lastName = 'No';

	//Getter
	get area(){
		return this.calcArea();
	}

	//Method
	calcArea(){
		return this.width * this.height;
	}
}

const rectangle_1 = new Rectangle(200, 200);
console.log('rectangle_1.calcArea(): ', rectangle_1.calcArea());
console.log('rectangle_1.area: ', rectangle_1.area);

const rectangle_2 = new Rectangle(10, 10);
console.log('rectangle_2.firstName: ', rectangle_2.firstName);
console.log('rectangle_2.lastName: ', rectangle_2.lastName);