#include <stdio.h>
#include <algorithm>
using namespace std;
#define			MAXN		100005
typedef			long long		ll ;
ll a[MAXN], tmp[MAXN];

bool cmp(const int &x, const int &y)
{
	return a[x] < a[y];
}
ll SQR(ll x) { return x * x; }
ll G(int i, int j)
{
	return SQR(i-j) + SQR(a[i]-a[j]);
}
ll solve(int l, int r)
{
	if (l == r) return 9999999999999999LL;
	if (l + 1 >= r) return G(l,r) ;
	int mid = (l + r) / 2;
	ll ans = min(solve(l, mid), solve(mid+1, r));

	int nTmp = 0;
	for (int i = mid; i >= l; i--) if (SQR(mid - i) < ans) tmp[nTmp++] = i; else break;
	for (int i = mid+1; i <= r; i++) if (SQR(i-mid) < ans) tmp[nTmp++] = i; else break;
	sort(tmp, tmp+nTmp, cmp);
	for (int i = 0; i < nTmp; i++)
		for (int j = i+1; j < nTmp; j++) {
			int k1 = tmp[i], k2 = tmp[j];
			if (SQR(a[k1]-a[k2]) > ans) break;
			ans = min(ans, G(k1,k2));
		}
	return ans;
}
int main()
{
	int n;
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) scanf("%I64d", &a[i]), a[i] = a[i-1] + a[i];

	printf("%I64d\n", solve(1, n));
	return 0;
}
