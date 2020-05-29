package com.backend.msallocation.model;



import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Skill {
	@ManyToOne
	private User createdBy;
	
    @Temporal(TemporalType.TIMESTAMP)
	private Date createdOn;
	
	@Id
	@GeneratedValue
	private int skillID;
	
	private String SkillName;
}
