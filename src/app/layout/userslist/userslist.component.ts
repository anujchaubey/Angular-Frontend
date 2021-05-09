import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/authorization/service/api.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  listgridcss: any = 'list';
  allUserList: any = [];
  loader: boolean = true;

  constructor(private _server: ApiService) { }

  ngOnInit() {
    this.fetchallUser();
  }
  listGrid(actionCss) {
    this.listgridcss = actionCss;
  }
  fetchallUser() {
    this._server.getApi('getAllRegisteredUser').subscribe((res) => {
      this.allUserList = res.response;
      this.loader = false;
      console.log(this.allUserList)
    })
  }
}
