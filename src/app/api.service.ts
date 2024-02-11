import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogCreationData } from './blogcreation-dat';
import { Blogs } from './blogs';
import { BlogUpdateData } from './blogupdate';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private readonly USER_ID_KEY = 'userId';
  blog:Blogs  = new Blogs();
  private baseUrl = "http://localhost:8000/blogs/";
  private baseUrl2 = "http://localhost:8000/";
  constructor(private http:HttpClient) { }

  getAllBlogs(){
    console.log("Eroor HERE");
    return this.http.get<Blogs[]>(this.baseUrl)
  }
  // insertBlog(blog: Blogs, authorId: number): Observable<object> {
  //   const requestData = { blog: blog, authorId: authorId };
  //   console.log(requestData);
  //   return this.http.post(`${this.baseUrl}` + "createblog", requestData);
  // }
  insertBlog(data: BlogCreationData): Observable<object> {
    return this.http.post(`${this.baseUrl}` + "createblog", data);
  }
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.USER_ID_KEY);
  }

  getBlogById(id:number){
    return this.http.get<Blogs>(`${this.baseUrl}`+id);
  }

  setUserId(userId: string): void {
    localStorage.setItem(this.USER_ID_KEY, userId);
  }
  getUserId(): string | null {
    return localStorage.getItem(this.USER_ID_KEY);
  
  }
  getUserData(){
    return this.http.get<User[]>(`${this.baseUrl}`+"alluser");
  }

  removeUserId():void{
    localStorage.removeItem(this.USER_ID_KEY);
  }

  deleteBlogById(idm:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(`${this.baseUrl}`+"delete/"+idm,{ headers, responseType: 'text' as 'json'});
  }

  updateBlogById(data:BlogUpdateData):Observable<object>{
    return this.http.post(`${this.baseUrl}`+"update/"+data.blogId,data);
  }
  authUser(user: User): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.baseUrl2}`+"authenticateuser", user, { headers, responseType: 'text' as 'json'});
  }

  
  getBlogsByAuthorId(authorId: number): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(`${this.baseUrl}AllBlogsId/${authorId}`);
  }
  

}
