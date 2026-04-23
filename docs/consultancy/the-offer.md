---
outline: [2, 3]
---

# The offer

*Written for the person who will actually use Stride.*

## Who this is for

You write a little SQL. You know what a database is. You've hand-rolled a PowerShell script or stitched together a Power Query because you got tired of waiting for someone else to do it. You want agency over the tools your team relies on — not another round of paying a vendor £2–3k to write a custom report that arrives in the wrong format.

This is **not** for someone who copy-pastes a bit of code from a web search and hopes for the best. Nor is it for a senior engineer already shipping production apps weekly — they already have their own tooling. It's for the technically-curious professional in the middle: comfortable with the command line, keen to build, and ready to stop depending on third parties for every custom report.

## The overall goal

Stride turns [vibe coders](/consultancy/glossary#vibe-coder) into [**agentic engineers**](/consultancy/glossary#agentic-engineer) who can trust what they are working on. See [Agentic engineering](/reference/agentic-engineering) for the full vibe-vs-agentic breakdown. The **workhorse** is [Claude Code](/consultancy/glossary#claude-code), Anthropic's terminal-based coding agent. The **shipping system** is [Stride](/consultancy/glossary#stride) — a thin wrapper around Claude Code that implements [kanban](/reference/kanban) on Linear.

**The payback is concrete.** *"Your organisation currently pays your data vendor £2k every time you want a custom report. Your third app (e.g. an internal dashboard) pays back the entire £5k engagement."* The maths holds for any organisation that's paying custom-report fees to vendors every month.

| Apps shipped | Vendor fees avoided | Engagement balance |
|:---|---:|---:|
| 1 | £2,000 | −£3,000 |
| 2 | £4,000 | −£1,000 |
| **3** | **£6,000** | **+£1,000** *(paid back)* |

**The timeline is concrete too.** *"Week one after setup is complete: your first app (e.g. an internal dashboard) ships. Month one: three apps running, owned by you, visible to your team in Linear."*

## The moment it clicks

You run `/linear:plan-work` with a plain-English brief — *"/linear:plan-work show me sales by region, last quarter"* — and Claude Code turns it into a Linear card, cuts a branch, writes the code, commits atomically, opens a pull request. You watch a dashboard appear. You own it.

> The unit of work is a well-scoped card you put into Linear — your thoughts.

The first time it works end to end, the feeling lands: *"From a selfish professional development point of view, this is the next step. This is the ultimate goal."* Not someone else's tool. Yours, running on your infrastructure, shipped by your hands in an afternoon — and the code is all there for you to read when you want to.

## The whole stack

### Claude Code

Claude Code is Anthropic's terminal-based coding agent. It reads and writes code across a whole repo, runs your tests, uses [MCP](/consultancy/glossary#mcp) tools — Model Context Protocol, Anthropic's standard for letting external services like Linear talk to Claude — and executes shell commands under your permission. It is the engine that actually writes code.

Your code is yours. On a [Claude Team seat](https://claude.com/pricing), prompt-training prohibition is contractual; on a personal Max subscription, it's a toggle under your control. Full privacy brief on the [procurement page](/consultancy/procurement).

### Stride

[Stride](/consultancy/glossary#stride) is a thin wrapper around Claude Code that implements [kanban](/reference/kanban) on [Linear](/consultancy/glossary#linear). Linear is a fast, modern issue tracker — Jira's sleeker cousin.

Here's how Stride sits on top. `/linear:plan-work` turns a plain-English request into a kanban card. `/linear:start` cuts a branch. Claude Code does the work. Atomic commits land via `/commit`. The pull request ships the story. You never touch a board manually — the workflow is what does the shuffling.

### Kanban and why it fits

[Kanban](/reference/kanban) is continuous pull-based flow. Cards move through lanes: **Backburner → Backlog → Todo → Doing → In Review → Done**. No sprints. No ceremonies. Why kanban, specifically, for this work? One human orchestrating AI agents is not a classic team — agents have no commitment cost and work in parallel, so sprint boundaries become artificial lag. The real Work In Progress ("WIP") caps sit at review bandwidth and merge coherence, both bottlenecked on the human. See the [Kanban process](/reference/kanban) reference page — it has embedded videos that walk through the flow.

### Why Linear?

[Linear](/consultancy/glossary#linear) makes your work visible without asking you to write status reports. Management and teammates can see which card is in Doing, which is in Review, what shipped this week — by looking at the board.

> "You can telegraph to management what you're working on so they can visibly see all the issues you're working on."

Stride reads and writes Linear automatically via [MCP](/consultancy/glossary#mcp). No manual card shuffling. Because it's just a URL to share, you send one link to your line manager and they see everything.

### Starter repos

A week of toolchain decisions already made, so you start from a working app on day one:

- **[app-starter](https://github.com/webventurer/app-starter)** — a working web app from the first commit. The stack is React + Vite + ShadCN + Biome + tests, but the point is not the stack — the point is that you do not spend three days picking one.
- **[python-template](https://github.com/webventurer/python-template)** — a working Python scaffold with tooling already wired up.

Both enforce YAGNI up-front: opinionated, boring, proven. The simplest thing that works — so your attention goes to the app, not the plumbing.

## Why not Lovable or raw Claude Code?

*The comparison most buyers want to make.*

| | Code visibility | Work visibility | Revertibility | Guard rails |
|:--|:---:|:---:|:---:|:---:|
| **Lovable** | ✗ hidden | ✗ | ✗ | ✗ |
| **Raw Claude Code** | ✓ | ✗ | partial | ✗ |
| **Stride** | ✓ | ✓ via Linear | ✓ [atomic commits](/consultancy/glossary#the-atomic-commit) | ✓ |

<mark>The day Lovable breaks your dashboard at 4pm on a Friday and you cannot read the code to see what it did — that is the day you wish you had been on Stride.</mark>

## What Mike brings to the table

Mike built Stride and ships apps with it daily. He knows the AI-pattern library and where it goes wrong — the canonical pitfall is *"spending 3 days on a suggested solution which is premature optimisation and overkill."* He provides guard rails for the common wrong turns: hosting choices (VPS vs cloud vs PaaS), database vs flat file, when to stop refactoring.

The engagement runs as three concrete stages that match the name of the offer — Stages 1 and 2 are *the step*; Stage 3 is *the stride*.

> "I'm glad you got it in front of me at the right time — before I started work. 😄"
>
> — **Matthew M, Aibuildrs**, 20 April 2026

### Stage 1 — Install and setup (2 days on-site or remote)

Two days that install the tools, teach the primitives, and ship the first app end to end:

- *Before day 1.* Mac prerequisites done remotely or on site so day 1 starts productive — security hygiene (disk encryption, password manager, MFA on GitHub and Anthropic), corporate VPN, GitHub org access, Anthropic Claude Max subscription or Team seat, Linear workspace access.
- *Day 1 — install and primitives.* Homebrew, Node.js, Python, git, the Claude Code CLI. Starter repo cloned (app-starter or python-template). Stride installed and [MCP](/consultancy/glossary#mcp)-connected (`linear check` confirms connectivity). Git basics (branches, commits, pull requests), [atomic commits](/consultancy/glossary#the-atomic-commit), [kanban](/reference/kanban) in Linear.
- *Day 2 — ship the `hello-world`.* Pick one Linear card from the discovery scope. `/linear:plan-work` drafts the card. `/linear:start` cuts the branch. `/commit` lands atomic commits. `/linear:finish` moves the card to Done. The dashboard is live in your environment.

*Stage 1 deliverable: one real internal app running end to end by the close of day 2, in an environment InfoSec will approve.*

### Stage 2 — First three weeks of weekly support (1 day per week, 3 weeks)

The workflow only becomes real when you are building alone. Mike books one day each week for the next three weeks to catch anti-patterns early and reinforce habits while they are still forming:

- **Week 1.** Review your first piece of independent work. Spot missed atomic-commit discipline, kanban drift, premature optimisation. Fix early.
- **Week 2.** Second app ships. Patterns repeat, confidence grows.
- **Week 3.** Third app. You are increasingly self-sufficient.

*Stage 2 deliverable: three apps shipped by end of week 3; you running the workflow alone without supervision.*

Stages 1 and 2 together make up the initial engagement. After week 3 you either stop there or move into Stage 3. (Full pricing lives on the [procurement page](/consultancy/procurement#pricing-what-it-actually-costs).)

### Stage 3 — Ad-hoc support (when needed, optional; Stride itself complimentary)

Past the initial three weeks, support drops to what you actually need:

- Monthly check-ins for the next couple of months, then ad-hoc.
- Topics by demand: hosting the app (VPS vs cloud vs PaaS), when to reach for a database vs a flat file, when to stop refactoring, how to telegraph work through Linear, how to spot premature optimisation before it eats three days.

*Stage 3 deliverable: you shipping apps on your own, with a known path back to Mike when something needs judgement.*

**Continuity.** [Andy Mindel](https://www.linkedin.com/in/andymindel/) is Webventurer's co-founder and available as backup on every engagement — the engagement is covered by two people, not one.

**Commercial terms.** Your company pays for Mike's consultancy to train you up on the whole system. Stride itself is complimentary.

## Your work stays yours

*"Everything you build is yours. Your code lives in your [GitHub](/consultancy/glossary#github-and-a-github-repo) org. Your work history lives in your Linear. Your apps run on your infrastructure — Webventurer does not host anything. If you ever leave Webventurer, nothing is locked in; everything keeps working in-place."*

<mark>**What your line manager needs to know:** the [procurement page](/consultancy/procurement) covers the three procurement items (DPA, private GitHub org, Claude Max subscription *or* 5+ Team seats), the year-one total cost of ownership (~£6k ex VAT), and Anthropic's Commercial Terms — under which your code and prompts are never used to train Claude.</mark>

---

**Next:** [Procurement, privacy, and pricing →](/consultancy/procurement) *(for your line manager, IT, InfoSec, and DPO)*

Questions? Email [mike@webventurer.com](mailto:mike@webventurer.com).
