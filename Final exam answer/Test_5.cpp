#include <iostream>
#include <string>

using namespace std;

class Student {
public:
	Student(string ID, string name, string course, double JavaScriptGrade, double DataStructureGrade);
	~Student();
	void display();
private:
	string ID;
	string name;
	string course;
	double grade1;
	double grade2;
	double averageGrade;
};

Student::Student(string ID, string name, string course, double JavaScriptGrade, double DataStructureGrade) {
	this->ID = ID;
	this->name = name;
	this->grade1 = JavaScriptGrade;
	this->grade2 = DataStructureGrade;
	this->averageGrade = (grade1 + grade2) / 2;
}

Student::~Student() {

}

void Student::display() {
	cout << "ID:" << ID << endl; 
	cout << "name:" << name << endl;
	cout << "JavaScriptGrade: " << grade1 << endl;
	cout << "DataStructureGrade: " <<grade2 << endl;
	cout << "AverageGrade:: "<< averageGrade << endl;
	cout << endl;
}

int main(void) {
	Student SakuraNeko("2014210774", "SakuraNeko", "JavaScript", 99.99, 88.88);
	Student SakuraNekoSon("2014210779", "LiuYongZhuo", "C++", 0.99, 8.88);
	SakuraNeko.display();
	SakuraNekoSon.display();
}