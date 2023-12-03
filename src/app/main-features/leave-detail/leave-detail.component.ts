import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

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
  leave: any;

  constructor(
    private route: ActivatedRoute,
    private leaveService: LeaveService,
    private router: Router,
    ){}

    goback(){
      this.router.navigate(['/leaves'], { relativeTo: this.route})
    }

  ngOnInit(): void{
    this.route.params.subscribe(param => {
      this.leaveId = param["id"];
      this.createdBy = param["name"];
      this.getMyleaveById(parseInt(this.leaveId));
      
    })
  }
  getMyleaveById(id: number) {
    this.leaveService.getLeaveById(id).subscribe((resp: any) => {
      this.leave = resp;
    });

  }

}
