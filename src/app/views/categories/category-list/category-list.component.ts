import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../model/category.model'
import { CategoriesService } from '../../../services/categories.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(private service: CategoriesService) { }
  categories?: Category[]

  ngOnInit(): void {
    this.service.get().subscribe({
      next: (response) => {
        this.categories = response.data
      }
    });
  }
}
