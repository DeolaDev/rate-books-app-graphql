# Simple 'Book Rating' App

I implemented a GraphQL application connected to multiple DynamoDB tables using AWS AppSync.

One DynamoDB table is populated with form data inputed by users and displayed when user clicks on the submit button.

The second DynamoDB is populated from CSV flies uploaded to an S3 bucket. I implemented a lambda function that imports the CSV data into DynamoDB, and set up S3 and Lambda Event triggers to update the database anytime a new .csv file is uploaded to the target bucket.

--->>> https://main.d2oepvihy9cqj1.amplifyapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
