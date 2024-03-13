package com.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class admin {

	@Id
	String username;
	String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "admin [username=" + username + ", password=" + password + "]";
	}
	
	public boolean equals(Object secondobject) 
	{
				
		System.out.println("equals from User class");
		
		admin user=(admin)secondobject;
		
		if(this.username.equals(user.username) && this.password.equals(user.password))
			
			return true;
		else
			return false;
	}
}
	
