import { AuthService } from './../auth.service';
import { WeblogService } from './../services/weblog.service';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  baseImageUrl = "http://localhost/weblog/";
  @Input() blog_detail;
  likedOrNot = false;
  loading=false;
  likedArr;
  constructor(
    private api:WeblogService,
    public auth:AuthService,
  ) { }

  ngOnInit() {

    if(this.auth.isUserLoggedIn()){
      this.likedArr = this.auth.getUserName().liked;
      var a = this.blog_detail.post_id;
      if (this.likedArr.indexOf(a) > -1) {
        this.likedOrNot = true;
      }
    }
  }

  likeBlog(e){
    e.preventDefault();
    var value:number;
    this.loading = true;
    if(this.likedOrNot==false){
      this.blog_detail.get_likes_count = this.blog_detail.get_likes_count+1;
      this.likedOrNot = true;
      value=1;
      // this.likedArr.push(this.blog_detail.post_id);
    }else{
      this.blog_detail.get_likes_count = this.blog_detail.get_likes_count-1;
      this.likedOrNot = false;
      value=0;
    }

    var form = new FormData;
    form.append('user_id',this.auth.getUserName().token);
    form.append('post_id',this.blog_detail.post_id);
    form.append('like_type',value.toString());

    this.api.likeBlog(form).subscribe((data)=>{
      this.loading = false;
    });
  }
}
