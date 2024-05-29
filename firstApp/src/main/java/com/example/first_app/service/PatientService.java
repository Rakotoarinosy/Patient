// Service
package com.example.first_app.service;

import com.example.first_app.entity.Patient;
import com.example.first_app.repository.PatientRepository;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class PatientService {
    
    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Iterable<Patient> getAllPatients() {
        return patientRepository.findAll();
    }


    public Patient getPatientById(Integer id) {
        Optional<Patient> patient = patientRepository.findById(id);
        return patient.orElse(null);
    }

    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public Patient updatePatient(Integer id, Patient updatedPatient) {
        Optional<Patient> existingPatient = patientRepository.findById(id);
        if (existingPatient.isPresent()) {
            Patient patient = existingPatient.get();
            patient.setNom(updatedPatient.getNom());
            patient.setAge(updatedPatient.getAge());
            patient.setDateDeNaissance(updatedPatient.getDateDeNaissance());
            patient.setEmail(updatedPatient.getEmail());
            patient.setGenre(updatedPatient.getGenre());
            return patientRepository.save(patient);
        } else {
            return null;
        }
    }


    public boolean deletePatient(Integer id) {
        Optional<Patient> existingPatient = patientRepository.findById(id);
        if (existingPatient.isPresent()) {
            patientRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}

