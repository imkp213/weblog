import { Component, OnInit } from '@angular/core';
import { WeblogService } from '../services/weblog.service';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs;
  title = "Home Page";
  constructor(
    private webBlogApi: WeblogService,
    private titleService: Title,
    private meta:Meta,
    private http:HttpClient
  ) { }

  ngOnInit(){
    this.webBlogApi.fetchAllBlogs().subscribe((data)=>{
      this.blogs =  data['data'];
    });
    this.titleService.setTitle(this.title);
    this.meta.addTag({
      name:'description',
      content:"home page Description",
    },true);


    $("#flexiselDemo1").flexisel({
      visibleItems: 3,
      animationSpeed: 1000,
      autoPlay: true,
      autoPlaySpeed: 3000,
      pauseOnHover: true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint: 480,
          visibleItems: 1
        },
        landscape: {
          changePoint: 640,
          visibleItems: 2
        },
        tablet: {
          changePoint: 768,
          visibleItems: 3
        }
      }
    });
    
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
    //     console.log(res);
    // });

    // this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});
    // this.meta.addTag({name: 'description', content: 'Angular project training on rsgitech.com'});
  }
}
