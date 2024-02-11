import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-personalblogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personalblogs.component.html',
  styleUrl: './personalblogs.component.css'
})
export class PersonalblogsComponent {

  data!:Blogs[];

  ngOnInit():void{
    this.getData();
  }
  constructor(private ApiService:ApiService , private router:Router){
  }

  getData(){

    const userId = parseInt(this.ApiService.getUserId() || '0', 10);

    console.log("Error here")
    this.ApiService.getBlogsByAuthorId(userId).subscribe((data)=>{
      this.data = data;
    })
  }
  clicked(id:number){
    this.router.navigate(['/detailBlog',id]);
  }


  clickInsert(){
    this.router.navigate(['/insertblog']);
  }
}
