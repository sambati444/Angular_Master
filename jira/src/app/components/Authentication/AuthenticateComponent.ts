import { Component, ElementRef, Input } from '@angular/core';
import {AuthenticateService} from '../../services/Authenticate.service';
import { RouterModule, Routes ,Router} from '@angular/router';

@Component ({
    selector: 'authenticate',
    templateUrl: 'AuthenticateComponent.html',
    styleUrls: ['./Authenticate.less']
})
export class Authenticate {
    constructor(private ElementRef:ElementRef,private AuthenticateService1:AuthenticateService ,private router: Router,){
    /*    $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
             $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
             $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
            alert("df");
        });*/
    } 
    value: String = 'Hello';
    onSubmit(name:any,pass:any){
        var a=this.AuthenticateService1.getServers().subscribe((response)=>console.log(response),(error)=>console.log(error));
       console.log(name+"-------------"+pass+"aaaaaaaaaaaa"+a);
       this.router.navigate(['/home']);

    }
}