import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';

export const routes: Routes = [
  { path: 'create', component: PatientCreateComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'edit/:id', component: PatientEditComponent }, // Route for editing a patient
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
];
