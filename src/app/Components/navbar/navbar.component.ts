import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
  
})
export class NavbarComponent {
  loggedin: boolean = false; 

  constructor(private api:ApiService, private router:Router) { }


  isHomePage(): boolean {
    return this.router.url === '/login' || this.router.url === '/' ;
  }

  logout(): void {
    this.api.removeUserId(); // Clear user ID from local storage
    this.router.navigate(['/login']); // Navigate to the login page
  }

}
