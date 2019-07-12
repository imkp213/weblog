import { Component, OnInit } from '@angular/core';
import { WeblogService } from '../../services/weblog.service';
// import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users:any;
  config: any;
  usersCopy;
  constructor(
    private api: WeblogService,
  ) {}
  ngOnInit() {
    this.api.fetchUsers().subscribe((data)=>{
      this.users = data;
      this.usersCopy = data;
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.users.length
      };
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  search(event): void {
    let term = event.target.value;
    this.users = this.usersCopy.filter(function(user) {
        return user.title.startsWith(term);
    });

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.users.length
    };
  }
}
