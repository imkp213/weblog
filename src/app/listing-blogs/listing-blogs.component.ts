import { Component, OnInit } from '@angular/core';
import { WeblogService } from '../services/weblog.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-blogs',
  templateUrl: './listing-blogs.component.html',
  styleUrls: ['./listing-blogs.component.css']
})
export class ListingBlogsComponent implements OnInit {
  title ="Weblog Blogs";
  blogs;
  bread = [];
  categories;
  constructor(
    private webBlogApi: WeblogService,
    private titleService: Title,
    private route: ActivatedRoute,
  ) { 

    this.route.params.subscribe(params => {
      this.ngOnInit();
    });

  }

  ngOnInit() {
    this.bread = [
      {'title':"Blogs",'categeory':this.route.snapshot.params.categeory}
    ]

    if(1==1){
      this.webBlogApi.fetchAllBlogs(this.bread[0].categeory).subscribe((data)=>{
        this.blogs =  data['data'];
      });
    }else{
      this.webBlogApi.fetchAllBlogs().subscribe((data)=>{
        this.blogs =  data['data'];
      });
    }
    this.titleService.setTitle(this.title);
    this.webBlogApi.fetchAllCategories().subscribe((data)=>{
      this.categories =  data['data'];
    });
  }

}
