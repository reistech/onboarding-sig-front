import { Component } from "@angular/core"
import { Router } from "@angular/router";

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
   constructor(
        private router:Router) {
            
        }
        navbarOpen = false; 

        toggleNavbar () { 
          this.navbarOpen =! this.navbarOpen; 
        } 
}