import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
