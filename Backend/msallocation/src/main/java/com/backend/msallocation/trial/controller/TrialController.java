package com.backend.msallocation.trial.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrialController {
	@GetMapping("/trial")
	public String getTrialData()
	{
		return "hello";
	}

}
