import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder, Validators} from '@angular/forms'
/**
 * if the data is valid return null else return object
 */


/**
 * @param form
 */
 function passwordsMatchValidators(form){
  const password=form.get('password')
  const ConfirmPassword=form.get('ConfirmPassword')

if(password.value !== ConfirmPassword.value){
  return ConfirmPassword.setErrors({passwordsMatch:true})
}
else{
   ConfirmPassword.setErrors(null)
}
return null
 }


function symbolValidator(control){

  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;
  
 if(control.value.indexof('@') > -1)
 {
  return null
 }
 else{
   return { symbol:true}
 }
   
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  model:any=[];
 
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
   }
   register(){
    console.log(this.model)
  }



}
