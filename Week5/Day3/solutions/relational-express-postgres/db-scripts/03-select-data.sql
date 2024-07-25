
SELECT * from teacher;

SELECT * from course;

SELECT t.*, c.*
FROM teacher t
INNER JOIN course c ON t.teacher_id = c.teacher_id;

SELECT t.*, c.*
FROM teacher t
LEFT JOIN course c ON t.teacher_id = c.teacher_id;

SELECT t.*, c.*
FROM teacher t
FULL OUTER JOIN course c ON t.teacher_id = c.teacher_id;
