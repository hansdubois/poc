Feature: test

  Scenario: Search on google
    Given I'm on google.com
    When I search for kittens
    Then I want to see kittens
