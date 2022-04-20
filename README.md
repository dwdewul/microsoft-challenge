# Flipgrid Microsoft Coding Challenge

## About

You can view the deployed site here: [https://dwdewul.github.io/microsoft-challenge/](https://dwdewul.github.io/microsoft-challenge/)

This project consists of a a sign up page and a confirmation page once the user has successfully signed up for the service.

The sign up page has three fields which are required for a successful sign up: their first name, email address and a password. There are form validations on each field. The user cannot submit the form until the form is valid and is indicated by the "Sign Up" button being both functionally and visibly disabled. Furthermore, there are helper texts below each input field indicating why that particular field is invalid.

| Field         | Requirements                                        |
| ------------- | --------------------------------------------------- |
| First Name    | Required.                                           |
| Email Address | Required. Must be a valid email address.            |
| Password      | Required. Must be at least 10 characters in length. |

Once the user has submitted the form they will be redirect to the confirmation page with their first name and email address displayed. Should that information not be available, say after a page refresh, the user will be redirected back to the sign up page. The "Sign In" button does not have any functionality per the instructions.

### Notes

I added a loading spinner that appears once the user submits their credentials in the sign up form. The spinner is governed by a timeout which is set to simulate a HTTP request to the server. If you would like to override this, you can open the console in the dev tools for the page and enter the following:

`localStorage.setItem('load_timeout_ms', '0');`

## How To Run the Project Locally

Node.js version > 14.15.0 is required.

You can download it [here](https://nodejs.org/en/download/).

You will also need Angular version 13 which you can install using the following command:

`npm i -g @angular/cli@13.3.3`

Next, you will need to pull the project from GitHub:

`git clone https://github.com/dwdewul/microsoft-challenge.git ddewulf-challenge`

Navigate to the project folder's root and run the following command to install the necessary packages:

`npm i`

Once all of the above are installed, you can run the project using the follwing command:

`ng serve -o`
