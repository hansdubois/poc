Feature: test

  Scenario: Search on google
    Given I'm on google.com
    When I search for kittens
    Then I see Welkom bij Kitten Te Koop
