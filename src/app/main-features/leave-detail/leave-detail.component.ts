import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-leave-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave-detail.component.html',
  styleUrl: './leave-detail.component.scss'
})
export class LeaveDetailComponent implements OnInit {
  leaveId = '';
  createdBy = '';
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void{
    this.route.params.subscribe(param => {
      this.leaveId = param["id"];
      this.createdBy = param["name"];
      
    })
  }

}
