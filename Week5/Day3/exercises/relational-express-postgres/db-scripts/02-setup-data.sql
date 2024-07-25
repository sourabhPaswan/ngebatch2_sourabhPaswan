DELETE FROM course;
DELETE FROM teacher;

INSERT INTO teacher(first_name) 
    VALUES ('Gatsby');
INSERT INTO teacher(first_name, surname) 
    VALUES ('Wiggins', 'Pickering');

/* 
Guess the ids for the first two Teachers are "1" and "2"! 
With advanced sql we could SELECT the values and use them in the INSERT.
*/
INSERT INTO course(teacher_id, course_name, course_length) 
    VALUES (1, 'Physics', '3 Years');
INSERT INTO course(teacher_id, course_name) 
    VALUES (2, 'Philosphy');
