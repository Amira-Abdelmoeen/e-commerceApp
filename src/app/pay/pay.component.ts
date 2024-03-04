import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
FormGroup
FormControl

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {


  ngOnInit(): void {

    localStorage.setItem("currentPage" , "/cart")
    
  }
  addressForm : FormGroup = new FormGroup({
    details : new FormControl(null),
    phone : new FormControl(null),
    city : new FormControl(null),
  })

  addressFormSubmit()
  {
    console.log(this.addressForm.value);
    
  }

}
