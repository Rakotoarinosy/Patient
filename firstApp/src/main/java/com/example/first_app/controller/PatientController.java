// Contrôleur
package com.example.first_app.controller;

import com.example.first_app.entity.Patient;
import com.example.first_app.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
@RequestMapping("/patients")
public class PatientController {

    private final PatientService patientService;
    
    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Patient>> getAllPatients() {
        Iterable<Patient> patients = patientService.getAllPatients();
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Integer id) {
        Patient patient = patientService.getPatientById(id);
        if (patient != null) {
            return new ResponseEntity<>(patient, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        Patient createdPatient = patientService.createPatient(patient);
        return new ResponseEntity<>(createdPatient, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Integer id, @RequestBody Patient updatedPatient) {
        Patient patient = patientService.updatePatient(id, updatedPatient);
        if (patient != null) {
            return new ResponseEntity<>(patient, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable Integer id) {
        boolean deleted = patientService.deletePatient(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
