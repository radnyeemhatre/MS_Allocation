package com.backend.msallocation.rowMapper;

import org.springframework.jdbc.core.RowMapper;

import com.backend.msallocation.constants.Queries;
import com.backend.msallocation.model.Skill;

public class SkillsRowMapper {
	
	public static final RowMapper<Skill> skillsRowMapperLambda=(rs,rownum)-> {
		Queries query=new Queries();
		Skill skill=new Skill();
		skill.setSkillID(rs.getInt(query.SKILL_ID));
		skill.setSkillName(rs.getString(query.SKILL_NAME));
        return skill;
	};

}
