import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stationery } from 'src/app/stationery';

@Component({
  selector: 'app-stationery-form',
  templateUrl: './stationery-form.component.html',
  styleUrls: ['./stationery-form.component.css']
})
export class StationeryFormComponent implements OnInit {

  @Input() stationery?: Stationery;
  @Output() stationeryFormClose = new EventEmitter<Stationery>();
  message:string="";
  stationeryForm : FormGroup= new FormGroup({});

  constructor() { }

  ngOnInit(): void {

    this.stationeryForm= new FormGroup({
      name: new FormControl(
        this.stationery?.name,
        [Validators.required,Validators.minLength(3)]
      ),
      price:new FormControl(this.stationery?.price,
         [Validators.required,Validators.maxLength(3)]
      ),
      quantity:new FormControl(this.stationery?.quantity,
          [Validators.required,Validators.minLength(1)]
         ),
        
        // brandname:new FormControl(this.stationery?.brandname, [Validators.required,Validators.minLength(1)]),

    })
  }
  onSubmit(){
    console.log('forms submitted with');
    console.table(this.stationeryForm?.value);
    this.stationeryFormClose.emit(this.stationeryForm?.value)
  }
  get name(){
    return this.stationeryForm?.get('name');
  }
  get price(){
    return this.stationeryForm?.get('price');
  }
  get quantity(){
    return this.stationeryForm?.get('quantity');
  }
 /* get brandname(){
    return this.stationeryForm?.get('brandname');
  }*/
 

  closeForm(){
    this.stationeryFormClose.emit(undefined)
  }

}
