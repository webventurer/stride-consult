---
outline: [2, 3]
---

# Procurement and privacy

*Written for your line manager, IT, InfoSec, and DPO. Verified facts, cited, with procurement items at the end. (See [How much?](/consultancy/how-much) for the full cost breakdown.)*

## Privacy — what Anthropic may and may not do with your code

Anthropic's Claude Code data-usage policy splits sharply between consumer and commercial plans. For corporate use, the distinction is the difference between a user-level toggle and a contractual clause.

| | Training default | Retention | Where control sits |
|:--|:--|:--|:--|
| **Consumer** — Free, Pro, Max (including [Claude Code](/consultancy/glossary#claude-code) from these accounts) | User must choose opt-in or opt-out; no silent default | 30 days if opted out; 5 years if opted in | Each user's own toggle |
| **Commercial** — Team, Enterprise, API | No training, by default | 30 days standard; Zero Data Retention available on Enterprise | Contractual clause |

Anthropic's Commercial Terms, Section B, state directly:

> "Anthropic may not train models on Customer Content from Services."

And from Anthropic's [Claude Code data-usage page](https://code.claude.com/docs/en/data-usage):

> "Anthropic does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data to us for model improvement."

**Recommendation.** Which plan you pick depends on how many people will use Stride:

- **Solo user, personal account.** [Claude Max](https://claude.com/pricing) is the right path — no seat minimum, heavy-usage quota suited to sustained coding, and the training opt-out toggle sits under your own governance.
- **Team inside a company.** Buy [Claude Team](https://claude.com/pricing) seats per user — the lightest plan that puts training prohibition into **contract** rather than setting, with a 5-seat minimum.

<mark>For corporate deployments, explicitly avoid Pro or Max seats</mark> — those fall under consumer terms where each user toggles their own training opt-in, a governance gap no regulated employer should accept.

Sources: [code.claude.com/docs/en/data-usage](https://code.claude.com/docs/en/data-usage) · [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms) · [privacy.claude.com](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

## Code hosting — where your source lives

Your code lives in a **private [GitHub repo](/consultancy/glossary#github-and-a-github-repo)** under your corporate org account. If GitHub is off the table, alternatives exist: self-hosted [Gitea](https://about.gitea.com), [GitLab CE](https://about.gitlab.com/install/) on a VPS, Bitbucket, or Azure DevOps.

*"In regulated corporates, the private GitHub org is usually the longest procurement step — InfoSec reviews SaaS data classification, repository access controls, and secret handling before approving it. Expect two to four weeks. If GitHub is banned outright, the fastest path is a self-hosted Gitea or GitLab CE instance on an existing corporate VPS, since your infra team already owns the runtime."*

## GDPR, data residency, and leaver process

A four-part answer for the DPO — forward this section verbatim:

- **DPA.** Anthropic publishes a Data Processing Addendum that your DPO signs alongside the Team subscription — the standard GDPR controller-to-processor contract, mandatory before any personal data is processed through Claude Code. Available via the [Anthropic Trust Center](https://trust.anthropic.com).
- **Data residency.** Claude Team hosts in the US by default. If EU/UK data residency is a hard requirement, the path is Claude Enterprise with AWS Bedrock or Google Vertex AI as the model runtime — same Anthropic policies, regional data plane.
- **Audit trail.** Every piece of work lives as a [Linear](/consultancy/glossary#linear) issue, a git commit, and a pull request. No shadow work. InfoSec can reconstruct who did what and when from three sources that already exist in your corporate IT estate.
- **Leaver process.** SSO + domain verification on Claude Team means revoking a user at your corporate identity provider revokes their Claude access automatically. If InfoSec needs SCIM, audit logs, or custom retention, that is the trigger to move to Enterprise — not Team. **The apps themselves survive a leaver** — they live in the corporate GitHub org and keep running on the corporate infrastructure, so a successor can pick them up with one day of hand-over.

## Procurement checklist

1. **MacBook Pro (or similar Mac)** — macOS is Stride's primary supported platform. Its Unix-based toolchain is a smoother ride than Windows or a Linux distro: the shell, git, Node, Python, and Claude Code's shell integrations all work with minimal plumbing.
2. Anthropic DPA signed by your DPO.
3. Private GitHub org provisioned (or approved alternative: self-hosted Gitea, GitLab CE, Bitbucket, Azure DevOps).
4. Claude subscription procured — a **Claude Max** subscription for a solo user, or **5+ Claude Team seats** under corporate billing for a group.

