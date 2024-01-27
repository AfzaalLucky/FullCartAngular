import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBrandComponent } from './add-brand/add-brand.component'
import { BrandsRoutingModule } from './brands-routing.module';
import { BrandListComponent } from './brand-list/brand-list.component'
import { CardModule, FormModule, SharedModule, GridModule, ButtonModule, TableModule } from '@coreui/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddBrandComponent,
        BrandListComponent,
    ],
    imports: [
        CommonModule,
        BrandsRoutingModule,
        CardModule,
        FormModule,
        SharedModule,
        FormModule,
        GridModule,
        ButtonModule,
        TableModule,
        FormsModule
    ]
})
export class BrandsModule {
}
