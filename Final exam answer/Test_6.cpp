#include <iostream>
#include <string>

using namespace std;

class  Person {
public:
	Person(string name, string sex) {
		this->name = name;
	 	this->sex = sex;
	}

	~ Person() {
	}

	void display() {
		cout << "name: " << name << endl;
		cout << "sex: " << sex << endl;
	}

private:
	string name;
	string sex;
};

class Student :virtual public Person {
public:
	Student(string name, string sex, string major) : Person(name, sex) {
		this->major = major;
	}
	~Student();
	void display() {
		cout << "major: " << major << endl;
	}

private:
	string major;
};

class Teacher :virtual public Person {
public:
	Teacher(string name, string sex, string postion) : Person(name, sex) {
		this->postion = postion;
	}
	~Teacher();
	void display() {
		cout << "postion: " << postion << endl;
	}

private:
	string postion;
};

class StudentTeacher :public Teacher, public Student {
public:
	StudentTeacher(string name, string sex, string major, string postion) : Person(name, sex), Student(name, sex, major), Teacher(name, sex, postion){

	}
	~StudentTeacher();
	void display() {
		Person::display();
		Student::display();
		Teacher::display();
	}
};