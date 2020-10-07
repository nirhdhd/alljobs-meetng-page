import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

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

  constructor() { }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  selectedTopping: any[] = [];

  productName: string;

  filterData: FilterData = {
    meetingType: [false, false, false],
    value: '',
    viewValue: ''
  };

  toppings = new FormControl();

  advisers: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',

  ];

  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  //try
  toppingList: any[] = [{ id: 0, name: '111' }, { id: 1, name: '222' }, { id: 2, name: '333' }];


  ngOnInit(): void {
    this.productName = "choosenProductName";

  }

  foo(val) {
    this.filterData.meetingType[val] = !this.filterData.meetingType[val];
    //console.log(this.filterData);

  }


  addFoo(e: any, id: string) {
    console.log("im hereeee");
    if (e.source._selected == true) {
      this.selectedTopping.push(id);
      console.log(this.selectedTopping);
    }
    else {

      this.selectedTopping = this.selectedTopping.filter(m => m != id);
      console.log(this.selectedTopping);
    }


  }





}