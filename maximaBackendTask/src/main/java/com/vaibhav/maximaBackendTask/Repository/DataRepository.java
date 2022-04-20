package com.vaibhav.maximaBackendTask.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

import com.vaibhav.maximaBackendTask.Model.EmployeeData;

@Repository
public interface DataRepository extends JpaRepository<EmployeeData, Integer> {
	
	 List<EmployeeData> findByCity(String city);
	
}
