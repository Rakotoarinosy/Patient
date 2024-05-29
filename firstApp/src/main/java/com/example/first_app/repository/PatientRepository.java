package com.example.first_app.repository;


import com.example.first_app.entity.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient,Integer>{
    
}
