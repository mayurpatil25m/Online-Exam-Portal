package com.controller;

import java.util.HashMap;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Answer;
import com.entity.User;
import com.entity.admin;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:4200")
public class LoginController {
	

	@Autowired
	SessionFactory factory;

	public static HttpSession httpsession;
	
	@PostMapping("validate")
	public Boolean validate(@RequestBody User userfrombrowser,HttpServletRequest request)
	{
		System.out.println("user from browser " + userfrombrowser);
		
		Session session=factory.openSession();
		
		User userfromdatabase=session.get(User.class,userfrombrowser.getUsername());
	
		System.out.println("user from database " +userfromdatabase);
		
		boolean answer=userfrombrowser.equals(userfromdatabase);
				
		System.out.println("answer from equals() of Object class is " + answer);
		
		if(answer) 
		{
					
					httpsession= request.getSession();
					
					httpsession.setAttribute("score",0);
					
					httpsession.setAttribute("questionIndex",0);
					
					
					HashMap<Integer,Answer> hashmap=new HashMap<>();
					
					httpsession.setAttribute("submittedDetails", hashmap);

					
		}
		
		return answer;
				
	}
	
	@PostMapping("validate2")
	public Boolean validate2(@RequestBody admin userfrombrowser,HttpServletRequest request)
	{
		System.out.println("user from browser " + userfrombrowser);
	
		Session session=factory.openSession();
		
		admin userfromdatabase=session.get(admin.class,userfrombrowser.getUsername());
		
		System.out.println("user from database " +userfromdatabase);
					
		// this refers to that object which is used to call method
		
		if(userfromdatabase==null)
		{
			return false;
		}
		
		boolean answer=userfrombrowser.equals(userfromdatabase);
				
		System.out.println("answer from equals() of Object class is " + answer);
			
		return answer;
	}
	
}