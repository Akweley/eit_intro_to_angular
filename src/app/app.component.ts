import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './app-core/common/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, LoginComponent, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnChanges{
  title = 'inmest-web';
  name = "Akweley";
  profile ={
    id : "1",
    first_name: "Akweley",
    last_name: "Okai"
  }
  genesis = "hello";

  constructor(){
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes, 'changes');
   for(const inputChange in changes){
    console.log(changes[inputChange].firstChange, inputChange);
   }

  }

  ngOnInit(): void {
    console.log('On Init');
  }


}
