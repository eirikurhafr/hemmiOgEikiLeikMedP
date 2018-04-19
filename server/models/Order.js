function Order(input) {
	console.log(input);
	var o2 = JSON.parse(input);
	//INFO
	this.telephone 	= o2.telephone;	// string
	this.name 		= o2.name // string
	this.address 	= o2.address // string
	this.city 		= o2.city // string
	this.postalCode = o2.postalCode // number
	this.pickup		= o2.pickup // boolean
	// ORDER
	this.pizzas 	= o2.pizzas; 	// Array
	this.offers		= o2.offers;	// Array
};

module.exports = Order;
