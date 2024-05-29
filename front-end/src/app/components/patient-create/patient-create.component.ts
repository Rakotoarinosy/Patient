import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../Entity/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './patient-create.component.html',
  styleUrl: './patient-create.component.scss'
})
export class PatientCreateComponent {
  patient: Patient = new Patient();
  @Output() patientCreated = new EventEmitter<void>();

  constructor(private patientService: PatientService, private router: Router) { }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(() => {

      this.patientCreated.emit();
      this.router.navigate(['']);
    });
  }

}
