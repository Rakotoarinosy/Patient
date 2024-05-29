import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../../Entity/patient';
import { CommonModule } from '@angular/common';
import { PatientCreateComponent } from '../patient-create/patient-create.component';


@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule,PatientCreateComponent],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent implements OnInit {

  patients:Patient[] = []

  constructor(
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit() {
    this.loadPatients()
  }

  loadPatients() {
    this.patientService.getPatients().subscribe(
      reponse => {
        this.patients = reponse.data;
      });
  }

  deletePatient(id: number | undefined) {
    if (id !== undefined) {
      const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce patient?");
      if (confirmation) {
        this.patientService.deletePatient(id).subscribe(() => {
          this.loadPatients();
        });
      } else {
        console.log("Suppression annulée.");
      }
    } else {
      console.log("ID non défini, impossible de supprimer.");
    }
  }

  createPatient() {
    this.router.navigate(['/create']);
  }

  editPatient(id: number | undefined) {
    if(id != undefined) {
      this.router.navigate(['/edit', id]);
    } else{
      console.log("Editer")
    }
  }


}
