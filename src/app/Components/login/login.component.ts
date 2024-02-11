import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private api:ApiService ,  private router:Router){}
  userobj:User = new User();
  data!:any[];
 
  ngOnInit():void{
    // Initialization code if needed
    if (this.api.isAuthenticated()) {
      // Redirect to home page if already authenticated
      this.router.navigate(['/personal']);
    } else {
      // Fetch user data if not already authenticated
      this.getData();
    }
  }


  getData(){
    this.api.getUserData().subscribe((data)=>{
      this.data =data;
      console.log(this.data);
    })
  }
  match(username:string){
    console.log(this.data);
    this.data.forEach((data)=>{
      if(data.username == username){
        console.log("hey this is where matches");
        console.log(data.id);
        this.api.setUserId(data.id);
        console.log(this.api.getUserId());
      }
    })
  }
  login(): void {
    console.log("I'm here");
    this.api.authUser(this.userobj).subscribe(
      (response: any) => { // Use 'any' type to handle plain text response
        // Handle the response here
        console.log(response);
        if (response === 'Authenticated User') {
          // Redirect to dashboard or perform other actions
          this.match(this.userobj.username);
          console.log("Hey");
          console.log(this.api.getUserId());
          this.router.navigate(['/personal'])
        } else {
          // Handle other cases
        }
      },
      (error) => {
        console.error('Error:', error);
        // Handle error, e.g., display error message to user
      }
    );
  }
}
