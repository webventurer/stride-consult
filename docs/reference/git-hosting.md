# Git hosting — where your code lives

Every Stride engagement starts with the same procurement question: *where does the code live?* The default answer is GitHub, but corporate InfoSec doesn't always agree. This page lays out the realistic alternatives and the trade-offs between them.

## The default — GitHub

GitHub is a hosted git platform owned by Microsoft. It's where most of the open-source world lives, and it's the path of least resistance for a Stride engagement: the toolchain assumes it, the workflow assumes it, and the AI tooling reads its pull requests fluently.

For most clients, a **private GitHub organisation** under the corporate account is the right default — your code is yours, access is controlled by your identity provider, and the audit trail (issues, commits, pull requests) lives in one place that your team already understands.

## When GitHub isn't an option

In regulated corporates, GitHub is often the longest procurement step. InfoSec reviews SaaS data classification, repository access controls, and secret handling before approving it — expect **two to four weeks**. Sometimes the answer is no.

When that happens, you're not stuck. There are four alternatives that come up repeatedly, all of which run the same git workflow underneath.

## The options at a glance

| Tool | Type | Notes |
|:---|:---|:---|
| **GitHub** | Hosted SaaS, owned by Microsoft | The default. Your code lives on github.com. |
| **Gitea** | **Self-hosted, open source** | Lightweight GitHub clone you run on your own server. Popular when InfoSec won't let code leave the corporate perimeter. |
| **GitLab CE** | **Self-hosted, open source** | Heavier than Gitea — includes built-in CI/CD. Also has a SaaS version at gitlab.com (CE = Community Edition, the free self-hostable one). |
| **Bitbucket** | Hosted SaaS, owned by Atlassian | Closest commercial GitHub alternative. Tight Jira integration — common in shops already on Atlassian. |
| **Azure DevOps** | Hosted SaaS, owned by Microsoft | Enterprise dev platform — git repos plus issue tracking and CI/CD. Common in Microsoft-shop corporates. |

The list splits into two camps: **self-hosted** (Gitea, GitLab CE — you run them on a corporate VPS) and **SaaS alternatives to GitHub** (Bitbucket, Azure DevOps).

## How to choose when GitHub is off the table

The fastest path through procurement depends on what your company already runs.

- **Already on Atlassian (Jira, Confluence)?** Bitbucket is the path of least resistance — your security team has likely already approved the vendor, and the SSO integration is one click.
- **Already on Microsoft (Azure AD, Office 365)?** Azure DevOps slots in cleanly — same identity provider, same billing relationship, same procurement contract.
- **Code can't leave the corporate perimeter?** Self-hosted **Gitea** or **GitLab CE** on an existing corporate VPS is usually the quickest answer, because your infra team already owns the runtime. No new SaaS contract is required.
- **None of the above?** Push for GitHub anyway — the path is well-trodden, the documentation is thick, and the procurement effort buys you years of value.

<mark>The list above is examples, not exhaustive. AWS CodeCommit, self-hosted GitHub Enterprise Server, and self-hosted GitLab EE all qualify too. If your InfoSec team has a specific approved option, use it — the Stride workflow doesn't care which git host you pick, as long as it speaks git.</mark>

## What stays the same regardless of host

The host is interchangeable. What matters is that the workflow underneath stays consistent:

- Every change is a Linear issue
- Every commit is atomic and on a branch
- Every branch closes via a pull request
- Every pull request is reviewed before it merges

The host provides the surface (the web UI, the access controls, the audit log). The discipline is yours, and it doesn't change between hosts.

---

**Related:** [Procurement and privacy](/consultancy/procurement) · [Atomic commits](/consultancy/glossary#the-atomic-commit) · [Kanban process](/reference/kanban)
