package com.backend.msallocation.constants;

public class Queries {
//	public static final String ="";
	// GRAD TABLE CONSTANTS
	public static final String CREATED_BY="created_by_user_email";
	public static final String CREATED_ON="created_on";
	public static final String UPDATED_BY="updated_by_user_email";
	public static final String UPDATED_ON="updated_on";
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
	public static final String DOJ = "joining_date";
	public static final String JOINING_LOCATION = "joining_location";

	// SKILLS CONSTANTS
	public static final String SKILL_ID = "skillid";
	public static final String SKILL_NAME = "skillname";
	public static final String SKILL_VALUE = "skill";

	// ADDRESS CONSTANTS
	public static final String HOUSE_NO = "house_no";
	public static final String STREET = "street";
	public static final String CITY = "city";
	public static final String STATE = "state";
	public static final String ZIPCODE = "zipcode";

	// INSERT IN GRAD TABLE
	public static final String INSERT_GRAD = "insert into grad(" + GRAD_FIRSTNAME + " , " + GRAD_MIDDLENAME + " , "
			+ GRAD_LASTNAME + " , " + GENDER + " , " + EMAIL + " , " + CONTACT + " , " + HOUSE_NO + " , " + STREET
			+ " , " + CITY + " , " + STATE + " , " + ZIPCODE + " , " + "" + INSTITUTE + " , " + DEGREE + " , " + BRANCH
			+ " , " + DOJ + " , " + JOINING_LOCATION+","+CREATED_BY+" , "+CREATED_ON+" , "+UPDATED_BY+" , "+UPDATED_ON
			+ ") values (:fname,:mname,:lname,:gender,:email,:contact,:houseNo,:street,:city,:state,:zipcode,"
			+ ":institute,:degree,:branch,:doj,:location,:createdBy,:createdOn,:updatedBy,:updatedOn)";

	// INSERT IN GARD_SKILS
	public static final String INSERT_GRAD_SKILL = "insert into grad_skills(" + GRAD_ID + "," + SKILL_ID + ","
			+ ") values(:gid,:sid)";

	//INSERT IN SKILL
	public static final String INSERT_IN_SKILL="insert into skill("+SKILL_NAME+" , "+CREATED_ON+" , "+CREATED_BY+") values"
			+ "(:skillName,:createdOn,:createdBy)";
	
	// FETCH SKILLS LIST
	public static final String GET_SKILLS_LIST = "select * from skills";

}
