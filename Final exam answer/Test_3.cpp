#include <iostream>
#define N 200

using namespace std;

int SubStrNum(char *str, char *substr);

int main(void) {
	char str[N];
	char substr[N];
	cout << "请输入字符串str: " << endl;
	cin >> str;
	cout << "请输入子串substr: " << endl;
	cin >> substr;
	cout << "match times:" << SubStrNum (str, substr) << endl;
}

int SubStrNum(char *str, char *substr) {
	int times = 0;
	int s1, s2;
	bool isTrue = true;
	s1 = strlen(str);
	s2 = strlen(substr);
	
	for(int p1 = 0; p1 < s1; p1++) {
		
		int k1 = p1;
		
		for(int p2 = 0; p2 < s2; p2++, k1++) {
			if(str[k1] != substr[p2]) {
				isTrue = false;
			}
		}
		if (isTrue == true) {
			times++;	
		}
		
		isTrue = true;
	}

	return times;
}