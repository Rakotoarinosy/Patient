import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../Entity/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  id: number = 0;
  patient: Patient | undefined;

  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.patientService.getPatient(this.id).subscribe(response => {
      this.patient = response.data;
    });
  }
}
