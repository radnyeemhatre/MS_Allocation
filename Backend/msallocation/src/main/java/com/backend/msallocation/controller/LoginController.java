package com.backend.msallocation.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.msallocation.model.LoginUser;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class LoginController {
	@PostMapping("/login")
	public LoginUser LoginUser(@RequestBody LoginUser loginUser) {
		System.out.println(loginUser.getEmail());
		return loginUser;
	}
	@GetMapping("/trial")
	public String trial() {
		System.out.println("hii");
		return "hii";
	}

}
