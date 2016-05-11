import java.text.*;
import java.util.*;

interface APIGiveScore {
    float getAverage(float[] score);
}

class Score implements APIGiveScore {

    private float[] score;

    public Score() {
        this.score = new float[7];
    }

    public void setScore() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Please enter score:");
        for(int i = 0; i < 7; i++) {
            this.score[i] = sc.nextFloat();
        }
    }

    public float[] getScore() {
        return score;
    }

    @Override
    public float getAverage(float[] score) {

        float average = 0;
        for(float i : score){
            average += i;
        }
        return average/7;

    }
}

class DeScore extends Score implements APIGiveScore {

    @Override
    public float getAverage(float[] score) {

        float average = 0;
        Arrays.sort(score);
        for(int i=1; i<6; i++)
            average += score[i];
        return average/5;
    }
}

public class ComputeScore {
	public static void main(String[] args) {
    // init
    int way;
    Scanner input = new Scanner(System.in);

    System.out.println("Please choose the way ");
    way = input.nextInt();
    //Choose a way

    DecimalFormat df = new DecimalFormat("#.00");

    Score score = new Score();
    DeScore deScore = new DeScore();

    if(way == 1) {
      score.setScore();
        System.out.println("Your average score is: " + df.format(score.getAverage(score.getScore())));
    }

    if(way == 2) {
      deScore.setScore();
        System.out.println("Your average score is: "
                + df.format(deScore.getAverage(deScore.getScore())));
    }

  }
}
