#include <iostream>

using namespace std;

class Vehicle {
public:
	Vehicle() {
	}
	~Vehicle() {
	}
};

class Car : public Vehicle {
public:
	Car() {
	}
	~Car() {
	}
	void display() {
		cout << "Car" << endl;
	}
};

int main(void) {
	Car A;
	A.display();
}