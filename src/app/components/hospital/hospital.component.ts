import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hospital.component.html',
  styleUrl: './hospital.component.css'
})
export class HospitalComponent {

  hospitales: string[] = [];

  nuevoHospital: string = "";

  addHospital() {
    if (this.nuevoHospital && this.nuevoHospital.trim()) {
      this.hospitales.push(this.nuevoHospital.trim());

      this.nuevoHospital = "";
    }
  }

}
