import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css',
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        animate('5s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class PartnersComponent implements OnInit  {
  username: string;
  sentences: string[] = [
    "Increase your online orders",
    "Access to Laundry basket tools and support",
    "Reach customers far away from you"
    // Add more sentences as needed
  ];

  currentIndex: number = 0;
  currentSentence: string = '';
  globalData: any;


  constructor(private cookieService: CookieService, private router:Router,private fb: FormBuilder,private AuthenticationService: AuthenticationService,) { 
    this.username =this.cookieService.get('username');
    this.updateCurrentSentence();
    setInterval(() => this.changeSentence(), 6000);
  }
    ngOnInit() {
      
    } 
    
    updateCurrentSentence() {
      this.currentSentence = this.sentences[this.currentIndex];
    }
    changeSentence() {
      this.currentIndex = (this.currentIndex + 1) % this.sentences.length;
      this.updateCurrentSentence();
    }
    public mobileNumber = this.fb.group({
      mobileNumber: new FormControl('', Validators.required),
    })
    partnermobiledata(uservalues:any){
      this.globalData = uservalues;
      console.log(this.globalData)
      // this.AuthenticationService.loginuserdata(uservalues).subscribe((kavi: any) => {
      // // }
      this.AuthenticationService.partnerVerification(uservalues).subscribe((kavi: any) => {
        
  
        this.ngOnInit();
        // console.log("updated");
        this.mobileNumber = this.fb.group({
          mobileNumber: new FormControl('', Validators.required),
        })
  
        console.log("checking", kavi);
        if (kavi == true) {         
          this.router.navigate(['/collectingPartnerDetail']).then(() => {
            window.location.reload();
  
          });
         
        }
        else{
          console.log("else condition", kavi); 
        }
        
  
  
      }, (err: any) => {
        console.log(err);
      });
    }
  }

