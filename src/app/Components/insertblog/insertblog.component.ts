import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { BlogCreationData } from '../../blogcreation-dat';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-insertblog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertblog.component.html',
  styleUrl: './insertblog.component.css'
})
export class InsertblogComponent {

  ngOnInit():void{

  }

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  blogobj:Blogs =  new Blogs();
  constructor (private api:ApiService,private router:Router){

  }
  onsubmit() {
    const userId = parseInt(this.api.getUserId() || '0', 10);
    console.log(this.blogobj);
    this.blogobj.blogDate = this.cValue; 
    const requestData = {
      blog: this.blogobj,
      authorId: userId
    };
    this.api.insertBlog(requestData).subscribe(
      (data: any) => {
        this.router.navigate(['/personal']);
      },
      (error: any) => console.log(error)
    );
  }
  
}
