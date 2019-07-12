import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeblogService } from '../services/weblog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  value;
  blogd;
  latestBlogs;
  categories;
  baseImageUrl = "http://localhost/weblog/";
  constructor(
    private route: ActivatedRoute,
    private webBlogApi: WeblogService) { 
    this.value = parseInt(this.route.snapshot.params.blogid);

  }

  ngOnInit(){
    this.webBlogApi.fetchBlogDetails(this.value).subscribe((data)=>{
      this.blogd =  data['data'];
      console.log(this.blogd);
    });

    this.webBlogApi.fetchLatestBlog().subscribe((data)=>{
      this.latestBlogs =  data['data'];
    });

    this.webBlogApi.fetchAllCategories().subscribe((data)=>{
      this.categories =  data['data'];
    });
  }

}
