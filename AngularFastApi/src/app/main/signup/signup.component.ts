import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {ApiService} from '../../services/api.service'
import { UserModel } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  UserGrupo:UserModel=new UserModel
  constructor(
    private _api : ApiService,
    private _auth: AuthService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      country: ['', Validators.required],
      password_user: ['', Validators.required]

    });
  }

  signup(){
    this._api.registrarTablet(this.UserGrupo).subscribe(data=>{
      console.log(data)
      this.UserGrupo.firstname=''
      this.UserGrupo.lastname=''
      this.UserGrupo.username=''
      this.UserGrupo.country=''
      this.UserGrupo.password_user=''
    })

  }

}
