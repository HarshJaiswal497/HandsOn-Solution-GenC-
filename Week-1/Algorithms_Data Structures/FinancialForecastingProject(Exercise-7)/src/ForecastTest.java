public class ForecastTest {
    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 5.0;
        int years = 10;

        double recursiveResult = FinancialForecasting.calculateFutureValue(initialValue, growthRate, years);
        double iterativeResult = FinancialForecasting.calculateFutureValueIterative(initialValue, growthRate, years);

        System.out.printf("Recursive Forecast after %d years: %.2f\n", years, recursiveResult);
        System.out.printf("Iterative Forecast after %d years: %.2f\n", years, iterativeResult);
    }
}
