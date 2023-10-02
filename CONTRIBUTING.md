# Contributing to CSS-Is-Fun

We appreciate your interest in contributing to CSS-Is-Fun! This document outlines the steps and guidelines for contributing to this project. By following these steps, you can ensure your contribution is smoothly integrated into the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Fork the Repository](#fork-the-repository)
- [Clone the Repository](#clone-the-repository)
- [Create a New Branch](#create-a-new-branch)
- [Make Changes](#make-changes)
- [Commit Your Changes](#commit-your-changes)
- [Push to Your Fork](#push-to-your-fork)
- [Submit a Pull Request](#submit-a-pull-request)
- [Code Review](#code-review)

## Prerequisites

Before you start contributing, make sure you have the following tools installed on your local machine:

- [Git](https://git-scm.com/downloads)
- A code editor of your choice, such as [Visual Studio Code](https://code.visualstudio.com/download), [Atom](https://atom.io/), or [Sublime Text](https://www.sublimetext.com/3).

## Fork the Repository

1. Navigate to the [CSS-Is-Fun GitHub repository](https://github.com/Deveesh-Shetty/CSS-Is-Fun).
2. Click the "Fork" button in the top-right corner of the page to create a copy of the repository in your GitHub account.

## Clone the Repository

1. Open a terminal/command prompt on your local machine.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

```bash
  git clone https://github.com/YOUR_USERNAME/CSS-Is-Fun.git
```

Replace `YOUR_USERNAME` with your GitHub username.

## Create a New Branch

1. Navigate to the cloned repository on your local machine:

```bash
  cd CSS-Is-Fun
```

2. Create a new branch using the following command:

```git
  git checkout -b your-new-branch-name
```

Replace `your-new-branch-name` with a descriptive name for your branch, such as `add-new-feature`.

## Make Changes

1. Open the project in your preferred code editor.
2. Make the necessary changes to the project. This could include adding new features, fixing bugs, or improving existing code.
3. Test your changes to ensure they work correctly and do not introduce new bugs.
4. Make sure to update those changes in the `Readme.md` file following the previous table format
```md
| Snippet Name | [Go Live](codepen-link) | <img src="drag-and-drop-the-image-then-copy-the-link-here" alt="Cart Item" width="400" height="300"> | [Code - Snippet name](Snippet-location-in-the-repo) |
```
5. Also add it to the `snippets.json` file with the mentioned order in it.

## Commit Your Changes

1. Stage the changes you made:

```git
  git add .
```

2. Commit the changes with a descriptive commit message:

```git
  git commit -m "Your commit message here"
```

Replace `Your commit message here` with a brief description of the changes you made.

## Push to Your Fork

1. Push your changes to your forked repository on GitHub:

```git
  git push origin your-new-branch-name
```

Replace `your-new-branch-name` with the name of your branch.

## Submit a Pull Request

1. Navigate to the [CSS-Is-Fun GitHub repository](https://github.com/Deveesh-Shetty/CSS-Is-Fun).
2. Click the "New pull request" button.
3. Click "compare across forks" and select your forked repository and branch from the dropdown menus.
4. Review the changes and click "Create pull request."
5. Add a descriptive title and any additional comments, then click "Create pull request" again.

## Code Review

Once you have submitted your pull request, the project maintainer(s) will review your changes. They may provide feedback and request changes before merging your contribution. Be sure to address their feedback and make any necessary changes to ensure a smooth integration into the project.

Thank you for your contribution! 🚀
