import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hr',
  templateUrl: './HR.component.html',
  styleUrls: ['./HR.component.scss']
})
export class HRComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;
  
  interviews = [{
    status: true,
    intervieweeName: "Mohammad",
    interviewerName: "Mostafa", 
    meetingRoomName: "Room1",
    date: new Date()
  },
  {
    status: false,
    intervieweeName: "Noha",
    interviewerName: "Mostafa", 
    meetingRoomName: "Room4",
    date: new Date()
    },
  {
    status: true,
    intervieweeName: "Abdallah",
    interviewerName: "Mostafa", 
    meetingRoomName: "Room2",
    date: new Date()
  }
  ]

  constructor(private fb: FormBuilder) { }

  submitForm(): void {
    console.log(this.validateForm.value);


  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      datePicker: [null],
      position: [''],
      intervieweeName: [''],
      availableRoom: [null],
      availableStaff: [null],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    let date = this.validateForm.value;
    this.interviews.push(date);
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }



}
