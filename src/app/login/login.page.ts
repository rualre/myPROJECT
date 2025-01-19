import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from "../services/autentication.service";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: any;
  formErrors = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private autenticationService: AutenticationService,
    private navCtrl: NavController,
    private storage: Storage

  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });
  }

  ngOnInit() { }

  loginUser(credentials: any) {
    this.autenticationService.login(credentials).then(res => {
      console.log(res);
      this.errorMessage = '';
      this.storage.set('isUserLoggedIn', true);
      this.navCtrl.navigateForward("/home");

    }).catch(err => {
      console.log(err);
      this.errorMessage = err;
    });
  }
  }


