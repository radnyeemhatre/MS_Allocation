package com.backend.msallocation.rowMapper;

import org.springframework.jdbc.core.RowMapper;

import com.backend.msallocation.constants.Queries;
import com.backend.msallocation.dto.skillObj;

public class SkillsRowMapper {
	
	public static final RowMapper<skillObj> skillsRowMapperLambda=(rs,rownum)-> {
		skillObj skill=new skillObj();
		skill.setSkillId(rs.getInt(Queries.SKILL_ID));
		skill.setSkillName(rs.getString(Queries.SKILL_NAME));
		skill.setCreatedOn(rs.getDate(Queries.CREATED_ON));
		skill.setCreatedBy(rs.getString(Queries.CREATED_BY));
        return skill;
	};

}
