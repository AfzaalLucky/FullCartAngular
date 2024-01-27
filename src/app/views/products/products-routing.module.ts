import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component'
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Products'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'products'
            },
            {
                path: 'add-product',
                component: AddProductComponent,
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'products-list',
                component: ProductsListComponent,
                data: {
                    title: 'Products List'
                }
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}