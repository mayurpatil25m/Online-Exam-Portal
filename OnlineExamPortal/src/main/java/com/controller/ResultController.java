package com.controller;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Result;

@RestController
@CrossOrigin("http://localhost:4200")
public class ResultController 
{
	@Autowired
	SessionFactory factory;
	
	@RequestMapping("saveResult")
	public void saveResult(@RequestBody Result result)
	{
		System.out.println(result);
		
		Session session=factory.openSession();
		
		Transaction tx=session.beginTransaction();
			
				session.persist(result);
		
		tx.commit();
	}
	
	
	@RequestMapping("getResults/{subject}")
	public List<Result> getResults(@PathVariable String subject)
	{
		Session session=factory.openSession();
		
		Query query=session.createQuery("from Result where subject=:subject");
		
		query.setParameter("subject", subject);
		
		List<Result> list =query.list();
		
		return list;
	}
	
	
	
	@RequestMapping("getResults2/{subject}/{startIndex}")
	public List<Result> getResults2(@PathVariable String subject,@PathVariable int startIndex)
	{
		System.out.println("pageno is " + startIndex);
		
		int[] indexarray= {0,3,6,9,12,15};
		
		Session session=factory.openSession();
		
		Query query=session.createQuery("from Result where subject=:subject");
		
		query.setParameter("subject", subject);
		
		query.setMaxResults(3);
		
		startIndex=indexarray[startIndex-1];
		
		query.setFirstResult(startIndex);
		
		List<Result> list =query.list();
		
		return list;
	}
	
	
	
	
	
	
	
	
}
