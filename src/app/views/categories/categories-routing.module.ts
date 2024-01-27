import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component'
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Categories'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'categories'
            },
            {
                path: 'add-category',
                component: AddCategoryComponent,
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'category-list',
                component: CategoryListComponent,
                data: {
                    title: 'Category List'
                }
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule {
}