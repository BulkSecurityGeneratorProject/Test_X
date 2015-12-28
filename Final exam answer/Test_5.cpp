#include <iostream>
#include <string>

using namespace std;

class Student {
public:
	Student(char ID, char name[], char course[], double JavascriptGrade, double DataStructureGrade);
	~Student();
	char showID();
	char showName();
	char showCourse();
private:
	char ID[20];
	char name[20];
	char course[20];
	double grade1;
	double grade2;
	double averageGrade;
};

Student::Student(char ID, char name[], char course[], double JavascriptGrade, double DataStructureGrade) {
	strcpy(this->ID, ID);
	strcpy(this->name, name);
	strcpy(this->course, course);
	this->grade1 = JavascriptGrade;
	this->grade2 = DataStructureGrade;
	averageGrade = (JavascriptGrade + DataStructureGrade) / 2;
}

Student::~Student() {

}



int main(void) {
	Student SakuraNeko("2014210774", "SakuraNeko", "JavaScript", 99.99, 88.88);
	cout << SakuraNeko.ID << endl;
	cout << SakuraNeko.name << endl
	cout << SakuraNeko.course << endl;
	cout << SakuraNeko.averageGrade << endl
}