
CREATE TABLE teacher (
   teacher_id INTEGER GENERATED ALWAYS AS IDENTITY,
   first_name VARCHAR(255) NOT NULL,
   surname VARCHAR(255) NULL,
   PRIMARY KEY(teacher_id)
);

CREATE TABLE course(
   course_id INTEGER GENERATED ALWAYS AS IDENTITY,
   teacher_id INT,
   course_name VARCHAR(255) NOT NULL,
   course_length VARCHAR(100),
   PRIMARY KEY(course_id),
   CONSTRAINT fk_person
      FOREIGN KEY(teacher_id) 
	    REFERENCES teacher(teacher_id)
);
