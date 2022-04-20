package com.vaibhav.maximaBackendTask.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vaibhav.maximaBackendTask.Model.EmployeeData;
import com.vaibhav.maximaBackendTask.Repository.DataRepository;
import com.vaibhav.maximaBackendTask.ServiceLayer.DataService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {

	@Autowired
	private DataRepository dataRepository;

	@Autowired
	private DataService dataService;
	
	@GetMapping("/")
	public String home() {
		return ("<h1>Welcome</h1>");

	}

	// Get details
	@GetMapping("/getdata")
	public List<EmployeeData> getdata() {
		return this.dataRepository.findAll();
	}

	// Add details

	@PostMapping("/adddata")
	public EmployeeData AddDetails(@RequestBody EmployeeData data) {
		return this.dataService.AddData(data);
	}
	
	
	//Fetch data using Particular Field
	
	@GetMapping("/getdatabycity")
	public ResponseEntity<List<EmployeeData>> getDataByCity(@RequestParam String city){
		return new ResponseEntity<List<EmployeeData>>(dataRepository.findByCity(city),HttpStatus.OK);
		
	}
  
}
