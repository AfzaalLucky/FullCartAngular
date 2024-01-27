import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BrandRequestDto } from '../../../model/add-brand-request.model'
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnDestroy {

  model: BrandRequestDto;

  private addSubscription?: Subscription;

  constructor(private service: BrandsService, private router: Router) {
    this.model = {
      name: '',
      description: '',
      imageUrl: '',
    };
  }

  onFormSubmit() {
    this.addSubscription = this.service.add(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/brands/brand-list');
      }
    });
  }

  ngOnDestroy(): void {
    this.addSubscription?.unsubscribe();
  }
}
