---
outline: [2]
---

# Glossary

Reference definitions for the terms used throughout the consultancy pages.

## GitHub and a GitHub repo

GitHub is a web-based home for source code. A **repo** (repository) is one project's worth of code, with every change tracked. An **organisation** (or "org") groups repos under a corporate identity. A **team** inside an org can be granted access to multiple repos at once — so a person joins the team, and they get access to every repo the team owns, without per-repo invites. This is how corporate IT usually wants things: one place to add or revoke a user, not dozens of per-repo grants.

## Kanban

Kanban is a flow-based work-tracking method. It started at Toyota in the 1940s–50s, where workers passed cards (*kanban*) between stations to signal "ready for next step". Software teams adopted it in the late 2000s. The essentials: cards move through lanes (Backburner → Backlog → Todo → Doing → In Review → Done); each lane has a WIP cap (no more than N cards at once); work is **pulled** when a slot opens, not pushed on a schedule. See the [Kanban process](/reference/kanban) reference page — it has embedded videos that walk through the flow.

## Linear

[Linear](https://linear.app) is an issue tracker. It replaced Jira for most modern software teams because it is faster, is fewer clicks away from the answer, has a better API, and is **MCP-friendly** — meaning AI agents can read and write Linear through a standard protocol. *MCP* stands for **Model Context Protocol**, Anthropic's standard for tools talking to Claude.

## Claude Code

Claude Code is Anthropic's terminal-based coding agent. It reads your whole repo, plans changes, writes code, runs tests, and commits through git — all from the command line. See [code.claude.com/docs/en/overview](https://code.claude.com/docs/en/overview) for the full capability list.

**Plan-picker.** Pro/Max = personal or hobby use. **Team** = the default for corporate engagements. **Enterprise** = when compliance demands Zero Data Retention, SCIM, audit logs, or custom retention.

## Stride

Stride is a thin wrapper around Claude Code that ties [kanban](#kanban) to [Linear](#linear). One slash command plans a card, one cuts a branch, one commits atomically, one merges and closes the card. The whole workflow lives in the terminal, backed by Linear as the visible surface.

## The atomic commit

An **atomic commit** is a git commit with exactly one purpose — one complete idea, self-contained, and reversible without breaking anything else. It's not about size: a rename across 30 files is atomic (the purpose is *"rename"*); a single file mixing a bug fix with an unrelated refactor is not.

This rule matters more with AI-generated code than human-written. AI assistants often group files by the wrong criteria — changed in the same session, sharing a prefix, *"while I was in there"*. Stride's `/commit` skill catches these mistakes through a four-pass methodology that separates content decisions from formatting standards — so every commit is one a reviewer can judge, and a bad change can be reverted cleanly.

## Vibe coder

A **vibe coder** is someone who prompts an AI assistant to build an application without understanding the code it generates. The approach works until the first thing breaks — at which point, because they never read the code, they cannot tell what the AI did or why it stopped working. Tools like Lovable or "build me an app" style services produce vibe-coder workflows by design. Stride is positioned as the opposite: you still type in plain English, but the code is visible, the commits are atomic, and you can read your own work when you need to fix it.

## Agentic engineer

An **agentic engineer** directs AI agents to write code, then reviews and ships what the agents produce. They do not hand-write every line, but they understand every line they ship. The unit of work is the feature, not the keystroke — Claude Code drafts, the engineer judges, atomic commits land, the pull request goes through review. This is the middle ground between a *vibe coder* (who doesn't understand the code) and a traditional developer (who writes every line by hand). Stride exists to turn the first into the second — a person with judgement, not typing speed.

## PaaS (Platform-as-a-Service)

A **PaaS** provider handles servers, scaling, and most of the plumbing for you. You push code; it deploys. This is the lowest-effort way to host an app, and typically the right starting point for a small internal tool.

Three options Mike usually considers:

- **[Heroku](https://www.heroku.com)** — the original PaaS; huge ecosystem, straightforward for most apps.
- **[Railway](https://railway.app)** — modern, developer-friendly, good for small teams shipping fast.
- **[Vercel](https://vercel.com)** — strongest for front-end-heavy apps (Next.js, React); excellent CDN built in.

A VPS (Hetzner, DigitalOcean, Linode) or cloud account (AWS, GCP, Azure) are the other two paths — more control, more responsibility.
