import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuValue:boolean=false;
  menu_icon:string = 'bi bi-list';

  openMenue(){
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenue(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list'
  }

}
