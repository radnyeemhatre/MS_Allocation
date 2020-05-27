package com.backend.msallocation.constants;

public class Queries {
//	public static final String ="";
	// GRAD TABLE CONSTANTS
	public static final String GRAD_ID = "grad_id";
	public static final String GRAD_FIRSTNAME = "grad_first_name";
	public static final String GRAD_MIDDLENAME = "grad_middle_name";
	public static final String GRAD_LASTNAME = "grad_last_name";
	public static final String GENDER = "grad_gender";
	public static final String EMAIL = "grad_email";
	public static final String CONTACT = "grad_contact";
	public static final String INSTITUTE = "grad_institute";
	public static final String DEGREE = "grad_degree";
	public static final String BRANCH = "grad_branch";
	public static final String DOJ = "doj";
	public static final String JOINING_LOCATION = "joining_location";

	// SKILLS CONSTANTS
	public static final String SKILL_ID = "skill_id";
	public static final String SKILL_NAME = "skillname";
	public static final String SKILL_VALUE = "skill";

	// ADDRESS CONSTANTS
	public static final String ADDRESS_ID = "address_id";
	public static final String STREET = "street";
	public static final String CITY = "city";
	public static final String STATE = "state";

	// INSERT IN GRAD TABLE
	public static final String INSERT_GRAD = "insert into grad_details(" + GRAD_FIRSTNAME + " , " + GRAD_MIDDLENAME
			+ " , " + GRAD_LASTNAME + " , " + GENDER + " , " + EMAIL + " , " + CONTACT + " , " + INSTITUTE + " , "
			+ DEGREE + " , " + BRANCH + " , " + DOJ + " , " + JOINING_LOCATION
			+ ") values (:fname,:mname,:lname,:gender,:email,:contact,:institute,:degree,:branch,:doj,:location)";

	// INSERT IN ADDRESS TABLE
	public static final String INSERT_ADDRESS = "insert into address(" + GRAD_ID + "," + STREET + "," + CITY + ","
			+ STATE + ") values(:g_id,:street,:city,:state)";

	// INSERT IN GARD_SKILS
	public static final String INSERT_GRAD_SKILL = "insert into grad_skills(" + GRAD_ID + "," + SKILL_NAME + ","
			+ SKILL_VALUE + ") values(:gid,:sid,:skill)";

	
	// FETCH SKILLS LIST
	public static final String GET_SKILLS_LIST = "select * from skills";

}
