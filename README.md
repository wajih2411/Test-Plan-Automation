# Automated Testing Assignment README

## Repository Overview
This project focuses on automating test cases for a web application using Cypress and GitHub Actions. It demonstrates the integration of Cypress tests with GitHub Actions for continuous integration and deployment.

## Repository Link
[GitHub Repository](https://github.com/wajih2411/Test-Plan-Automation)

## Repository Structure
The repository has the following structure:
- `cypress`
  - `e2e`
    - `API`: Contains Cypress test scripts for API testing.
    - `security`: Contains Cypress test scripts for security testing.
    
    
## Instructions
Follow these steps to set up the repository and run the automated tests:

1. **Clone Repository**: Clone the repository to your local machine using the command:
2. **Install Dependencies**: Navigate to the cloned repository and install project dependencies:
3. **Configure GitHub Actions**: Ensure that the GitHub Actions workflow file (`cypress.yml`) is properly configured in the `.github/workflows` directory.
4. **Run Tests Locally**: Execute Cypress tests locally using the command:
5. **Monitor GitHub Actions**: Push your changes to the main branch and monitor the GitHub Actions workflow execution to ensure all tests pass.

## Result
The GitHub Action failed due to a version error with npm, resulting in an exit code 1. However, all tests executed successfully using Cypress, indicating that the issue lies within the GitHub Actions configuration or environment. This discrepancy highlights the importance of verifying the compatibility and versioning of dependencies across different environments to ensure consistent test execution and reliable automation workflows.

## Sole Contributor
- Wajih Muhammad