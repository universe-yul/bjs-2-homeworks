// Задача 1

function parseCount(value) {
	
	let res = Number.parseInt(value);
	if (Number.isNaN(res)) {
		throw new Error('Невалидное значение');
	}

	return res;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(e) {
		return e;
	}
}


//parseCount("123"); // 123;
//parseCount("012"); // 12;
//parseCount("ыфва"); //"Невалидное значение";
//validateCount("56"); // 56;
//validateCount("ыфва"); //"Невалидное значение"
//validateCount("ыфва");// "parseCount"

//Задача 2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

	if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.c + this.b) < this.a)) {
		
		throw new Error('Треугольник с такими сторонами не существует');
	} 
}
	getPerimeter() {
		let p = (this.a + this.b + this.c);
		this.p = p;
	
		return this.p;
	}

	getArea () {
		let p = this.getPerimeter() / 2
		let square = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
		this.square = square;

		return this.square;
	}
}

function getTriangle(a, b, c) {
	 try { 
	 	return new Triangle(a,b,c);

	} catch(e) {
		  return {
		  	getArea() {
		  		return 'Ошибка! Треугольник не существует';
		  	},
		  	
		  	getPerimeter() {
		  		return 'Ошибка! Треугольник не существует';
			}
		}
	}	
}




/*const triangle = new Triangle(6,10,15);

console.log(triangle.getPerimeter());//(12);
console.log(triangle.getArea()); //(4.899);*/
        
         
const triangle = new Triangle(6,10,15);
console.log(triangle.getPerimeter());//(31);
console.log(triangle.getArea()); //(20123);
        	       
 
/*console.log(new Triangle(1,3,100))
console.log(new Triangle(100,3,10))
console.log(new Triangle(1,300,10))*/


//console.log(getTriangle(2,5,5)); 