interface Vehicle {
	readonly brand: string;
	readonly makeYear: number;
	getBrandName(): string;
}

class Car implements Vehicle {
	brand: string;
	makeYear: number;
	color: string = 'red';
	constructor(brand: String, makeYear: number) {}

	getBrandName() {
		return this.brand;
	}
}

const car = new Car('Tata', 2005);
car.color = 'blue';
car.brand = 'Tesla';
