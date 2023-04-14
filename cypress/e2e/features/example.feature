Feature: duckduckgo.com
  Scenario: visiting the frontpage
    Given I visit duckduckgo.com
    When I should see a search bar
    Then I click search