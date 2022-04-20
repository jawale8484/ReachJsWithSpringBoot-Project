package com.vaibhav.maximaBackendTask.ServiceLayer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vaibhav.maximaBackendTask.Model.EmployeeData;
import com.vaibhav.maximaBackendTask.Repository.DataRepository;

@Service
public class DataServiceImpl implements DataService {

	@Autowired
	DataRepository dataRepository;

	@Override
	public EmployeeData AddData(EmployeeData data) {
		dataRepository.save(data);
		return data;
	}

}
