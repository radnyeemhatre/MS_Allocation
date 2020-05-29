package com.backend.msallocation.model;

import java.util.Date;
import java.util.List;

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
public class Grad {
	
	@ManyToOne(cascade = CascadeType.ALL)
	private User createdBy;
	
	
    @Temporal(TemporalType.TIMESTAMP)
	private Date createdOn;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private User updatedBy;
	
	
    @Temporal(TemporalType.TIMESTAMP)
	private Date updatedOn;
	
	@Id
    @GeneratedValue
	private int gradId;
	
	
	private String gradFirstName;
	
	
	private String gradMiddleName;
	
	private String gradLastName;
	
	private String gender;
	
	private String email;
	
	private long contact;
	
	private String houseNo;
	
	private String street;
	
	private String city;
	
	private String state;
	
	private int zipcode;
	
	private String institute;

	private String degree;
	
	private String branch;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date joiningDate;

	private String joiningLocation;
	
	private String feedback;
	
	@ManyToMany
	private List<Skill> skills;
	
	

}
