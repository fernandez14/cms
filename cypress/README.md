# Audits

Cypress and Lighthouse work together to provide accessibility and performance audits.

## Getting Started

Run the commands from the root of the Craft CMS repo.

Install the NPM dependencies:
```
npm install
```

Open Cypress and run one or multiple tests:
```
npx cypress open
```

## Craft Config

CSRF protection needs to be disabled for Cypress to work properly.

In your `config/general.php`:
```
'enableCsrfProtection' => false,
```