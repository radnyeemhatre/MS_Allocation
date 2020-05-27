package com.backend.msallocation.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.backend.msallocation.constants.Queries;
import com.backend.msallocation.model.Skill;
import com.backend.msallocation.rowMapper.SkillsRowMapper;

@Repository
public class CandidateMangementFunctionalDAOImpl implements CandidateMangementFunctionalDAO {
	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;

	Queries query;

	@Override
	public List<Skill> getSkills() {
	
		return jdbcTemplate.query(query.GET_SKILLS_LIST,SkillsRowMapper.skillsRowMapperLambda);
	}

}
