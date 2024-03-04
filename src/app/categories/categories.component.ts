import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  Categories: any[] = []

  constructor(private _CategoriesService: CategoriesService) { }
  ngOnInit(): void {

    localStorage.setItem("currentPage", "/categories")

    //get all categories
    this._CategoriesService.getCategoriesApi().subscribe({
      next: (res) => {
        this.Categories = res.data
      },
      error: (err) => { console.log(err) }
    })


  }


}
