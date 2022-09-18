@book-api
Feature: Boot API service CRUD Testing
  As a user
  I want to send a new book request to the Book API service

  Scenario Outline: create a book
    Given A <book>
    When I send POST request to /books/
    Then I get create response code 200
    Then I send GET request to /books/
    Then I get status response code 200

    Examples:
      | book |
      | {"name": "Indra's Chronicle"} |


