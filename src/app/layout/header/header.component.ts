import { Component, OnInit } from '@angular/core';
import { WeblogService } from '../../services/weblog.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories;
  constructor(
    private webBlogApi: WeblogService,
    private toastr: ToastrService,
    private auth:AuthService
    ) { }

  ngOnInit() {
    this.webBlogApi.fetchAllCategories().subscribe((data)=>{
      this.categories =  data['data'];
    });
  }

  // test() {
  //   this.toastr.success('Hello world!', 'Toastr fun!',{
  //     timeOut:1200
  //   });
  // }
}
