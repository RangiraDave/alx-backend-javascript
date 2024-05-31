// implementation of class EVCar that extend Car

import Car from './10-car.js';

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand);
        this._motor = motor;
        this._color = color;
        this._range = range;
    }

    cloneCar() {
        return new Car(this._brand);
    }
}
