package com.backend.msallocation.service;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.msallocation.dao.CandidateMangementFunctionalDAO;
import com.backend.msallocation.model.Skill;

@Service
public class CandidateManagementFunctionalServiceImpl implements CandidateManagementFunctionalService {

	@Autowired
	CandidateMangementFunctionalDAO cmFunctionalDao;

	@Override
	public List<Skill> getSkills() {
		List<String> res=new LinkedList<String>();
		// TODO Auto-generated method stub
		//List<Map<String, Object>> list= cmFunctionalDao.getSkills();
		return cmFunctionalDao.getSkills();
	}

}
