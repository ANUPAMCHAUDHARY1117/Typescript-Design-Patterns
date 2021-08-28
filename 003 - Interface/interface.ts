interface Summary {
	summary(): string;
}

interface Vehicle extends Summary {
	name: string;
	year: number;
	broken: boolean;
}

const oldCivic = {
	name: 'Civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `${name}`;
	},
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`Name - ${vehicle.name}
    Year - ${vehicle.year}
    Broken - ${vehicle.broken}
    `);
};

const printVehicleDestructured = ({
	name,
	year,
	broken,
}: {
	name: Vehicle['name'];
	year: Vehicle['year'];
	broken: Vehicle['broken'];
}) => {
	console.log(`${name} ${year} ${broken}`);
};

printVehicle(oldCivic);
