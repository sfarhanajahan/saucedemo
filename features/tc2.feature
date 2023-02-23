Feature: Unsuccessfully sign in
  The test to a unsuccessful login
 
  Scenario: Unsuccessfully sign in
    When I signin saucedemo with "locked_out_user" and "secret_sauce"
    Then I unsuccessfully login