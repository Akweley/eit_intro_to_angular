import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs'
import { SettingsUserComponent } from "../settings-user/settings-user.component";
import { SettingsProfileComponent } from "../settings-profile/settings-profile.component";
@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [CommonModule, MatTabsModule, SettingsUserComponent, SettingsProfileComponent]
})
export class SettingsComponent {

}
