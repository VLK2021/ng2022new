import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ICar} from '../../interfaces';
import {CarService} from '../../services';
import {RegEx} from '../../constants';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;



  constructor(private carService: CarService) {
    this._creteForm()
  }

  ngOnInit(): void {
    //@ts-ignore
    this.carService.getAll().subscribe(({data}) =>this.cars = data)
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.value).subscribe(value => {
        console.log(this.cars);
        this.cars.push(value)
        console.log(this.cars);
        this.form.reset()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        console.log(value)
        const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.carForUpdate = null
      })
    }
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }

  _creteForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      year: new FormControl(1990, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(0, [Validators.min(0), Validators.max(1000000)])
    })
  }

  update(car: ICar): void {
    this.carForUpdate = car
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
