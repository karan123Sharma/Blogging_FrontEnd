import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
  
})
export class NavbarComponent {
  constructor(private api:ApiService, private router:Router) { }
  logout(): void {
    this.api.removeUserId(); // Clear user ID from local storage
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
