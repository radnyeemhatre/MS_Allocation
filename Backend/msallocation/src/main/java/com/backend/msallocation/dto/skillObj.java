package com.backend.msallocation.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class skillObj {
	private int skillId;
	private String skillName;
	private Date createdOn;
	private String createdBy;
 }
