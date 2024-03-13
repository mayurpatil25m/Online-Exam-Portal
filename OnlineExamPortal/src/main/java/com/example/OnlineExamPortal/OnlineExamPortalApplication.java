package com.example.OnlineExamPortal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

import jakarta.persistence.Entity;

import java.util.*;

@SpringBootApplication
@ComponentScan("com")
@EntityScan("com")
public class OnlineExamPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineExamPortalApplication.class, args);
		
		int len=new String().length();
		ArrayList<Integer> al =new ArrayList<>();
		al.add(10);
		al.add(20);
		al.add(30);
		HashSet<Integer> hashSet=new HashSet<Integer>(al);
		System.out.println(hashSet);
	}

}
