CREATE TABLE roles (
	code VARCHAR(100) PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

INSERT INTO roles(code, name) VALUES ('super_admin', 'Super Admin'); 

CREATE TABLE permissions (
	code VARCHAR(100) PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

INSERT INTO permissions(code, name) VALUES ('view_user', 'View user');
INSERT INTO permissions(code, name) VALUES ('add_user', 'Add user');
INSERT INTO permissions(code, name) VALUES ('edit_user', 'Edit user');
INSERT INTO permissions(code, name) VALUES ('remove_user', 'Remove user');

CREATE TABLE role_permission (
	role_code VARCHAR(100) REFERENCES roles(code),
	permission_code VARCHAR(100) REFERENCES permissions(code),
	PRIMARY KEY (role_code, permission_code)
);

INSERT INTO role_permission(role_code, permission_code) VALUES ('super_admin', 'view_user');
INSERT INTO role_permission(role_code, permission_code) VALUES ('super_admin', 'add_user');
INSERT INTO role_permission(role_code, permission_code) VALUES ('super_admin', 'edit_user');
INSERT INTO role_permission(role_code, permission_code) VALUES ('super_admin', 'remove_user');

CREATE TABLE user_profiles (
	id SERIAL PRIMARY KEY,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	dob DATE,
	phone VARCHAR(15),
	address VARCHAR(255),
	hometown VARCHAR(255),
	email VARCHAR(255)
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(60) NOT NULL,
	role_code VARCHAR(100) NOT NULL REFERENCES roles(code),
	profile_id INT REFERENCES user_profiles(id),
	is_active BOOLEAN DEFAULT TRUE,
	created_by INT NOT NULL REFERENCES users(id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_by INT REFERENCES users(id),
	updated_at TIMESTAMP
);

INSERT INTO users(id, name, email, password, role_code, created_by) VALUES (1, 'Super Admin', 'admin@admin.com', '$2a$10$ho0BRn./QZ0DialF0Qsq4uKLZgup2HZc.EFiV.hk0P6LVQEl5JwEq', 'super_admin', 1)

DROP TABLE users;
DROP TABLE user_profiles;
DROP TABLE role_permission;
DROP TABLE permissions;
DROP TABLE roles;