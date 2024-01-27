import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../../model/brand.model'
import { BrandsService } from '../../../services/brands.service'

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  //brands$?: Observable<Brand>;

  constructor(private service: BrandsService) { }

  //brands?: Brand[] | undefined
  //brands?: Brand[] = [];

  brands?: Brand[]

  ngOnInit(): void {
    this.service.get().subscribe({
      next: (response) => {
        this.brands = response.data
      }
    });

    //this.brands$ = this.service.get();
  }
}
