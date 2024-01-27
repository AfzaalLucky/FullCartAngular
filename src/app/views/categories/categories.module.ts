import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component'
import { CategoryListComponent } from './category-list/category-list.component'
import { CategoriesRoutingModule } from './categories-routing.module';
import { CardModule, FormModule, SharedModule, GridModule, ButtonModule, TableModule } from '@coreui/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddCategoryComponent,
        CategoryListComponent,
    ],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        CardModule,
        FormModule,
        SharedModule,
        FormModule,
        GridModule,
        ButtonModule,
        TableModule
    ]
})
export class CategoriesModule {
}
