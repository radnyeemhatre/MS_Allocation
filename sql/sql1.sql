use candidate_management;

create table users (email varchar(255) primary key, token varchar(100) not null, refresh_token varchar(100) unique key not null);

create table grad_details (
grad_id int primary key auto_increment,
grad_first_name varchar(50) not null,
grad_middle_name varchar(50) not null,
grad_last_name varchar(50) not null,
grad_gender varchar(10) not null,
grad_email varchar(255) not null,
grad_contact varchar(10) not null,
grad_institute varchar(50) not null,
grad_degree varchar(50) not null,
grad_branch varchar(20) not null,
doj date not null,
joining_location varchar(50) not null
);

create table skills (skill_id int primary key auto_increment,skillname varchar(50));

create table address(
address_id int primary key auto_increment,
grad_id int references grad_details(grad_id),
street varchar(50),
city varchar(50),
state varchar(50)
);

create table grad_skills(
grad_id int references grad_details(grad_id),
skill_id int references skills(skill_id),
skill varchar(50)
);

insert into skills(skillname) value("Other");
select * from skills;