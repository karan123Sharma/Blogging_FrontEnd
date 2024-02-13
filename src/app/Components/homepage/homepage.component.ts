import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRegister(): void {
    // Navigate to the registration page
    this.router.navigate(['/register']);
  }

  navigateToLogin(): void {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

}
