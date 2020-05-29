package com.backend.msallocation.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.msallocation.dto.LoginUser;

@RestController
@RequestMapping("/api")
public class LoginControllerImpl implements LoginController {
	@PostMapping("/login")
	public LoginUser LoginUser(@RequestBody LoginUser loginUser) {
		System.out.println(loginUser.getEmail() + "," + loginUser.getName() + "," + loginUser.getToken());
		return loginUser;
	}
}
