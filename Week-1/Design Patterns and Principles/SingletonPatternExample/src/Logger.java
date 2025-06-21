public class Logger {

    // Step 1: Private static instance of the class (eager instantiation)
    private static Logger instance = new Logger();

    // Step 2: Private constructor so no other class can instantiate it
    private Logger() {
        System.out.println("Logger Initialized.");
    }

    // Step 3: Public method to provide access to the instance
    public static Logger getInstance() {
        return instance;
    }

    // Utility method to simulate logging
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
