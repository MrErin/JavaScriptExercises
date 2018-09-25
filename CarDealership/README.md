# Car Dealership Database

## Requirements:

Copy the JSON from cars.json and assign it to a variable in a new application. This data holds sales information for a car dealership. Your job is to produce the following reports for the dealership based on their total 2017 sales.

[Requirements Link](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-3-the-initiate/chapters/JS_ARRAY_METHODS.md)

## Stretch Goals:

* styling reports

## Completed features:

* Report structure
* Required reports:
    1. Total profit for 2017
    1. Which bank provided the most loans to our customers?
    1. Which model was the most popular?
    1. In which month did they sell the most cars?
    1. Which salesperson sold the most cars?
    1. Which salesperson made the most profit?

## Data Structure:

[array of objects]
(everything is a string unless otherwise noted)

* vehicle {obj}
  * Year (number)
  * Model
  * Make
  * Color
* sales_id
* sales_agent {obj}
  * mobile
  * last_name
  * first_name
  * email
* purchase_date
* gross_profit (number)
* credit {obj}
  * credit_provider
  * account

## To run

1. Clone the repo.
2. From the command line, cd into the directory.
3. Type ```hs -o``` into the command line.