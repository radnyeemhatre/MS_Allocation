package com.backend.msallocation.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.backend.msallocation.constants.Parameters;
import com.backend.msallocation.constants.Queries;

@Repository
public class CandidateMangementFunctionalDAOImpl implements CandidateMangementFunctionalDAO {
	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;

	Queries query;
	
	@Override
	public List<Map<String, Object>> getSkills() {
		SqlParameterSource parameters = new MapSqlParameterSource();
		return jdbcTemplate.queryForList(query.GET_SKILLS_LIST,parameters);
	}
	
	

}
