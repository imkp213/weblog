import { NgModule } from '@angular/core';
import { Routes, RouterModule , CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserAccountComponent } from './user/user-account/user-account.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ListingBlogsComponent } from './listing-blogs/listing-blogs.component';
import { AddBlogComponent } from './user/add-blog/add-blog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { FileUploadComponent } from './test/file-upload/file-upload.component';
import { AllUsersComponent } from './user/all-users/all-users.component';
import { TodosComponent } from './test/todos/todos.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'file-upload',component:FileUploadComponent},
  {path:'todos',component:TodosComponent},
  {path:'users',component:AllUsersComponent},
  {path:'blogs',component:ListingBlogsComponent},
  {path:'blogs/:categeory',component:ListingBlogsComponent},
  {path:'blogs/:categeory/:blogid',component:BlogDetailComponent},
  
  {path:'user-login',component:UserAccountComponent},
  /* After User Login */
  {
    path:'add-blog',
    component:AddBlogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user-logout',
    component:UserLogoutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view-blog',
    component:AddBlogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user-profile',
    component:UserProfileComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
