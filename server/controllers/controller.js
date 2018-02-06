module.exports = {
    addRefuel: (req, res) => {
        const { vehicleId, date, fuelBrand, octane, location, gallons, pricePerGallon, cost, odometer, notes } = req.body;
        let db = req.app.get('db');
        db.add_refuel([vehicleId, date, fuelBrand, octane, location, gallons, pricePerGallon, cost, odometer, notes]).then(newRefuel => {
            res.status(200).send(newRefuel)
        })
    },
    getVehicles: (req, res) => {
        let db = req.app.get('db');
        db.get_vehicles([req.params.userId]).then(vehicles => {
            res.status(200).send(vehicles)
        })
    }
}