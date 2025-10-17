
# L1FE: The Game of Becoming

This is a fully interactive, community-based life simulator that turns personal growth into an epic game of self-mastery. This project is a frontend-only application built with React, TypeScript, and Tailwind CSS, with all data persisted in the browser's `localStorage`.

## Core Concept

**Tagline:** “The Game of Becoming.”

L1FE turns real-world self-development into a video game of divine progression, where users grow through quests, earn XP, evolve stats, unlock insights, and compete with others.

## Tech Stack

*   **Framework:** React 18 + TypeScript
*   **Styling:** Tailwind CSS (via CDN)
*   **State Management:** React Hooks (`useState`, `useEffect`, `useContext`, `useCallback`)
*   **Persistence:** `localStorage` API
*   **Animations:** CSS transitions powered by Tailwind utilities

## Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   A modern web browser

### Installation & Running

This project is set up to run in a web-based development environment that automatically handles dependencies.

To run the project:

1.  Ensure all the files from the generated codebase are in their correct directories.
2.  The development server will serve `index.html` as the entry point.
3.  Open the provided URL in your browser to see the application running.

There is no `npm install` or `npm run dev` step required in this environment.

## Project Structure

The project is organized with a clear separation of concerns:

*   `components/`: Reusable UI components for different features like Quests, Competition, Navigation, and general UI elements.
*   `hooks/`: Custom React Hooks that encapsulate business logic and state management (`useProgress`, `useCompetition`).
*   `lib/`: Core logic, type definitions, and data persistence handlers. This includes leveling math, quest XP calculations, and `localStorage` utilities.
*   `data/`: Contains mock data, such as the initial list of quests.
*   `App.tsx`: The main application component that assembles the UI and provides context.
*   `index.tsx`: The application's entry point.

## Future Expansion Points

This codebase is structured to be extensible. Key areas for future development are marked with comments:

1.  **Backend Integration:**
    *   The `useProgress` and `useCompetition` hooks currently use `localStorage`. The functions in `lib/leveling/storage.ts` and `lib/compete/storage.ts` can be replaced with API calls to a real backend to enable multi-user features.

2.  **AI Mentor (The Guide):**
    *   The "The Guide" section in the `SideDrawer` component is a placeholder. This can be integrated with a generative AI API (like Google's Gemini) to provide personalized reflections and guidance based on the user's progress.

3.  **Guilds & Raids:**
    *   With a backend in place, users could form guilds and participate in cooperative "raid" quests, requiring combined stats and effort.

4.  **Marketplace & AR World:**
    *   These advanced features, also placeholder in the `SideDrawer`, would require significant backend and potentially native mobile development for AR capabilities.

This foundation provides a robust starting point for building a rich, interactive, and inspiring application for personal growth.
