import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Shared/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
 
  loginForm =  new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  constructor(private route:Router,private serv:ServiceService) { }

  email(){
    this.loginForm.get('email')
  }
  password(){
    this.loginForm.get('password')
  }

  login(){

    alert('login');
    const res=this.serv.validateUser(this.loginForm.value['email'],this.loginForm.value['password'])
    if(res){
      localStorage.setItem('email',this.loginForm.value['email']);
      localStorage.setItem('password',this.loginForm.value['password']);

      this.route.navigate(['home'])
    }else{
      alert('invalid')
    }
    console.log(this.loginForm.value);
    
  }
}
