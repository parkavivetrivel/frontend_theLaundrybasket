import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signup = this.fb.group({
    username: new FormControl('', Validators.required),
    email: ['', Validators.required],
    password: ['', Validators.required],
    image: new FormControl()

  })
  success: boolean = false;
  showGif:boolean = false; 
  signUpSuccess: boolean = false;
  signUpFailure: boolean = false;
  signUpCard: boolean = true;
  selectedFile!: File;
  url:any
  imagedata: any
  constructor(private router: Router, private AuthenticationService: AuthenticationService,
    private fb: FormBuilder) { }
    

  ngOnInit() {
  }
  
  signupuserdata(uservalues: any) {
    this.signup.reset();
    this.imagedata = null;
    this.signUpCard  = false;
    this.showGif = true;

    this.AuthenticationService.signupuserData(uservalues).subscribe((res: any) => {
      this.showGif = false;

      if (res == true) {
        this.signUpCard  = false;
        this.signUpSuccess = true;
        this.signUpFailure = false;



      }
      else {
        this.signUpCard = false;
        this.signUpSuccess = false;
        this.signUpFailure = true;
 
      }
      this.ngOnInit();
      console.log("updated");
      this.signup = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        image: new FormControl()
       
      })
      console.log(this.signup)
      this.success = true;
      return res;
    }, (err: any) => {
      console.log(err);
    }
    );
  }
  onFileSelected(event:Event){
    // if(e.target.files){
    //    var reader = new FileReader();
    //    reader.readAsDataURL(e.target.files[0]);
    //    reader.onload=(event:any)=>{
    //     this.url=event.target.result;  
    //    }
    // } To show the file we selected
    // if (e.target.files.length> 0){
     const fileInput = event.target as HTMLInputElement;
  
  if (fileInput.files && fileInput.files.length > 0) {
    const file: File = fileInput.files[0];

    // Update the form control with the File object
    this.signup.patchValue({ image: file });

    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagedata = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
    // this.selectedFile = file
    // console.log("updated", this.selectedFile);
    // }//go through the code properly 
    console.log("file selected" , event)
     
  }
  
}

