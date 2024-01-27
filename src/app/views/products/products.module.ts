import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component'
import { ProductsListComponent } from './products-list/products-list.component'
import { ProductsRoutingModule } from './products-routing.module';
import { CardModule, FormModule, SharedModule, GridModule, ButtonModule } from '@coreui/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddProductComponent,
        ProductsListComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        CardModule,
        FormModule,
        SharedModule,
        FormModule,
        GridModule,
        ButtonModule
    ]
})
export class ProductsModule {
}
