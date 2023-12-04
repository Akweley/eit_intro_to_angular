import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs'
import { RequestsTabComponent } from "../requests-tab/requests-tab.component";
import { RequestApprovalsTabComponent } from "../request-approvals-tab/request-approvals-tab.component";

@Component({
    selector: 'app-requests',
    standalone: true,
    templateUrl: './requests.component.html',
    styleUrl: './requests.component.scss',
    imports: [CommonModule, MatTabsModule, RequestsTabComponent, RequestApprovalsTabComponent]
})
export class RequestsComponent {

}
