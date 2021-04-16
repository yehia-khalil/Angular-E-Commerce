import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  errors = [];
  contactUsForm: FormGroup = this._fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.email,Validators.required]],
    subject: ['',Validators.required],
    message: ['',Validators.required],
    
  });

  constructor(
    private _fb: FormBuilder,
    private _contactUsService: ContactUsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: FormGroup) {
    if(form.valid) {
      const message = form.value;
      console.log(message);
      this._contactUsService.sendMessage(message).subscribe(
        (res: any) => {
          this._router.navigate(['/home']);
        },
        (err: any) => {
          this.errors = err.error.error || [];
          
        }
      )
    }
  }

}


