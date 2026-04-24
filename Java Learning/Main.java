import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double weight;
        double newWeight;
        int choice;

        System.out.println("Weight Conversion Program");
        System.out.println("1. lbs to Kilograms");
        System.out.println("2. Kilograms to lbs");

        System.out.print("Enter your choice (1 or 2): ");
        choice = sc.nextInt();

        if(choice == 1) {
            System.out.println("Enter weight in lbs: ");
            weight = sc.nextDouble();
            newWeight = weight * 0.453592;
            System.out.printf("The new weight in kgs is: %.2f\n", newWeight );
        }
        else if(choice == 2) {
            System.out.println("Enter weight in kgs: ");
            weight = sc.nextDouble();
            newWeight = weight * 2.20462;
            System.out.printf("The new weight in lbs is: %.2f\n", newWeight );
        }

        System.out.println(choice);

        sc.close();
    }
    }
