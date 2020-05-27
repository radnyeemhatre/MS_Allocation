package com.backend.msallocation.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.msallocation.model.Skill;
import com.backend.msallocation.service.CandidateManagementFunctionalService;

@RestController
@RequestMapping("/api")
public class CandidateManagementFunctionalController {
	
	@Autowired
	 CandidateManagementFunctionalService CMFunctionalService;
	
	@GetMapping("/getSkillsList")
	public List<Skill> getSkills()
	{
		//List<Map<String, Object>> skillsList=CMFunctionalService.getSkills();
		return CMFunctionalService.getSkills();
	}
	

}
