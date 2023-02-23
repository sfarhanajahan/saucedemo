Feature: Checkout product
  The test to checkout products

  Scenario: Checkout product
    When I signin saucedemo with "standard_user" and "secret_sauce"
    Then I successfully login
    Then I added "Sauce Labs Bolt T-Shirt"
    And The "Bolt T-Shirt" price is "$15.99"
    Then I added "Sauce Labs Backpack"
    Then I checkout
    And The "Total" price is "$49.66"
    Then I finish the order