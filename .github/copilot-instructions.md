<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Setup Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements - Next.js 15, React 19, TypeScript, Tailwind CSS v4, ESLint, Prettier, Motion, MDX support
- [x] Scaffold the Project
- [x] Customize the Project
- [x] Install Required Extensions
- [x] Compile the Project
- [x] Create and Run Task
- [x] Launch the Project
- [x] Ensure Documentation is Complete

## Project Specifications
- Framework: Next.js 15
- UI Library: React 19
- Language: TypeScript
- Styling: Tailwind CSS v4
- Code Quality: ESLint, Prettier
- Animations: Motion (motion.dev)
- Content: MDX support
- Fonts: next/font
- Router: App Router

## Directory Structure
Required directories: app, components, content, design, docs, lib, public, styles, types

## Figma Implementation Rules

- Figma is the visual source of truth.
- Retrieve exact values through Figma MCP.
- Do not estimate from screenshots.
- Do not redesign, simplify, or invent UI.
- Implement only the nodes named in the current task.
- Reuse existing tokens and components before creating new ones.
- Use Next.js App Router, React, TypeScript, and Tailwind CSS v4.
- Use CSS custom properties and Tailwind `@theme`.
- Avoid hard-coded colors, spacing, typography, radii, and effects when tokens exist.
- Use semantic HTML and WCAG AA accessibility.
- Do not add animation until explicitly requested.
- Do not proceed beyond the current task.
- If Figma data is unavailable, report the missing value instead of guessing.
- Run TypeScript and lint checks after code changes.
- Documentation nodes should be translated into repository documentation, not rendered as public pages.
