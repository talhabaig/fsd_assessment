# Full Stack Developer Technical Assessment

## Introduction

Welcome to our project! You will be contributing to a web application for one of our clients, a travel agency. Your task involves designing and implementing a scalable architecture using Next.js as the base. This includes considerations for microservices, serverless functions, or monolithic structures.

There are no existing features implemented. Using the provided Figma file, you will build the frontend from scratch. Additionally, you will design the architecture of the web application using TypeScript and backend languages of your choice. This design should accommodate functionalities such as bookings, payments, destination searching, and storage.

## Tasks

### Task 1: Design Scalable Architecture

**Objective:** Create a clear, readable, and understandable architectural plan for the web application.

**Deliverable:**
- A document (PDF or Markdown) outlining your proposed architecture.
- Rationale for your chosen architecture (e.g., monolithic, microservices, serverless).
- Plans for scalability, maintainability, and future expansion.
- Overview of key components and their interactions.
- Technologies and frameworks you plan to use.

### Task 2: Implement Scalable Architecture

**Objective:** Implement the backend architecture based on your design.

**Deliverable:**
- Backend codebase with clear documentation.
- API endpoints for bookings, payments, searching, and storing destinations.
- Integration with a database of your choice.
- Consideration for error handling, logging, and security best practices.

### Task 3: Implement Frontend Design from Figma

**Objective:** Develop the frontend of the application based on the provided Figma design file.

**Deliverable:**
- Fully functional frontend using Next.js.
- Integration with backend APIs.
- Responsive design suitable for various devices.
- Adherence to accessibility standards.

### Bonus Tasks:

### Task 4: Multi-Language Support

**Objective:** Enhance accessibility by adding multi-language support to the application.

**Deliverable:**
- Internationalization (i18n) implementation for supporting multiple languages.
- Translation of the user interface into at least one additional language.

### Task 5: Implement Role-Based Access Control (RBAC)

**Objective:** Strengthen security and usability by implementing role-based access control.

**Deliverable:**
- RBAC implementation for managing permissions (e.g., admins, regular users).
- User management interface for assigning roles and permissions.

## Getting Started

1. **Fork and Clone the Repository**
- **Fork the Repository:** Visit [GitHub repository](https://github.com/EveLabOfficial/fsd_assessment), click Fork to create a copy in your GitHub account.
   
- **Clone the Forked Repository:** Clone your fork to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/fsd_assessment.git
  Replace YOUR_USERNAME with your actual GitHub username.

2. **Install Project Dependencies**
After cloning the repository, you'll need to install the project dependencies. This step is crucial for ensuring that all the necessary libraries and frameworks are available on your local development environment.

3. **Navigate into your project's directory:**
cd fsd_assessment
Run the following command to install the project dependencies:
npm install
This command reads the package.json file in the project directory and installs all the dependencies listed there. It might take a few minutes to complete.

4. **Create a task Branch**
With your dependencies installed, you're almost ready to start coding. The next step is to create a task branch where you'll develop your assigned tasks:

git checkout -b task-yourtaskename
Replace yourfeaturename with a descriptive name for the task you're working on.

5. **Running the Application**
To run the application locally and see your changes in real-time, use the following command:

npm run dev
This command will start the development server and open the application in your default web browser. You can now begin implementing the assigned features, making sure to check your progress frequently by viewing the application in the browser.

6. **Submitting Your Work**
Once you have completed the tasks, please follow these steps to submit your work:

7. **Push your branch to your forked repository on GitHub:**
git push origin task-yourtaskname

Prepare a brief overview of the tasks you've implemented, along with any feedback or comments you have about the assessment process.
Email Miles at contact@evelab.tech with:
A link to your forked repository.
The overview of implemented tasks and any additional comments.

### Evaluation Criteria
- **Architectural design:** Clarity, scalability, and rationale.
- **CI/CD:** Regular commits.
- **Frontend implementation:** Accurate implementation of the frontend.
- **Code quality:** Readability, maintainability, and use of best practices.
- **Functionality:** Completeness and correctness of implemented features.
- **Performance:** Application load times and responsiveness.
- **Testing:** Coverage and quality of tests.
- **Documentation:** Clarity and completeness of documentation.

We look forward to seeing your contributions to the project and wish you the best of luck!
