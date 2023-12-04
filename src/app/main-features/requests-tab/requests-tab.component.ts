import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUserTableComponent } from "../settings-user-table/settings-user-table.component";

@Component({
    selector: 'app-requests-tab',
    standalone: true,
    templateUrl: './requests-tab.component.html',
    styleUrl: './requests-tab.component.scss',
    imports: [CommonModule, SettingsUserTableComponent]
})
export class RequestsTabComponent {

}
