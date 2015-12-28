#include <iostream>
using namespace std;
int main(void) {
    int year, month;
    int a[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    bool IsLeapYear;

    cout << "Please enter the year" << endl;
    cin >> year;
    cout << "Please enter the month" << endl;
    cin >> month;
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        IsLeapYear = true;
    }
    if (IsLeapYear == true) {
        a[1] = 29;
    }
    switch(month) {
        case 1:
            cout << a[0] << endl;
            break;
        case 2:
            cout << a[1] << endl;
            break;
        case 3:
            cout << a[2] << endl;
            break;
        case 4:
            cout << a[3] << endl;
            break;
        case 5:
            cout << a[4] << endl;
            break;
        case 6:
            cout << a[5] << endl;
            break;
        case 7:
            cout << a[6] << endl;
            break;
        case 8:
            cout << a[7] << endl;
            break;
        case 9:
            cout << a[8] << endl;
            break;
        case 10:
            cout << a[9] << endl;
            break;
        case 11:
            cout << a[10] << endl;
            break;
        case 12:
            cout << a[11] << endl;
            break;
        default:
            cout << "Your enter number is wrong" << endl;
    }
}
