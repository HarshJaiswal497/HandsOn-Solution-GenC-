public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shirt", "Apparel"),
                new Product(103, "Mouse", "Electronics"),
                new Product(104, "Book", "Education")
        };

        // Linear Search
        Product result1 = SearchUtility.linearSearch(products, "Shirt");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not found"));

        // Binary Search (requires sorting first)
        SearchUtility.sortProductsByName(products);
        Product result2 = SearchUtility.binarySearch(products, "Mouse");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not found"));
    }
}
