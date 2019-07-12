import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeblogService {
  baseUrl = "http://v2rsolution.co.in/weblog/api/";
  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<Object> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  fetchAllBlogs(category?:string): Observable<Object> {
    if(category){
      return this.http.get(this.baseUrl+"get-all-blogs/"+category);
    }else{
      return this.http.get(this.baseUrl+"get-all-blogs");
    }
  }

  fetchAllCategories():Observable<Object>{
    return this.http.get(this.baseUrl+'get-categories');
  }
  
  fetchBlogDetails(value): Observable<Object> {
    return this.http.get(this.baseUrl+"get-blog/"+value);
  }

  fetchLatestBlog():Observable<Object>{
    return this.http.get(this.baseUrl+'get-latest-blogs');
  }

  userRegister(data):Observable<Object>{
    return this.http.post(this.baseUrl+"save-user",data);
  }

  userLogin(data):Observable<Object>{
    return this.http.post(this.baseUrl+'user-login',data);
  }

  saveBlog(data,id?:number):Observable<Object>{
    return this.http.post(this.baseUrl+'save-blog',data);
  }

  likeBlog(data):Observable<Object>{
    return this.http.post(this.baseUrl+'like-blog',data);
  }
  
}
