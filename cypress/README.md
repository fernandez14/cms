# Audits

Cypress and Lighthouse work together to provide accessibility and performance audits.

## Getting Started

### Install NPM dependencies
Run the commands from the root of the Craft CMS repo.

Install the NPM dependencies:
```
npm install
```

### Configure Cypress

Copy the `cypress.json.example` file to `cypress.json` and customize it for your Craft installation.

### Configure Craft

CSRF protection needs to be disabled for Cypress to work properly.

In your `config/general.php`:
```
'enableCsrfProtection' => false,
```

## Run Audits

Open Cypress and run one or multiple tests:
```
npx cypress open
```
