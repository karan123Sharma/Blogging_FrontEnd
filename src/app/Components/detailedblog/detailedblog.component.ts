import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-detailedblog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailedblog.component.html',
  styleUrl: './detailedblog.component.css'
})
export class DetailedblogComponent {

  blogobj:Blogs = new Blogs();
  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router){}

  id!:number;

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.api.getBlogById(this.id).subscribe(data =>{
      console.log(this.id);
    this.blogobj = data;
    })
  }
  clickdelete(id: number) {
    console.log(id);
    this.api.deleteBlogById(id).subscribe(
      (data) => {
        this.router.navigate(['/personal']); 
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }

  clickInsert(){
    this.router.navigate(['/insertblog']);
  }
  

  clickupdate(){
    this.router.navigate(['/updateblog',this.id])
  }
}
