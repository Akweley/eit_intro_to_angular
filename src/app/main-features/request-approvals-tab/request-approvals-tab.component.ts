import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUserTableComponent } from "../settings-user-table/settings-user-table.component";

@Component({
    selector: 'app-request-approvals-tab',
    standalone: true,
    templateUrl: './request-approvals-tab.component.html',
    styleUrl: './request-approvals-tab.component.scss',
    imports: [CommonModule, SettingsUserTableComponent]
})
export class RequestApprovalsTabComponent {

}
