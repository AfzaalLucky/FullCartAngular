import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddBrandComponent} from './add-brand/add-brand.component'
import { BrandListComponent } from './brand-list/brand-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Brands'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'brands'
            },
            {
              path: 'add-brand',
              component: AddBrandComponent,
              data: {
                title: 'Add'
              }
            },
            {
              path: 'brand-list',
              component: BrandListComponent,
              data: {
                title: 'Brand List'
              }
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrandsRoutingModule {
}