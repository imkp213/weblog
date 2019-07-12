import { UserProfileComponent } from './user-profile/user-profile.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerInnerComponent } from './banner-inner/banner-inner.component';
import { BannerComponent } from './banner/banner.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ListingBlogsComponent } from './listing-blogs/listing-blogs.component';
import { WeblogService } from './services/weblog.service';
import { AddBlogComponent } from "./user/add-blog/add-blog.component";
import { UserAccountComponent } from './user/user-account/user-account.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { FileUploadComponent } from './test/file-upload/file-upload.component';
import { FileUploadService } from './file-upload.service';
import { AllUsersComponent } from './user/all-users/all-users.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-build-classic';
import {NgxPaginationModule} from 'ngx-pagination';
import { TodosComponent } from './test/todos/todos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BlogDetailComponent,
    BlogComponent,
    BannerComponent,
    UserAccountComponent,
    BannerInnerComponent,
    ContactFormComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ListingBlogsComponent,
    AddBlogComponent,
    UserProfileComponent,
    UserLogoutComponent,
    FileUploadComponent,
    AllUsersComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    // ToastrModule.forRoot({
    //   timeOut: 1000,
    //   positionClass: 'toast-bottom-right'
    // }),
    // BrowserAnimationsModule
    // CKEditorModule
  ],
  providers: [
    WeblogService,
    AuthGuard,
    UserService,
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
