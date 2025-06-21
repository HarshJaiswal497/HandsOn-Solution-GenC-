public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        double nextValue = currentValue * (1 + growthRate / 100);
        return calculateFutureValue(nextValue, growthRate, years - 1);
    }

    // Iterative version for large inputs or performance efficiency
    public static double calculateFutureValueIterative(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate / 100);
        }
        return currentValue;
    }
}
