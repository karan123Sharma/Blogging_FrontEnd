import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-viewblog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewblog.component.html',
  styleUrl: './viewblog.component.css'
})
export class ViewblogComponent {
  
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
}
