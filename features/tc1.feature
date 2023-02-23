Feature: Successfully sign in
  The test to a successful login
 
  Scenario: Successfully sign in
    When I signin saucedemo with "standard_user" and "secret_sauce"
    Then I successfully login