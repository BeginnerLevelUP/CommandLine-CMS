
// const inquirer=require('inquirer')

const  inquirer= require("inquirer");




const actions = {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role',
    ],
};


//Adding Departments
const addDp = {
    type: 'input',
    name: 'addDepartment',
    message: 'Add Department',
}
//Adding Roles
const addRole=[
    {
    type: 'input',
    name: 'title',
    message: 'Insert Title'
},
    {
        type: 'input',
        name: 'salary',
        message: 'Insert Salary'
    },
    {
        type: 'input',
        name: 'departmentID',
        message: 'Insert Department ID'
    }
]


//Adding Employee
const addEmp = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter First Name',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter Last Name',
    },
    {
        type: 'input',
        name: 'roleID', 
        message: 'Enter Role ID',
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Enter Manager ID',
    }
];


//Adding Employee
const updateEmp= {
    type: 'input',
    name: 'updateEmployee',
    message: 'Update Employee',
}

function roleQuery(sql) {
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cms_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');
});

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Error executing SQL query:', error);
        } else {
            console.log('Query results:', results);
        }
         connection.end();
    });
}

inquirer.prompt(actions)
    .then(data => {
        switch (data.action) {
            case 'view all departments':
                console.log('Viewing all departments');
                roleQuery('SELECT * FROM departments');
                break;

            case 'view all roles':
                console.log('Viewing all roles');
                roleQuery('SELECT * FROM roles');
                break;
            case 'view all employees':
                console.log('Viewing all employees');
                roleQuery('SELECT * FROM employees');
                break;
            case 'add a department':
                console.log('Adding a new department');
                inquirer.prompt(addDp).then((data) => {
                    // Handle adding a new department here
                    console.log('Adding department:', data.addDepartment);
                    roleQuery(`INSERT INTO departments (name) VALUES ('${data.addDepartment}')`);
                });
                break;
            case 'add a role':
                inquirer.prompt(addRole).then((data) => {
                    console.log(`Adding role: ${data.addRole}`);
                    roleQuery(`INSERT INTO roles (title, salary, department_id) VALUES ('${data.title}', ${data.salary}, ${parseInt(data.departmentID)})`);
                });
                break;
            case 'add an employee':
                inquirer.prompt(addEmp).then((data) => {
                    console.log(`Adding a new employee: ${data.firstName} ${data.lastName}`);

                    roleQuery(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${data.firstName}', '${data.lastName}', ${parseInt(data.roleID)}, ${data.managerID})`);
                });

                break;
            case 'update an employee role':
                console.log('Updating an employee');
                inquirer.prompt(updateEmp).then((data) => {
                    // Handle updating an employee role here
                    console.log('Updating employee:', data.updateEmployee);
                });
                break;
                default:
                    console.log('Not a Valid Action')
        }
    });
                                                                                               
     