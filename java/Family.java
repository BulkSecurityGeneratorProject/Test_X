public class Family {

    private String firstName;
    private String lastName;
    private static int number;

    public Family(String firstName, String lastName){
      this.firstName = firstName;
	    this.lastName = lastName;
      number++;
    }

    public String getName() {
        return firstName + lastName;
    }

    public static int getNumber() {
        return number;
    }

    public static void main(String[] args){

      Family sakuraNeko = new Family("Sakura", "Neko");
	    Family candyNeko = new Family("Candy", "Neko");
      Family grepNeko = new Family("Grep", "Neko");
      Family codeNeko = new Family("Code", "Neko");

      System.out.println("The number: " + Family.getNumber());
	    System.out.println(sakuraNeko.getName());
	    System.out.println(candyNeko.getName());
	    System.out.println(grepNeko.getName());
      System.out.println(codeNeko.getName());
    }
}
