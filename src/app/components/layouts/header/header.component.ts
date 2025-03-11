import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}
  get user () {
    return this.authService.user;
  }
}