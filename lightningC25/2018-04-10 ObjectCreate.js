// Use Object.create() in the following function
const CarFactory = (make, model, yearManufactured) => {
	return Object.create({}, {
		make: {
			enumerable: true,
			// writable: true,
			value: make
		},
		model: {
			enumerable: true,
			// writable: true,
			value: model
		},
		yearManufactured: {
			enumerable: true,
			// writable: true,
			value: yearManufactured
		}
	})

}


const malibu = CarFactory('Chevy', 'Malibu', 1987)
console.log(malibu)

for (let key in malibu) {
	console.log(key)
}

/*
This should be the output in your console

{
    make: "Chevy",
    model: "Malibu",
    yearManufactured: 1987
}
*/