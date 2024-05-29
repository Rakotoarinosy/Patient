import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../Entity/patient';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  id: number = 0;
  patient: Patient = new Patient();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.patientService.getPatient(this.id).subscribe(response => {
      this.patient = response.data;
    });
  }


  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }

  updatePatient() {
    this.patientService.updatePatient(this.id, this.patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }
}
