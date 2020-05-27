package com.backend.msallocation.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.msallocation.dao.CandidateMangementFunctionalDAO;

@Service
public class CandidateManagementFunctionalServiceImpl implements CandidateManagementFunctionalService{

	@Autowired
	CandidateMangementFunctionalDAO cmFunctionalDao;
	@Override
	public List<Map<String, Object>> getSkills() {
		// TODO Auto-generated method stub
		return cmFunctionalDao.getSkills();
	}

}
