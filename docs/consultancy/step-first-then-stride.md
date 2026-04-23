---
outline: [2, 3]
---

# Consultancy package: Step first — then Stride

![Kanban board](/kanban-board.svg)
*Build your own apps, keep them yours, ship without breaking things.*

&nbsp;

**You don't need to be a developer in the traditional sense** — no late nights tracking down bugs through unfamiliar code, no weekends learning yet another programming language to ship one small feature, no years of accumulated jargon before you produce anything useful. You also don't need to swing the other way and become a *vibe coder* — someone who prompts an AI to build an app, then watches it collapse the first time something breaks, because they never understood what was underneath.

> "Stride has been extremely helpful so far. It's made me so efficient — my work is easier, and I can move quickly yet thoroughly."
>
> — **Matthew M**, 20 April 2026

[Read more testimonials →](/consultancy/testimonials)

There's a middle ground: you build the apps your team actually needs, yourself, knowing what the code does and trusting it won't quietly break next month. You stop waiting for vendors. You stop depending on IT for every small report. You ship with the quiet confidence of someone who can read their own work.

And your work stays visible. Your teammates and line manager see the cards move through the lanes in real time as you ship. No shadow work, no black-box outputs — just a live picture of what's in flight, what's next, and what just landed. (Stride builds this on [kanban](#kanban) and [Linear](#linear) underneath.)

**Step first**: the moment your first app ships through Linear — small, real, yours. **Then Stride**: the rhythm of shipping every week, the feeling of building into your team rather than around them, the confidence that comes from knowing every commit you made is one you can read.

## Contents

**Part 1 — The proposition**

- [Who this is for](#who-this-is-for)
- [The overall goal](#the-overall-goal)
- [The moment it clicks](#the-moment-it-clicks)
- [The whole stack](#the-whole-stack)
- [Why not Lovable or raw Claude Code?](#why-not-lovable-or-raw-claude-code)
- [What Mike brings to the table](#what-mike-brings-to-the-table)
- [Your work stays yours](#your-work-stays-yours)

**Part 2 — Infrastructure, security and pricing**

- [Privacy — what Anthropic may and may not do with your code](#privacy-what-anthropic-may-and-may-not-do-with-your-code)
- [Code hosting — where your source lives](#code-hosting-where-your-source-lives)
- [GDPR, data residency, and leaver process](#gdpr-data-residency-and-leaver-process)
- [Pricing — what it actually costs](#pricing-what-it-actually-costs)
- [Procurement checklist](#procurement-checklist)
- [Next steps](#next-steps)

**[Appendix](#appendix)**

## Part 1 — The proposition

*Written for the person who will actually use Stride.*

### Who this is for

You write a little SQL. You know what a database is. You've hand-rolled a PowerShell script or stitched together a Power Query because you got tired of waiting for someone else to do it. You want agency over the tools your team relies on — not another round of paying a vendor £2–3k to write a custom report that arrives in the wrong format.

This is **not** for someone who copy-pastes a bit of code from a web search and hopes for the best. Nor is it for a senior engineer already shipping production apps weekly — they already have their own tooling. It's for the technically-curious professional in the middle: comfortable with the command line, keen to build, and ready to stop depending on third parties for every custom report.

### The overall goal

Stride turns [vibe coders](#vibe-coder) into [**agentic engineers**](#agentic-engineer) who can trust what they are working on. See the [full premise on the stride site](https://webventurer.github.io/stride-consult/getting-started.html). The **workhorse** is [Claude Code](#claude-code), Anthropic's terminal-based coding agent. The **shipping system** is [Stride](#stride) — a thin wrapper around Claude Code that implements [kanban](#kanban) on Linear.

**The payback is concrete.** *"Your organisation currently pays your data vendor £2–3k every time you want a custom report. Your fourth internal dashboard pays back the entire £5k engagement."* The maths holds for any organisation that's paying custom-report fees to vendors every month.

**The timeline is concrete too.** *"Week one after setup is complete: your first internal dashboard ships. Month one: three apps running, owned by you, visible to your team in Linear."*

### The moment it clicks

You type a sentence in plain English — *"show me sales by region, last quarter"* — and Claude Code turns it into a Linear card, cuts a branch, writes the code, commits atomically, opens a pull request. You watch a dashboard appear. You own it.

> The unit of work is a well-scoped card you put into Linear — your thoughts.

The first time it works end to end, the feeling lands: *"From a selfish professional development point of view, this is the next step. This is the ultimate goal."* Not someone else's tool. Yours, running on your infrastructure, shipped by your hands in an afternoon — and the code is all there for you to read when you want to.

### The whole stack

#### Claude Code

Claude Code is Anthropic's terminal-based coding agent. It reads and writes code across a whole repo, runs your tests, uses [MCP](#linear) tools — Model Context Protocol, Anthropic's standard for letting external services like Linear talk to Claude — and executes shell commands under your permission. It is the engine that actually writes code.

Your code is yours, and under a [Claude Team plan](https://claude.com/pricing) your prompts are never used to train Claude — full privacy brief in [Part 2](#part-2-infrastructure-security-and-pricing).

#### Stride

[Stride](#stride) is a thin wrapper around Claude Code that implements [kanban](#kanban) on [Linear](#linear). Linear is a fast, modern issue tracker — Jira's sleeker cousin.

Here's how Stride sits on top. `/linear:plan-work` turns a plain-English request into a kanban card. `/linear:start` cuts a branch. Claude Code does the work. Atomic commits land via `/commit`. The pull request ships the story. You never touch a board manually — the workflow is what does the shuffling.

#### Kanban and why it fits

[Kanban](#kanban) is continuous pull-based flow. Cards move through lanes: **Backburner → Backlog → Todo → Doing → In Review → Done**. No sprints. No ceremonies. Why kanban, specifically, for this work? One human orchestrating AI agents is not a classic team — agents have no commitment cost and work in parallel, so sprint boundaries become artificial lag. The real WIP caps sit at review bandwidth and merge coherence, both bottlenecked on the human. See the [kanban reference page](https://webventurer.github.io/stride-consult/reference/kanban.html) — it has embedded videos that walk through the flow.

#### Why Linear?

[Linear](#linear) makes your work visible without asking you to write status reports. Management and teammates can see which card is in Doing, which is in Review, what shipped this week — by looking at the board.

> "You can telegraph to management what you're working on so they can visibly see all the issues you're working on."

Stride reads and writes Linear automatically via [MCP](#linear). No manual card shuffling. Because it's just a URL to share, you send one link to your line manager and they see everything.

#### Starter repos

A week of toolchain decisions already made, so you start from a working app on day one:

- **[app-starter](https://github.com/webventurer/app-starter)** — a working web app from the first commit. The stack is React + Vite + ShadCN + Biome + tests, but the point is not the stack — the point is that you do not spend three days picking one.
- **[python-template](https://github.com/webventurer/python-template)** — a working Python scaffold with tooling already wired up.

Both enforce YAGNI up-front: opinionated, boring, proven. The simplest thing that works — so your attention goes to the app, not the plumbing.

### Why not Lovable or raw Claude Code?

*The comparison most buyers want to make.*

| | Code visibility | Work visibility | Revertibility | Guard rails |
|:--|:---:|:---:|:---:|:---:|
| **Lovable** | ✗ hidden | ✗ | ✗ | ✗ |
| **Raw Claude Code** | ✓ | ✗ | partial | ✗ |
| **Stride** | ✓ | ✓ via Linear | ✓ [atomic commits](#the-atomic-commit) | ✓ |

<mark>The day Lovable breaks your dashboard at 4pm on a Friday and you cannot read the code to see what it did — that is the day you wish you had been on Stride.</mark>

### What Mike brings to the table

Mike built Stride and ships apps with it daily. He knows the AI-pattern library and where it goes wrong — the canonical pitfall is *"spending 3 days on a suggested solution which is premature optimisation and overkill."* He provides guard rails for the common wrong turns: hosting choices (VPS vs cloud vs PaaS), database vs flat file, when to stop refactoring.

The engagement runs as three concrete stages that match the name of the offer — Stages 1 and 2 are *the step*; Stage 3 is *the stride*.

> "I'm glad you got it in front of me at the right time — before I started work. 😄"
>
> — **Matthew M**, 20 April 2026

#### Stage 1 — Install and setup (£2k, 2 days on-site or remote, £1k/day)

Two days that install the tools, teach the primitives, and ship the first app end to end:

- *Before day 1 (async, no charge).* Mac prerequisites done remotely or on site so day 1 starts productive — security hygiene (disk encryption, password manager, MFA on GitHub and Anthropic), corporate VPN, GitHub org access, Anthropic Claude Team seat, Linear workspace access.
- *Day 1 — install and primitives.* Homebrew, Node.js, Python, git, the Claude Code CLI. Starter repo cloned (app-starter or python-template). Stride installed and MCP-connected (`linear check` confirms connectivity). Git basics (branches, commits, pull requests), [atomic commits](#the-atomic-commit), [kanban](#kanban) in Linear.
- *Day 2 — ship the `hello-world`.* Pick one Linear card from the discovery scope. `/linear:plan-work` drafts the card. `/linear:start` cuts the branch. `/commit` lands atomic commits. `/linear:finish` moves the card to Done. The dashboard is live in your environment.

*Stage 1 deliverable: one real internal app running end to end by the close of day 2, in an environment InfoSec will approve.*

#### Stage 2 — First three weeks of weekly support (£3k, 1 day per week at £1k/day)

The workflow only becomes real when you are building alone. Mike books one day each week for the next three weeks to catch anti-patterns early and reinforce habits while they are still forming:

- **Week 1.** Review your first piece of independent work. Spot missed atomic-commit discipline, kanban drift, premature optimisation. Fix early.
- **Week 2.** Second app ships. Patterns repeat, confidence grows.
- **Week 3.** Third app. You are increasingly self-sufficient.

*Stage 2 deliverable: three apps shipped by end of week 3; you running the workflow alone without supervision.*

Stages 1 and 2 together make up the **£5k initial engagement** (£2k + £3k). After week 3 you either stop there or move into Stage 3.

#### Stage 3 — Ongoing retainer (£1k/day as needed, optional; Stride itself complimentary)

Past the initial three weeks, support drops to what you actually need:

- Monthly check-ins for the next couple of months, then ad-hoc.
- Topics by demand: hosting the app (VPS vs cloud vs PaaS), when to reach for a database vs a flat file, when to stop refactoring, how to telegraph work through Linear, how to spot premature optimisation before it eats three days.

*Stage 3 deliverable: you shipping apps on your own, with a known path back to Mike when something needs judgement.*

**Continuity.** [Andy Mindel](https://www.linkedin.com/in/andymindel/) is Webventurer's co-founder and available as backup on every engagement — the retainer is covered by two people, not one.

**Commercial terms.** Your company pays for Mike's consultancy to train you up on the whole system. Stride itself is complimentary.

### Your work stays yours

*"Everything you build is yours. Your code lives in your [GitHub](#github-and-a-github-repo) org. Your work history lives in your Linear. Your apps run on your infrastructure — Webventurer does not host anything. If you ever leave Webventurer, nothing is locked in; everything keeps working in-place."*

<mark>**What your line manager needs to know from Part 2:** three procurement items (DPA, private GitHub org, 5 Claude Team seats), year-one total cost of ownership ~£6k ex VAT, and under Anthropic's Commercial Terms your code and prompts are never used to train Claude.</mark>

*The rest of this page is written for your line manager, IT, InfoSec, and DPO. Share this URL with them — the facts and quotes they need are below, cited verbatim.*

---

## Part 2 — Infrastructure, security and pricing

*Written for your line manager, IT, InfoSec, and DPO. Verified facts, cited, with procurement items at the end.*

### Privacy — what Anthropic may and may not do with your code

Anthropic's Claude Code data-usage policy splits sharply between consumer and commercial plans. For corporate use, the distinction is the difference between a user-level toggle and a contractual clause.

| | Training default | Retention | Where control sits |
|:--|:--|:--|:--|
| **Consumer** — Free, Pro, Max (including [Claude Code](#claude-code) from these accounts) | User must choose opt-in or opt-out; no silent default | 30 days if opted out; 5 years if opted in | Each user's own toggle |
| **Commercial** — Team, Enterprise, API | No training, by default | 30 days standard; Zero Data Retention available on Enterprise | Contractual clause |

Anthropic's Commercial Terms, Section B, state directly:

> "Anthropic may not train models on Customer Content from Services."

And from Anthropic's [Claude Code data-usage page](https://code.claude.com/docs/en/data-usage):

> "Anthropic does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data to us for model improvement."

**Recommendation.** For any corporate engagement, buy [Claude Team](https://claude.com/pricing) seats per user. Team is the lightest plan that puts training prohibition into **contract** rather than setting. <mark>Explicitly avoid Pro or Max seats for corporate work</mark> — those fall under consumer terms where each user toggles their own training opt-in, a governance gap no regulated employer should accept.

Sources: [code.claude.com/docs/en/data-usage](https://code.claude.com/docs/en/data-usage) · [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms) · [privacy.claude.com](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

### Code hosting — where your source lives

Your code lives in a **private [GitHub repo](#github-and-a-github-repo)** under your corporate org account. If GitHub is off the table, alternatives exist: self-hosted [Gitea](https://about.gitea.com), [GitLab CE](https://about.gitlab.com/install/) on a VPS, Bitbucket, or Azure DevOps.

*"In regulated corporates, the private GitHub org is usually the longest procurement step — InfoSec reviews SaaS data classification, repository access controls, and secret handling before approving it. Expect two to four weeks. If GitHub is banned outright, the fastest path is a self-hosted Gitea or GitLab CE instance on an existing corporate VPS, since your infra team already owns the runtime."*

### GDPR, data residency, and leaver process

A four-part answer for the DPO — forward this section verbatim:

- **DPA.** Anthropic publishes a Data Processing Addendum that your DPO signs alongside the Team subscription — the standard GDPR controller-to-processor contract, mandatory before any personal data is processed through Claude Code. Available via the [Anthropic Trust Center](https://trust.anthropic.com).
- **Data residency.** Claude Team hosts in the US by default. If EU/UK data residency is a hard requirement, the path is Claude Enterprise with AWS Bedrock or Google Vertex AI as the model runtime — same Anthropic policies, regional data plane.
- **Audit trail.** Every piece of work lives as a [Linear](#linear) issue, a git commit, and a pull request. No shadow work. InfoSec can reconstruct who did what and when from three sources that already exist in your corporate IT estate.
- **Leaver process.** SSO + domain verification on Claude Team means revoking a user at your corporate identity provider revokes their Claude access automatically. If InfoSec needs SCIM, audit logs, or custom retention, that is the trigger to move to Enterprise — not Team. **The apps themselves survive a leaver** — they live in the corporate GitHub org and keep running on the corporate infrastructure, so a successor can pick them up with one day of hand-over.

### Pricing — what it actually costs

| Plan | USD list | Indicative GBP ex. VAT | Terms |
|:--|:--|:--|:--|
| Pro | $17 annual / $20 monthly | ~£14 / ~£16 | Consumer |
| Max 5× | from $100/month | from ~£80 | Consumer — 5× Pro's usage |
| Max 20× | $200/month | ~£160 | Consumer — 20× Pro's usage |
| Team standard | $20 annual / $25 monthly | ~£16 / ~£20 | Commercial (min 5 seats, max 150) |
| Team premium | $100 annual / $125 monthly | ~£80 / ~£100 | Commercial |
| Enterprise | $20/seat + API usage | ~£16/seat | Commercial, SCIM/SSO/HIPAA |

*Anthropic prices in USD at [claude.com/pricing](https://claude.com/pricing). GBP is converted at £1 = $1.25 and excludes UK VAT at 20%. UK customers pay the USD amount converted at Anthropic's card-processor FX rate plus VAT.*

**Year-one total cost of ownership, ex. VAT:**

| Item | Cost |
|:-----|-----:|
| Stage 1 — Install and setup (2 days × £1k/day) | £2,000 |
| Stage 2 — First three weeks of weekly support (3 days × £1k/day) | £3,000 |
| **Initial engagement** (one-off) | **£5,000** |
| Claude Team — your chosen plan × 12 months | *varies* |

Plus your own hosting — Webventurer does not host any apps; they run on your infrastructure from day one (typically £30–£80/month on a VPS or existing corporate cloud). Year two (if you continue past week 3) is the Team subscription plus ad-hoc Stage 3 retainer days at £1k/day as needed.

### Procurement checklist

> **Procurement checklist:**
>
> 1. Anthropic DPA signed by your DPO.
> 2. Private GitHub org provisioned (or approved alternative: self-hosted Gitea, GitLab CE, Bitbucket, Azure DevOps).
> 3. Claude Team seats procured under corporate billing — either a single seat for a solo user, or 5+ seats for a team.

### Next steps

Four concrete paragraphs, grouped by the name of the offer.

#### Step first

- **(a) Discovery call — 60 minutes, free.** Walk through your actual data sources and map them to [Linear](#linear) issues before any money is spent. Deliverable: a one-page scope you can take to your line manager. If you've already had the discovery call, treat this as the agreed scope summary.
- **(b) Install and setup — £2k (2 days at £1k/day).** By the end of day two — with the async prerequisites in place (Mac, Claude Team seat, GitHub org) — one real internal app is running in your environment. Your `hello-world`, end to end, through Linear. Everything else layers on this foundation. Billed on completion.

#### Then Stride

- **(c) First three weeks of weekly support — £3k (1 day per week at £1k/day).** Mike returns one day a week for three weeks to catch anti-patterns early and reinforce habits while they are still forming. Three apps shipped by end of week 3. Bundled with (b) as the combined £5k initial engagement.
- **(d) Ongoing retainer — £1k/day as needed, optional.** Past week 3, monthly check-ins drop to ad-hoc as you gain independence. [Stride](#stride) itself remains complimentary throughout.

**To book your 60-minute discovery call, email [mike@webventurer.com](mailto:mike@webventurer.com).**

---

## About Webventurer

Webventurer is a two-person consultancy run by Mike and Andy Mindel. Stride is open source; the consultancy package exists to help clients adopt it confidently, without turning Webventurer into a dependency.

- **[Mike Mindel](https://www.linkedin.com/in/mikemindel/)** — builds apps, trains clients, runs the engagement day to day. Reach him at [mike@webventurer.com](mailto:mike@webventurer.com).
- **[Andy Mindel](https://www.linkedin.com/in/andymindel/)** — co-founder and backup on every engagement, so the retainer is covered by two people, not one.

## About Mike

Mike and his brother Andy founded [Wordtracker](https://www.wordtracker.com) in 1998 — the **world's first keyword research tool**, launched before search-engine optimisation was a recognised industry. They've been running it for 28 years, and along the way invented KEI (the Keyword Effectiveness Index), still one of the core concepts of keyword research today. The instincts behind Stride come from shipping and maintaining a real web product for that long — knowing which decisions pay back and which quietly eat years.

Mike built Stride and runs every consultancy engagement day to day. The tools and guard rails you'll learn are the same ones he uses on his own projects — not advice he's inherited from somewhere else, but decisions he's made himself and keeps refining.

His focus: closing the gap between *"not quite a developer"* and *"building apps that don't break over time"*. He has opinions on where AI coding goes wrong — three-day rabbit holes, premature optimisation, over-engineering — and spends as much of the engagement helping you avoid those traps as teaching the happy path.

Reach him at [mike@webventurer.com](mailto:mike@webventurer.com) or connect on [LinkedIn](https://www.linkedin.com/in/mikemindel/).

---

## Appendix

Reference definitions for both readers.

### GitHub and a GitHub repo

GitHub is a web-based home for source code. A **repo** (repository) is one project's worth of code, with every change tracked. An **organisation** (or "org") groups repos under a corporate identity. A **team** inside an org can be granted access to multiple repos at once — so a person joins the team, and they get access to every repo the team owns, without per-repo invites. This is how corporate IT usually wants things: one place to add or revoke a user, not dozens of per-repo grants.

### Kanban

Kanban is a flow-based work-tracking method. It started at Toyota in the 1940s–50s, where workers passed cards (*kanban*) between stations to signal "ready for next step". Software teams adopted it in the late 2000s. The essentials: cards move through lanes (Backburner → Backlog → Todo → Doing → In Review → Done); each lane has a WIP cap (no more than N cards at once); work is **pulled** when a slot opens, not pushed on a schedule. See the [stride kanban reference page](https://webventurer.github.io/stride-consult/reference/kanban.html) — it has embedded videos that walk through the flow.

### Linear

[Linear](https://linear.app) is an issue tracker. It replaced Jira for most modern software teams because it is faster, is fewer clicks away from the answer, has a better API, and is **MCP-friendly** — meaning AI agents can read and write Linear through a standard protocol. *MCP* stands for **Model Context Protocol**, Anthropic's standard for tools talking to Claude.

### Claude Code

Claude Code is Anthropic's terminal-based coding agent. It reads your whole repo, plans changes, writes code, runs tests, and commits through git — all from the command line. See [code.claude.com/docs/en/overview](https://code.claude.com/docs/en/overview) for the full capability list.

**Plan-picker.** Pro/Max = personal or hobby use. **Team** = the default for corporate engagements. **Enterprise** = when compliance demands Zero Data Retention, SCIM, audit logs, or custom retention.

### Stride

Stride is a thin wrapper around Claude Code that ties [kanban](#kanban) to [Linear](#linear). One slash command plans a card, one cuts a branch, one commits atomically, one merges and closes the card. The whole workflow lives in the terminal, backed by Linear as the visible surface. See [webventurer.github.io/stride-consult/getting-started.html](https://webventurer.github.io/stride-consult/getting-started.html).

### The atomic commit

An **atomic commit** is a git commit with exactly one purpose — one complete idea, self-contained, and reversible without breaking anything else. It's not about size: a rename across 30 files is atomic (the purpose is *"rename"*); a single file mixing a bug fix with an unrelated refactor is not.

This rule matters more with AI-generated code than human-written. AI assistants often group files by the wrong criteria — changed in the same session, sharing a prefix, *"while I was in there"*. Stride's [`/commit`](https://webventurer.github.io/stride-consult/skills/commit) skill catches these mistakes through a four-pass methodology that separates content decisions from formatting standards — so every commit is one a reviewer can judge, and a bad change can be reverted cleanly.

### Vibe coder

A **vibe coder** is someone who prompts an AI assistant to build an application without understanding the code it generates. The approach works until the first thing breaks — at which point, because they never read the code, they cannot tell what the AI did or why it stopped working. Tools like Lovable or "build me an app" style services produce vibe-coder workflows by design. Stride is positioned as the opposite: you still type in plain English, but the code is visible, the commits are atomic, and you can read your own work when you need to fix it.

### Agentic engineer

An **agentic engineer** directs AI agents to write code, then reviews and ships what the agents produce. They do not hand-write every line, but they understand every line they ship. The unit of work is the feature, not the keystroke — Claude Code drafts, the engineer judges, atomic commits land, the pull request goes through review. This is the middle ground between a *vibe coder* (who doesn't understand the code) and a traditional developer (who writes every line by hand). Stride exists to turn the first into the second — a person with judgement, not typing speed.

### PaaS (Platform-as-a-Service)

A **PaaS** provider handles servers, scaling, and most of the plumbing for you. You push code; it deploys. This is the lowest-effort way to host an app, and typically the right starting point for a small internal tool.

Three options Mike usually considers:

- **[Heroku](https://www.heroku.com)** — the original PaaS; huge ecosystem, straightforward for most apps.
- **[Railway](https://railway.app)** — modern, developer-friendly, good for small teams shipping fast.
- **[Vercel](https://vercel.com)** — strongest for front-end-heavy apps (Next.js, React); excellent CDN built in.

A VPS (Hetzner, DigitalOcean, Linode) or cloud account (AWS, GCP, Azure) are the other two paths — more control, more responsibility.

---

**Next:** [Getting started with Stride →](/getting-started)
