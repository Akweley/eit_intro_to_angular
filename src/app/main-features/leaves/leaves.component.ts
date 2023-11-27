import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.scss'
})
export class LeavesComponent {
  leaves = [
    {
    id: 1, 
    leave_type: "Maternity", 
    start_date: "Dec 20, 2023", 
    end_date: "Mar 20, 2024",
    created_by: "Grace",
    status: "PENDING",
    last_modified: "Nov 27, 2023",
    status_changed_by: "Derrick",
  },
  {
    id: 2, 
    leave_type: "Baecation", 
    start_date: "Dec 20, 2023", 
    end_date: "Jan 9, 2024",
    created_by: "Suad",
    status: "PENDING",
    last_modified: "Nov 27, 2023",
    status_changed_by: "Xarri",
  }
  ];

}
