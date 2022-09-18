@health
Feature: Health Check for Book API
  As a user
  I want to check overall health of Book API service

  Scenario: get health
    Given The Book API service is up
    When I send GET health request to /health
    Then I get response code 200 and health status UP


