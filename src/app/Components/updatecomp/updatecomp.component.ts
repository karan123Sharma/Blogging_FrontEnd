import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-updatecomp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatecomp.component.html',
  styleUrl: './updatecomp.component.css'
})
export class UpdatecompComponent {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  id!: number;
  blogobj: Blogs = new Blogs();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.api.getBlogById(this.id).subscribe(
      (data: Blogs) => {
        console.log(this.id);
        this.blogobj = data;
      },
      (error) => {
        console.error('Error fetching blog:', error);
        // Handle error, e.g., show error message to user
      }
    );
  }

  updateblog(): void {
    console.log("oye");
    const userId = parseInt(this.api.getUserId() || '0', 10);

    const requestData = {
      blog: this.blogobj,
      blogId:this.id,
      authorId: userId,
    };
    requestData.blogId = this.blogobj.blogId;
    console.log(requestData.blogId);
    this.api.updateBlogById(requestData).subscribe((data)=>{
      console.log("haha done");
      this.router.navigate(['/personal']);
    })
  }
}
