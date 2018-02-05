module.exports = {
    addRefuel: (req, res) => {
        const { vehicleId, date, fuelBrand, octane, location, gallons, pricePerGallon, cost, odometer, notes } = req.body;
        let db = req.app.get('db');
        db.add_refuel([vehicleId, date, fuelBrand, octane, location, gallons, pricePerGallon, cost, odometer, notes]).then(newRefuel => {
            res.status(200).send(newRefuel)
        })
    }
}