import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators } from '@angular/forms';
import { from, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import { places, featureList, advisers, selectedProduct, Consultants } from './dataDemo'
//interfaces
interface Meeting {
  label: string;
}
interface Food {
  value: string;
  viewValue: string;
}
interface FilterData {
  meetingType: boolean[];
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calendar-form-page',
  templateUrl: './calendar-form-page.component.html',
  styleUrls: ['./calendar-form-page.component.scss']
})
export class CalendarFormPageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    types: new FormControl([]),
    features: new FormControl([]),
    adviser: new FormControl(''),
    places: new FormControl([])
    //name: new FormControl('', [Validators.required])
  });

  selectedProduct: string;
  places: any[];
  selectedProduct$: Observable<any> = of(selectedProduct);
  places$: Observable<any> = of(places);
  featureList: any[] = featureList;
  advisers: string[] = advisers;


  constructor() { }

  get types(): AbstractControl {
    return this.form.get('types');
  }
  get features(): AbstractControl {
    return this.form.get('features');
  }
  get adviser(): AbstractControl {
    return this.form.get('adviser');
  }

  //toppings = new FormControl();
  selectedTopping: any[] = [];
  productName: string;

  consultants = Consultants;


  ngOnInit(): void {


    this.productName = "choosenProductName";
    this.types.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(console.log);
    this.features.valueChanges.subscribe(console.log);
    this.adviser.valueChanges.subscribe(console.log);
    this.selectedProduct$.subscribe(x => { this.selectedProduct = x.name });
    //מוצר נבחר
    this.places$.subscribe(x => { this.places = x });

    //render the meeting list
    this.form.valueChanges.subscribe((x) => console.log(x));
  }

  onChangeTypes(value) {
    const types = [...this.types.value];
    if (types.includes(value)) {
      this.types.setValue(types.filter(t => t !== value));
    } else {
      this.types.setValue([...types, value]);
    }
  }

  submit() {
    console.log(this.form.valid);
    console.log(this.form.value);
  }


}