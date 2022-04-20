package com.vaibhav.maximaBackendTask.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EmployeeData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="Fname")
	private String firstName;
	@Column(name="Lname")
	private String lastName;
	@Column(name="Email")
	private String email;
	@Column(name="city")
	private String city;

	public EmployeeData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EmployeeData(int id, String firstName, String lastName, String email, String city) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.city = city;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "EmployeeData [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", city="
				+ city + "]";
	}

		
	
	
	
	
}
