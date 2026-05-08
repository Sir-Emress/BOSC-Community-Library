# BOSC Community Library

BOSC Community Library is a university open source software project focused on building a community-friendly digital space for sharing academic resources, open learning materials, and contributor knowledge. Day 1 establishes the repository foundation, community standards, and the first runnable interface for local development.

## Project Overview

The project is designed to support a campus-oriented resource library where students, contributors, and academic communities can discover curated learning materials and participate in an open collaboration workflow. This repository is being developed in staged daily increments to reflect a realistic professional open-source process.

## Day 1 Scope

Day 1 focuses on repository initialization and the base web experience:

- Professional repository structure
- Community health files and GitHub templates
- Responsive landing page in `src/`
- Local Git setup for incremental project history

## Objectives

- Establish a maintainable open-source repository structure
- Define clear contribution and collaboration guidelines
- Launch a clean responsive user interface for the project
- Prepare the project for feature development in later phases

## Planned Features

The following features are planned for later development phases:

- Searchable community resource catalog
- Resource categories and metadata management
- Contributor onboarding workflows
- Documentation and policy expansion
- Accessibility and usability refinements
- Testing and deployment improvements

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Markdown documentation
- Git and GitHub workflow
- XAMPP Apache local hosting

## Project Structure

```text
BOSC-Community-Library/
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   |   |-- bug_report.md
|   |   `-- feature_request.md
|   `-- pull_request_template.md
|-- assets/
|-- docs/
|-- src/
|   |-- index.html
|   |-- script.js
|   `-- style.css
|-- tests/
|-- CODE_OF_CONDUCT.md
|-- CONTRIBUTING.md
|-- LEGAL_ANALYSIS.md
|-- LICENSE
|-- README.md
|-- REFLECTION.md
|-- SUBMISSION_LOG.md
`-- SUSTAINABILITY.md
```

## Installation

1. Place the project folder inside `C:\xampp\htdocs\`.
2. Start Apache from the XAMPP Control Panel.
3. Open the repository in Visual Studio Code.
4. Review the documentation files before making changes.

## Run on Localhost

Visit the landing page in your browser:

```text
http://localhost/BOSC-Community-Library/src/
```

If you rename the folder or place it in a different document root, update the URL accordingly.

## Contribution Summary

Contributions should follow the standards in [CONTRIBUTING.md](CONTRIBUTING.md). Contributors are expected to:

- Open or review an issue before major work begins
- Use clear branch names and focused commits
- Submit pull requests with testing notes
- Follow the project's code quality and collaboration standards

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for the full text.
