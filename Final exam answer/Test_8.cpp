#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(void) {
	const int SIZE = 10;
	int a[SIZE] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	std::vector<int> v(a, a+SIZE);

	ostream_iterator <int> output(cout, "");
	cout << "堆排序之前：" << endl;
	copy(v.begin(), v.end(), output);

	make_heap(v.begin(), v.end());
	cout << "\n建堆之后：" << endl;
	copy(v.begin(), v.end(), output);

	sort_heap(v.begin(), v.end());
	cout << "\n堆排序后：" << endl;
	copy(v.begin(), v.end(), output);

	cout << endl;

	return 0;
}