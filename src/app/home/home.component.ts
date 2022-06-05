import { SetuService } from './../shared/setu.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DocumentList: any;
  constructor(private SetuService: SetuService) { }

  ngOnInit(): void {
    debugger
   this.SetuService.GetDocuments().subscribe(data=>{
    console.log(data);
    this.DocumentList = data;
    });
    
    
  }

  form : FormGroup = new FormGroup({
    DocName : new FormControl('',Validators.required),
    DocFee : new FormControl('',Validators.required)
  });

  AddDocument(){
    alert('Hello');

    console.log(this.form.value);

    if(this.form.valid){
      this.SetuService.InsertDocuments(this.form.value);
    }
    
  }


}
