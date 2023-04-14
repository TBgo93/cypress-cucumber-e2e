import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

When("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});

Then("I click search", () => {
  cy.get("input#search_button_homepage").click();
});