#include <string>
#include <iostream>

using namespace std;

int main(void) {
	string text;
	string OldStr, NewStr;
	string::iterator itr = text.begin();
	int pos1 = 0, pos2 = 0;
	int num = 0;
	cout << "输入原文本：" << endl;
	cin >> text;
	cout << "输入想要被替换的文本：" << endl;
	cin >> OldStr;
	cout << "输入用于替换的文本：" << endl;
	cin >> NewStr;
	while((pos2 = text.find(OldStr,pos1)) != string::npos) {
		text.replace(pos2, OldStr.length(), NewStr);
		pos1 = pos2 + NewStr.length();
		num++;
	}
	cout << num << " 总替换次数： " << endl;
	cout << "替换后文本："<< endl << text << endl;
	return 0;
}