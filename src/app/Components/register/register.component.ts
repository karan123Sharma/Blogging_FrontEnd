import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor (private api:ApiService,private router:Router){}


  userobj:User = new User();
  register(){
    this.api.postRegsiterUser(this.userobj).subscribe((data)=>{
      this.router.navigate(['/login']);
    })
  }
}
