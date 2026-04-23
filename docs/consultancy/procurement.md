---
outline: [2, 3]
---

# Procurement, privacy, and pricing

*Written for your line manager, IT, InfoSec, and DPO. Verified facts, cited, with procurement items at the end.*

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

**Recommendation.** For any corporate engagement, buy [Claude Team](https://claude.com/pricing) seats per user. Team is the lightest plan that puts training prohibition into **contract** rather than setting. <mark>Explicitly avoid Pro or Max seats for corporate work</mark> — those fall under consumer terms where each user toggles their own training opt-in, a governance gap no regulated employer should accept.

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

## Pricing — what it actually costs

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

## Procurement checklist

> **Procurement checklist:**
>
> 1. Anthropic DPA signed by your DPO.
> 2. Private GitHub org provisioned (or approved alternative: self-hosted Gitea, GitLab CE, Bitbucket, Azure DevOps).
> 3. Claude Team seats procured under corporate billing — either a single seat for a solo user, or 5+ seats for a team.

## Next steps

Four concrete paragraphs, grouped by the name of the offer.

### Step first

- **(a) Discovery call — 60 minutes, free.** Walk through your actual data sources and map them to [Linear](/consultancy/glossary#linear) issues before any money is spent. Deliverable: a one-page scope you can take to your line manager. If you've already had the discovery call, treat this as the agreed scope summary.
- **(b) Install and setup — £2k (2 days at £1k/day).** By the end of day two — with the async prerequisites in place (Mac, Claude Team seat, GitHub org) — one real internal app is running in your environment. Your `hello-world`, end to end, through Linear. Everything else layers on this foundation. Billed on completion.

### Then Stride

- **(c) First three weeks of weekly support — £3k (1 day per week at £1k/day).** Mike returns one day a week for three weeks to catch anti-patterns early and reinforce habits while they are still forming. Three apps shipped by end of week 3. Bundled with (b) as the combined £5k initial engagement.
- **(d) Ongoing retainer — £1k/day as needed, optional.** Past week 3, monthly check-ins drop to ad-hoc as you gain independence. [Stride](/consultancy/glossary#stride) itself remains complimentary throughout.

**To book your 60-minute discovery call, email [mike@webventurer.com](mailto:mike@webventurer.com).**
