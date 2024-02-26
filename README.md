This repo contains a very simple non-interactive Trello board that automatically updates while the web app is open. It is already functional, so you can focus only on the parts that you need to change.

See it running [here](https://iofinnet-frontend-interview-task.vercel.app).

## Goals of the task

1. Build a UI with 3 columns. Each column should have its own separate scroll.  
   Use CSS Grid if possible.
2. Render the name of each task instead of its ID.
   Bonus: Truncate the name using CSS.

### Restrictions

- Do not use any additional UI or CSS libraries.
- Do not use any additional state management libraries.
- Try to adhere to the existing project structure if possible.

### What will we be paying attention to?

1. Coding style and consistency.  
   This project contains config for Prettier and ESLint. Be mindful of that.
2. CSS knowledge.
3. HTML semantics.

> Feel free to modify any of the existing code. 💁‍♀️

## Running this project

1. Install [pnpm](https://pnpm.io/) if you do not already have it.
2. Clone the repo.
3. Duplicate `.env.example` and name it `.env`.
4. Install all dependencies with:
   ```bash
   pnpm install
   ```
5. Run the project with:
   ```bash
   pnpm dev
   ```
