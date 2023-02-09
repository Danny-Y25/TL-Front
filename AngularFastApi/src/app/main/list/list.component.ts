import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from '../models/user';
import { Pipe } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  modeloUsuario: UserModel=new UserModel();
  listUser:any=[]
  constructor(
    private _api : ApiService,
    private _auth: AuthService,
    private router: Router,
  ) { }
  @Input() dep:any;
  ngOnInit(): void {
    console.log("ngOnInit");
    this.loadUsers();
  }
  users:any

  loadUsers(){
    this.users=this._api.getTablet();
  }
}
