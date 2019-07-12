import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeblogService } from '../../services/weblog.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  addBlogForm: FormGroup;
  submitted = false;
  blogData = [];
  file: File = null;
  loading=false;
  categories;
  constructor(
    private formBuilder: FormBuilder,
    private weblogService:WeblogService,
    private auth:AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
      this.addBlogForm = this.formBuilder.group({
          title: ['', Validators.required],
          category: ['', Validators.required],
          description: ['', Validators.required],
          image:['']
      });

      this.weblogService.fetchAllCategories().subscribe((data)=>{
        this.categories = data['data'];
      });
  }

  onSelectedFile(files: FileList) {
    // this.file = files.item(0);
    this.addBlogForm.get('image').setValue(files.item(0));
  }

  get f() { return this.addBlogForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.addBlogForm.invalid) {
        return;
      }
      this.loading = true;
      this.blogData =  this.addBlogForm.value;
      console.log(this.blogData);
      this.blogData['userid'] = this.auth.getUserName().token;
      this.weblogService.saveBlog(this.blogData).subscribe((data)=>{
        console.log(data);
        this.toastr.success('',data['message'],{
          timeOut:1500
        });
        // this.submitted = false;
        // this.addBlogForm.reset();
        this.loading = false;
      });
  }

}
