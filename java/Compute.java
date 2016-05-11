import java.util.*;

public class Compute {
	public static void main(String[] args) {
		// init
		Scanner input = new Scanner(System.in);
		int M, N, K;

		System.out.println("This is a programe help you compute (MxN) X (NxK) ");
		System.out.println("Please enter number M");
		M = input.nextInt();
		System.out.println("Please enter number N");
		N = input.nextInt();
		System.out.println("Please enter number K");
		K = input.nextInt();

		int MN[ ][ ] = new int[M][N];
		int NK[ ][ ] = new int[N][K];
		int MK[ ][ ] = new int[M][K];

		System.out.println("Please Enter (MxN)'s number");

		for (int i = 0; i < M; i++) {
			for (int j = 0; j < N; j++) {
				MN[i][j] = input.nextInt();
			}
		}

		System.out.println("Please Enter (NxK)'s number");

		for (int i = 0; i < N; i++) {
			for (int j = 0; j < K; j++) {
				NK[i][j] = input.nextInt();
			}
		}

		for (int i = 0; i < M; i++) {
			for (int j = 0; j < K; j++) {
				for (int k = 0; k < N; k++) {
					MK[i][j] += MN[i][k] * NK[k][j];
				}
			}
		}

		for (int i = 0; i < M; i++) {
			for (int j = 0; j < K; j++) {
				System.out.println(MK[i][j]);
			}
		}


	}
}
