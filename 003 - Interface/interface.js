var oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "" + this.name;
    }
};
var printVehicle = function (vehicle) {
    console.log("Name - " + vehicle.name + "\n    Year - " + vehicle.year + "\n    Broken - " + vehicle.broken + "\n    ");
};
var printVehicleDestructured = function (_a) {
    var name = _a.name, year = _a.year, broken = _a.broken;
    console.log(name + " " + year + " " + broken);
};
printVehicle(oldCivic);
