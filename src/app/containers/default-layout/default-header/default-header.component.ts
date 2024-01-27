import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from '../../../services/auth.service'
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  user?: User;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private service: AuthService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.service.user().subscribe({
      next: (response) => {
        this.user = response
      }
    })

    this.user = this.service.getUser();
  }

  onLogout(): void {
    this.service.logout();
    this.router.navigateByUrl('/login')
  }
}
