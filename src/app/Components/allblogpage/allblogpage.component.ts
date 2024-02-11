import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-allblogpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allblogpage.component.html',
  styleUrl: './allblogpage.component.css'
})
export class AllblogpageComponent {

  data!:Blogs[];

  ngOnInit():void{
    this.getData();
  }
  constructor(private ApiService:ApiService , private router:Router){
  }
  
  getData(){
    console.log("Error here")
    this.ApiService.getAllBlogs().subscribe((data)=>{
      this.data = data;
    })
  }
  clicked(id:number){
    this.router.navigate(['/viewBlog',id]);
  }


}
