import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRefuel } from '../../redux/reducer';
import './AddRefuel.css';

class AddRefuel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicleId: '',
            date: '',
            fuelBrand: '',
            octane: '',
            location: '',
            gallons: '',
            pricePerGallon: '',
            cost: '',
            odometer: '',
            notes: '',
        }
    }

    handleFormElementChange = (event, dataField) => {
        if (dataField === 'vehicleId') this.setState({ vehicleId: event.target.value })
        if (dataField === 'date') this.setState({ date: event.target.value })
        if (dataField === 'fuelBrand') this.setState({ fuelBrand: event.target.value })
        if (dataField === 'octane') this.setState({ octane: event.target.value })
        if (dataField === 'location') this.setState({ location: event.target.value })
        if (dataField === 'gallons') this.setState({ gallons: event.target.value })
        if (dataField === 'pricePerGallon') this.setState({ pricePerGallon: event.target.value })
        if (dataField === 'cost') this.setState({ cost: event.target.value })
        if (dataField === 'odometer') this.setState({ odometer: event.target.value })
        if (dataField === 'notes') this.setState({ notes: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();
        const newRefuel = {
            vehicleId: this.state.vehicleId,
            date: this.state.date,
            fuelBrand: this.state.fuelBrand,
            octane: this.state.octane,
            location: this.state.location,
            gallons: this.state.gallons,
            pricePerGallon: this.state.pricePerGallon,
            cost: this.state.cost,
            odometer: this.state.odometer,
            notes: this.state.notes,
        };
        this.props.addRefuel(newRefuel, () => {
            this.props.history.push('/')
        });
    }

    render() {
        return (
            <div className="addRefuelComponent">
                <form
                    className="refuelForm"
                    onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="Vehicle ID"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'vehicleId')}
                        value={this.state.vehicleId} />
                    <input
                        placeholder="Date"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'date')}
                        value={this.state.date} />
                    <input
                        placeholder="Fuel brand"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'fuelBrand')}
                        value={this.state.fuelBrand} />
                    <input
                        placeholder="Octane"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'octane')}
                        value={this.state.octane} />
                    <input
                        placeholder="City, State"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'location')}
                        value={this.state.location} />
                    <input
                        placeholder="Gallons"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'gallons')}
                        value={this.state.gallons} />
                    <input
                        placeholder="Price per gallon"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'pricePerGallon')}
                        value={this.state.pricePerGallon} />
                    <input
                        placeholder="Cost"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'cost')}
                        value={this.state.cost} />
                    <input
                        placeholder="Odometer"
                        className="formInput"
                        onChange={event => this.handleFormElementChange(event, 'odometer')}
                        value={this.state.odometer} />
                    <textarea
                        placeholder="Notes"
                        className="formTextArea"
                        onChange={event => this.handleFormElementChange(event, 'notes')}
                        value={this.state.notes} />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <Link to={'/'}><button>Cancel</button></Link>
                </div>
            </div>
        )
    }
}


// not sure about below - what is needed and what is not. feels like I might have stuff I don't need...

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { addRefuel })(AddRefuel);