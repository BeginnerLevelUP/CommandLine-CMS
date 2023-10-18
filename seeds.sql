INSERT INTO departments (name) VALUES
    ('Department 1'),
    ('Department 2'),
    ('Department 3'),
    ('Department 4'),
    ('Department 5');

INSERT INTO roles (title, salary, department_id) VALUES
('Role 1', 60000, 1),
('Role 2', 50000, 1),
('Role 3', 45000, 2),
('Role 4', 55000, 2),
('Role 5', 48000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Employee', 'One', 1, NULL),
('Employee', 'Two', 2, 1),
('Employee', 'Three', 3, 1),
('Employee', 'Four', 4, 2),
('Employee', 'Five', 5, 2);
