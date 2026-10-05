---
title: "Lone Baithei — Personal Intelligence & Career Platform"
version: "1.0.0"
date: "2026-10-05"
status: "Project Specification"
author: "Lone Baithei"
---

# Lone Baithei — Personal Intelligence & Career Platform

## 1. Project Overview

Build a modern personal portfolio and career platform for Lone Baithei.

The website must function as more than a conventional CV/portfolio. It should combine:

1. A professional public portfolio.
2. A living digital CV/resume.
3. A project showcase and evidence repository.
4. A research/writing archive.
5. A "Now" page showing current focus.
6. A private authenticated admin dashboard.
7. A lightweight personal Project Manager / Project Tracker.
8. A controlled content publishing system.
9. A foundation for future interactive data, analytics, and quantitative-finance demonstrations.

The central design philosophy is inspired by Berkshire Hathaway's information-first website philosophy, but the implementation must be modern, accessible, responsive, visually refined, and appropriate for a young professional in Business Intelligence, Data Analytics, Data Engineering, Data Science, and Quantitative Finance.

The website should communicate:

> Who I am → What I know → What I have built → How I think → What I am working on → Where I am going.

The site should prioritize evidence over self-promotion.

---

# 2. Core Concept

## Working Concept

**Lone Baithei — Personal Intelligence & Career Platform**

Alternative internal names:

- Personal Intelligence Platform
- Digital Annual Report
- Career Operating System
- Living Portfolio

The public website should feel like a combination of:

- Berkshire Hathaway's information-first philosophy
- A modern research archive
- A professional CV
- A data/engineering portfolio
- A personal project laboratory
- A lightweight career operating system

Do NOT copy Berkshire Hathaway's visual design literally.

Borrow the principles:

- information over decoration
- clarity over marketing
- archives over temporary content
- evidence over claims
- longevity over trends
- simple public interface
- substantial information underneath

---

# 3. Primary Objectives

## 3.1 Career Objective

The website must help recruiters, hiring managers, employers, collaborators, and professional contacts quickly understand:

- who Lone is
- educational background
- technical capabilities
- certifications
- projects
- practical experience
- areas of interest
- evidence of problem-solving ability
- current development direction
- how to contact him

## 3.2 Personal Objective

The platform should help Lone manage:

- resume versions
- career information
- projects
- milestones
- research
- experiments
- learning goals
- current priorities
- website content

## 3.3 Long-Term Objective

The architecture should allow the website to evolve into a long-term public record of:

- projects
- research
- technical growth
- quantitative finance experiments
- data engineering work
- analytical studies
- annual reviews
- professional development

---

# 4. Design Philosophy

## 4.1 Information First

Every element should answer a question or provide evidence.

Avoid visual elements that exist only for decoration.

Avoid:

- excessive gradients
- generic 3D graphics
- meaningless animations
- stock photography
- skill percentage bars
- excessive glassmorphism
- unnecessary particle effects
- generic AI-generated "tech" imagery
- large empty hero sections with little information

## 4.2 Evidence Over Claims

Instead of:

> "Excellent Python skills"

show:

- Python project
- GitHub repository
- technical implementation
- results
- analysis
- documentation

Instead of:

> "Experienced with Microsoft Fabric"

show:

- Fabric architecture
- pipeline
- Lakehouse
- data model
- dashboard
- explanation

## 4.3 Simple Surface, Deep System

The public interface should be simple.

The underlying platform can be sophisticated.

Public:

- clean
- fast
- readable
- professional

Private:

- structured
- data-driven
- powerful
- configurable

## 4.4 Long-Term Design

The website must not depend heavily on short-lived design trends.

Typography, layout, navigation, and content structure should remain usable for years.

---

# 5. Target Users

## Primary

### Recruiters

Need to find:

- CV
- skills
- education
- certifications
- projects
- contact details

within seconds.

### Hiring Managers

Need:

- evidence of technical capability
- project context
- problem-solving approach
- results
- technology used

### Technical Professionals

Need:

- GitHub
- architecture
- technical documentation
- research
- experiments

### Potential Collaborators

Need:

- interests
- current projects
- research
- contact information

## Secondary

### General Visitors

Should be able to understand Lone's professional identity without technical knowledge.

---

# 6. Recommended Public Information Architecture

```text
/
├── Home
├── About
├── CV
├── Projects
│   ├── All
│   ├── Data Analytics
│   ├── Data Engineering
│   ├── Data Science
│   ├── Quantitative Finance
│   └── Software
├── Research
├── Writing
├── Now
├── Archive
└── Contact
```

Potential future sections:

```text
├── Experiments
├── Annual Review
├── Interactive
├── Terminal
└── Lab
```

These should NOT be required for Version 1 unless implementation is straightforward.

---

# 7. Homepage Specification

The homepage should be concise but information-dense.

## Suggested structure

### Section 1 — Identity

```text
LONE BAITHEI

Business Intelligence
Data Analytics
Data Engineering
Quantitative Finance
```

Short positioning statement.

Example:

> Building analytical systems and exploring the intersection of data, engineering and quantitative finance.

This copy can be revised during implementation.

---

## Section 2 — Current Focus

Display a dynamic "Now" summary.

Example:

```text
CURRENTLY

Building
Microsoft Fabric analytics platform

Learning
C++ · Quantitative Finance

Exploring
Volatility modelling
```

Data should come from the admin/CMS rather than hard-coded content.

---

## Section 3 — Selected Projects

Display 3–6 featured projects.

Each project card should show:

- title
- category
- short description
- technology
- status
- optional progress
- last updated
- link

Example:

```text
Microsoft Fabric Analytics Platform
Data Engineering

End-to-end analytics platform using Microsoft Fabric.

Status: In Progress
Progress: 78%

[View Project]
```

---

## Section 4 — Evidence / Skills

Do not use percentage bars.

Instead show categories:

```text
DATA
Python
SQL
Power BI
Microsoft Fabric

ENGINEERING
Git
APIs
Data Pipelines
Data Modelling

QUANT
Python
QuantLib
QuantStats
Statistical Modelling
Options Pricing
```

Each skill should optionally link to projects that demonstrate it.

---

## Section 5 — Latest Research / Writing

Display latest 2–4 publications or research notes.

---

## Section 6 — CV

Prominent CTA:

- View CV
- Download CV

The downloadable document must always point to the currently published resume version.

---

## Section 7 — Contact

Display:

- LinkedIn
- GitHub
- email
- optional professional contact form

---

# 8. CV / Resume System

The resume must not exist only as a static PDF.

Use structured data as the primary source.

## Resume data should include

### Personal

- name
- professional headline
- location
- email
- LinkedIn
- GitHub
- website

### Summary

- professional summary

### Education

- institution
- program
- start date
- end date
- status
- relevant coursework

### Certifications

- certification name
- issuing organization
- issue date
- credential ID if appropriate
- verification URL

### Experience

- organization
- role
- location
- start date
- end date
- description
- achievements

### Skills

- skill
- category
- associated projects

### Projects

- project
- role
- technology
- outcome

---

# 9. Resume Version Management

Admin must allow uploading/replacing the current PDF.

Required metadata:

```text
filename
version
date
status
notes
```

Example:

```text
Lone_Baithei_Resume.pdf

Version: 1.8
Published: 2026-10-05
Status: Current
```

Only one resume should normally be marked `current`.

Future support may allow multiple tailored resumes:

- General
- Data Analyst
- Data Science
- Quant / FinTech

However, this should not complicate Version 1.

---

# 10. Resume Source of Truth

Important architectural principle:

```text
Structured Career Data
        │
        ├── Public CV page
        ├── Website content
        └── Resume PDF
```

Avoid duplicating information manually wherever possible.

For example, certification information should ideally be stored once.

---

# 11. Admin Dashboard

Create a protected route such as:

```text
/admin
```

The admin route must use real authentication.

Do NOT rely on hiding the URL.

## Admin dashboard sections

```text
Dashboard
Resume
About
Skills
Education
Certifications
Experience
Projects
Research
Writing
Now
Site Settings
Activity Log
```

---

# 12. Admin Dashboard Home

Display:

```text
LONE BAITHEI
COMMAND CENTER

Projects
4 Active
7 Completed
3 Ideas

Content
3 Drafts
12 Published

Resume
Version 1.8
Last updated: 05 Oct 2026

Current Focus
Microsoft Fabric

Next Action
Complete Gold data layer
```

The dashboard should provide quick access to frequent actions.

---

# 13. Content Management

Content should support:

- create
- edit
- preview
- save draft
- publish
- unpublish
- archive

Where practical.

Use a simple lifecycle:

```text
DRAFT
  ↓
PREVIEW
  ↓
PUBLISHED
  ↓
ARCHIVED
```

Do not build a complex editorial workflow for Version 1.

---

# 14. Project Manager / Project Tracker

This is a core Version 1 feature.

The Project Tracker is primarily a private management tool, with selected information exposed publicly.

## Project lifecycle

```text
IDEA
 ↓
PLANNING
 ↓
ACTIVE
 ↓
PAUSED
 ↓
COMPLETED
 ↓
ARCHIVED
```

Optional:

```text
ABANDONED
```

---

# 15. Project Data Model

Each project should support:

```text
id
title
slug
short_description
long_description
category
status
priority
progress
start_date
target_date
completion_date
technologies
objectives
outcomes
repository_url
demo_url
documentation_url
featured
public
cover_image
tags
current_milestone
next_action
notes
created_at
updated_at
```

---

# 16. Project Dashboard

Admin should provide a useful overview.

Example:

```text
PROJECTS

ACTIVE
──────────────────────────────

Microsoft Fabric Platform
██████████████░░░░ 78%

Quant Trading System
██████████░░░░░░░░ 52%

Portfolio Website
█████████████████░ 90%
```

Filters:

- status
- category
- priority
- technology
- featured

---

# 17. Project Detail

Each project should support:

## Overview

What is the project?

## Problem

What problem does it solve?

## Objective

What is being attempted?

## Approach

How is it being solved?

## Technology

What tools are being used?

## Architecture

Optional diagram/image.

## Milestones

List of tasks.

## Results

What happened?

## Lessons

What was learned?

## Next Step

What happens next?

## Evidence

Links to:

- GitHub
- dashboard
- demo
- report
- documentation

---

# 18. Milestone System

Each project can contain milestones.

Example:

```text
Microsoft Fabric Platform

✓ Dataset selection
✓ Data ingestion
✓ Lakehouse
✓ Transformation
○ Gold layer
○ Power BI dashboard
○ Documentation
```

Each milestone should have:

```text
title
description
status
priority
due_date
completed_at
```

---

# 19. Next Action

Each active project should have one clearly defined next action.

Example:

```text
NEXT ACTION

Implement dimensional model for Gold layer.
```

This keeps the tracker useful as a real personal management system.

---

# 20. Public Project Representation

The public site should NOT expose private project notes.

Only publish selected fields.

Public project page:

```text
TITLE
Category

Problem

Objective

Approach

Technology

Architecture

Results

Lessons

Status

Last updated

Links
```

Private fields:

- personal notes
- private tasks
- sensitive deadlines
- private planning
- internal commentary

---

# 21. "Now" Page

Create a lightweight page showing current focus.

Suggested fields:

```text
current_projects
currently_learning
currently_researching
recent_achievement
next_goal
last_updated
```

Example:

```text
NOW — OCTOBER 2026

BUILDING
Microsoft Fabric analytics platform

LEARNING
C++

EXPLORING
Quantitative finance

RECENT
DP-700 certification

NEXT
Complete portfolio architecture
```

This page must be editable from the admin dashboard.

---

# 22. Research System

Version 1 can support a lightweight research/article model.

Fields:

```text
title
slug
summary
content
category
tags
status
published_at
updated_at
featured
```

Potential categories:

- Data
- Finance
- Quantitative Finance
- Engineering
- Business
- Technology

Research should eventually become a major differentiator.

---

# 23. Experiments

Future feature.

Use a research-lab model:

```text
Hypothesis
Experiment
Method
Result
Failure
Lesson
Next Attempt
```

Example:

```text
Experiment #007

Heston Calibration Attempt

Status: Failed

Hypothesis:
...

Result:
...

Why it failed:
...

Lesson:
...

Next attempt:
...
```

This should be Version 2 unless implementation is trivial.

---

# 24. Annual Review / Digital Annual Report

Future feature inspired by Berkshire Hathaway's long-term information archive.

Example:

```text
2026 ANNUAL REVIEW

What I learned
What I built
What I completed
What failed
Certifications
Research
Projects
Next year's priorities
```

This should become a yearly archive:

```text
/annual-review/2026
/annual-review/2027
/annual-review/2028
```

Do not make this a requirement for initial launch.

---

# 25. Terminal Mode

Future experimental feature.

Possible interface:

```text
$ lone --help

about
cv
projects
research
skills
now
contact
```

Terminal mode should be optional.

It must not replace the normal interface.

---

# 26. Visual Design Direction

## Overall

Modern, restrained, professional, information-dense.

Design reference:

```text
Berkshire information philosophy
+
Research publication
+
Modern data platform
+
Professional portfolio
```

## Typography

Use a high-quality modern sans-serif for primary text.

Optional monospace font for:

- metadata
- dates
- code
- project IDs
- technical labels
- terminal mode

Avoid using too many fonts.

Recommended initial direction:

- Sans: Inter, Geist, IBM Plex Sans, or equivalent.
- Mono: IBM Plex Mono, Geist Mono, JetBrains Mono, or equivalent.

Choose one final pair during implementation.

---

# 27. Color System

Use a restrained neutral base.

Suggested direction:

- off-white / white background
- near-black text
- neutral gray
- one restrained accent color

Avoid a rainbow palette.

Status colors can be used functionally:

- active
- completed
- paused
- draft
- error

Do not overuse color.

---

# 28. Motion

Animations should be subtle.

Use motion for:

- page transitions
- hover states
- loading states
- progress indicators
- small reveals

Avoid:

- excessive scroll animations
- animated backgrounds
- distracting parallax
- unnecessary 3D

Accessibility must include reduced-motion support.

---

# 29. Responsive Design

The website must work on:

- desktop
- laptop
- tablet
- mobile

The mobile experience is not a reduced version of desktop.

Prioritize:

1. readability
2. navigation
3. CV access
4. projects
5. contact

---

# 30. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:

- keyboard navigation
- semantic HTML
- proper heading hierarchy
- visible focus states
- sufficient contrast
- alt text
- accessible forms
- reduced motion support
- readable font sizes
- no information conveyed by color alone

---

# 31. Performance

The public site should be fast.

Target:

- minimal JavaScript where possible
- optimized images
- lazy loading
- compressed assets
- server-side/static rendering where appropriate
- caching
- minimal third-party scripts

Avoid adding libraries unless they provide clear value.

---

# 32. SEO

Include:

- page titles
- meta descriptions
- Open Graph metadata
- Twitter/X metadata if relevant
- canonical URLs
- sitemap
- robots.txt
- structured data where useful
- semantic headings

Personal structured data may include:

- Person
- WebSite
- Article
- CreativeWork
- SoftwareSourceCode where appropriate

Do not expose private information in structured data.

---

# 33. Recommended Technology Stack

## Preferred

### Frontend

Next.js + TypeScript

### Styling

Tailwind CSS

### UI

A restrained component system.

Use shadcn/ui or similar only where it improves consistency.

### Database

PostgreSQL

### ORM

Prisma or Drizzle

Choose one; do not use both.

### Authentication

Use a secure established authentication solution rather than inventing authentication.

Possible options:

- Auth.js
- Clerk
- Supabase Auth

Choose based on final hosting/database architecture.

### Storage

Object/file storage for:

- resume PDFs
- project images
- documents

Possible:

- Supabase Storage
- S3-compatible storage
- Cloudflare R2

### Deployment

Potential:

- Vercel
- Cloudflare
- equivalent production platform

Final choice should consider database, authentication, storage and cost.

---

# 34. Architecture Principle

Keep the system modular.

Suggested architecture:

```text
Browser
   │
   ▼
Next.js Application
   │
   ├── Public Routes
   │
   ├── Admin Routes
   │
   ├── API / Server Actions
   │
   ▼
Database
   │
   ├── Profile
   ├── Resume
   ├── Skills
   ├── Education
   ├── Certifications
   ├── Experience
   ├── Projects
   ├── Milestones
   ├── Research
   └── Site Content

File Storage
   │
   ├── Resume PDFs
   ├── Images
   └── Documents
```

---

# 35. Suggested Repository Structure

```text
portfolio/
│
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── cv/
│   │   ├── projects/
│   │   ├── research/
│   │   ├── writing/
│   │   ├── now/
│   │   └── contact/
│   │
│   ├── admin/
│   │   ├── page.tsx
│   │   ├── resume/
│   │   ├── projects/
│   │   ├── research/
│   │   ├── profile/
│   │   └── settings/
│   │
│   ├── api/
│   └── layout.tsx
│
├── components/
│   ├── public/
│   ├── admin/
│   ├── projects/
│   ├── resume/
│   └── ui/
│
├── lib/
│   ├── auth/
│   ├── db/
│   ├── storage/
│   ├── validation/
│   └── utils/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── content/
│
├── tests/
│
├── .env.example
├── README.md
├── package.json
└── tsconfig.json
```

This is a starting structure, not a rigid requirement.

---

# 36. Database Entities

Minimum Version 1 entities:

```text
User
Profile
Resume
Education
Certification
Experience
Skill
Project
ProjectMilestone
ResearchPost
SiteSettings
ActivityLog
```

Potential future entities:

```text
ProjectTask
Experiment
AnnualReview
Tag
ProjectTag
ResearchTag
MediaAsset
VisitorAnalytics
LearningGoal
```

---

# 37. Security Requirements

This is a critical part of the project.

## Admin

- authenticated
- authorization protected
- secure password/session handling
- rate limiting where appropriate
- CSRF protection where applicable
- secure cookies
- no secrets in frontend code

## File Uploads

Validate:

- MIME type
- extension
- size
- storage destination

Do not trust filenames.

PDF uploads should be handled safely.

## Database

Use:

- parameterized queries / ORM
- environment variables for credentials
- least-privilege database access

## Admin URLs

The admin URL may be `/admin`.

Security must come from authentication, not obscurity.

---

# 38. Activity Log

Track meaningful administrative changes.

Example:

```text
2026-10-05
Resume updated

2026-10-05
Project "Fabric Analytics Platform" updated

2026-10-04
About page edited
```

Fields:

```text
id
user_id
action
entity_type
entity_id
timestamp
metadata
```

Do not store sensitive data unnecessarily.

---

# 39. Backup Strategy

Because the website contains career information and project history:

- database backups
- file-storage backups
- Git repository
- exportable content

The system should not make the website the only copy of important information.

---

# 40. Content Strategy

The website should avoid generic professional clichés.

Avoid phrases such as:

- passionate about technology
- results-driven professional
- highly motivated individual
- innovative thinker
- passionate data enthusiast

unless supported by specific evidence.

Prefer concrete language.

Example:

Weak:

> Passionate about data analytics.

Better:

> I use Python, SQL and BI tools to investigate datasets and turn analysis into decision-ready outputs.

Best:

> Built an end-to-end retail analytics pipeline that transformed raw order data into a dimensional model and Power BI dashboard.

---

# 41. Project Writing Standard

Every major project should attempt to answer:

1. What was the problem?
2. Why did I build it?
3. What data/input did I use?
4. What approach did I take?
5. What technologies did I use?
6. What did I discover?
7. What worked?
8. What failed?
9. What did I learn?
10. What would I improve?
11. Where is the evidence?

This should become a reusable project template.

---

# 42. GitHub Integration

Future enhancement.

Potential features:

- repository link
- repository statistics
- language information
- last commit
- release
- README link

Do not make the public website dependent on GitHub APIs for basic functionality.

If GitHub is unavailable, project pages must still work.

---

# 43. Interactive Data Projects

Future feature.

Examples:

### Portfolio Risk Simulator

Inputs:

- assets
- weights
- period

Outputs:

- expected return
- volatility
- Sharpe ratio
- drawdown
- VaR

### Fabric Pipeline Demonstration

Display:

- rows processed
- pipeline status
- data layers
- transformation stages

### Quantitative Finance

Potential:

- Black-Scholes calculator
- implied volatility visualization
- volatility model comparison
- Heston calibration experiment

These should be separate from the core portfolio so they do not slow down the main site.

---

# 44. Analytics

Analytics should be privacy-conscious.

Measure only useful information such as:

- page views
- popular projects
- CV downloads
- referrers where appropriate

Avoid invasive tracking.

Analytics must not compromise site performance.

---

# 45. Admin UX Requirements

The admin panel must prioritize speed.

Common operations should require minimal clicks.

Examples:

```text
Add Project
Upload Resume
Update Current Focus
Publish Research
Edit Certification
```

Use forms with:

- clear labels
- validation
- autosave only if reliable
- draft status
- preview
- success/error feedback

---

# 46. Project Tracker UX

Admin project dashboard should support:

- list view
- optional kanban view
- filtering
- sorting
- progress
- status
- priority
- next action

Example kanban:

```text
IDEAS       PLANNING      ACTIVE       COMPLETED
─────       ────────      ──────       ─────────

Idea A      Project B     Project C    Project D
Idea E                    Project F    Project G
```

Do not overbuild task-management features.

The tracker is primarily for portfolio/career projects, not a replacement for Jira, Trello or Notion.

---

# 47. Version 1 Scope

## MUST HAVE

### Public

- Home
- About
- CV
- Projects
- Project details
- Skills
- Education
- Certifications
- Contact
- Now
- responsive design
- SEO
- accessibility

### Admin

- authentication
- dashboard
- profile editor
- resume upload/versioning
- project CRUD
- project status
- project progress
- milestones
- skills
- education
- certifications
- Now editor
- draft/publish
- activity log

### Infrastructure

- database
- secure authentication
- file storage
- deployment
- environment configuration
- error handling
- backups

---

# 48. Version 1 SHOULD NOT REQUIRE

- AI chatbot
- complex CMS
- multi-user administration
- public comments
- newsletter
- advanced CRM
- elaborate animations
- terminal mode
- advanced analytics
- complex task management
- social network features

These can be added later.

---

# 49. Version 2

Potential Version 2:

```text
Research
Writing
Experiments
GitHub integration
Annual Review
Interactive projects
Project kanban
Advanced archive
Public changelog
Analytics dashboard
```

---

# 50. Version 3

Potential Version 3:

```text
AI-powered site search
Personal knowledge base
Automatic project summaries
CV tailoring
Automated resume generation
Interactive quantitative models
Advanced data visualizations
Career analytics
Personal learning dashboard
Terminal interface
```

---

# 51. Development Phases

## Phase 0 — Discovery

Before coding:

- confirm content
- confirm visual direction
- confirm technology stack
- confirm domain strategy
- confirm hosting
- confirm authentication provider
- confirm database/storage architecture

Deliverable:

Approved technical specification.

---

## Phase 1 — Foundation

Build:

- repository
- Next.js
- TypeScript
- styling system
- database
- authentication
- environment configuration
- deployment pipeline

Deliverable:

Running application with secure admin access.

---

## Phase 2 — Public Portfolio

Build:

- home
- about
- CV
- projects
- project details
- skills
- certifications
- contact
- now

Deliverable:

Complete public portfolio.

---

## Phase 3 — Admin CMS

Build:

- dashboard
- profile editor
- resume management
- project management
- skills
- certifications
- education
- Now
- publishing controls

Deliverable:

Website can be managed without editing source code.

---

## Phase 4 — Project Tracker

Build:

- project lifecycle
- progress
- milestones
- priorities
- next actions
- filters
- dashboard summaries

Deliverable:

Functional private project-management system.

---

## Phase 5 — Hardening

Test:

- authentication
- permissions
- file uploads
- forms
- mobile
- accessibility
- performance
- SEO
- error states
- backups

Deliverable:

Production-ready Version 1.

---

# 52. Acceptance Criteria

Version 1 is complete when:

## Public

- [ ] Website loads successfully.
- [ ] Homepage communicates professional identity within seconds.
- [ ] CV can be viewed.
- [ ] Current resume can be downloaded.
- [ ] Projects can be browsed.
- [ ] Project pages contain meaningful evidence.
- [ ] Skills are linked to evidence where possible.
- [ ] Certifications are visible.
- [ ] Current focus is visible.
- [ ] Contact methods work.
- [ ] Website is responsive.
- [ ] Accessibility baseline is met.
- [ ] SEO metadata exists.
- [ ] Site is performant.

## Admin

- [ ] Admin authentication works.
- [ ] Unauthenticated users cannot access admin.
- [ ] Resume can be replaced.
- [ ] Resume version is recorded.
- [ ] Profile can be edited.
- [ ] Projects can be created.
- [ ] Projects can be edited.
- [ ] Projects can be archived.
- [ ] Projects have statuses.
- [ ] Projects have progress.
- [ ] Milestones can be created/updated.
- [ ] Current focus can be changed.
- [ ] Content supports draft/publish where applicable.
- [ ] Activity log records important changes.

## Security

- [ ] Secrets are not committed.
- [ ] Admin routes are protected.
- [ ] Upload validation exists.
- [ ] Database access is secured.
- [ ] Production environment uses HTTPS.
- [ ] Backups exist.

---

# 53. Design Rules for AI Coding Agents

If an AI coding agent is used to implement this project, it must follow these rules.

## Rule 1

Do not add features merely because they are technically interesting.

Ask:

> Does this improve the portfolio, career evidence, or project management?

## Rule 2

Do not redesign the information architecture without explaining why.

## Rule 3

Do not hard-code career information that belongs in the database/CMS.

## Rule 4

Do not expose private admin information publicly.

## Rule 5

Do not use fake project data in production.

Placeholder content may be used during development but must be clearly marked.

## Rule 6

Do not create meaningless skill percentages.

## Rule 7

Do not overuse animations.

## Rule 8

Do not compromise accessibility for aesthetics.

## Rule 9

Do not introduce a dependency without a reason.

## Rule 10

Keep components modular and maintainable.

---

# 54. Content Separation

Clearly distinguish:

### Public

Safe for anyone to view.

### Private

Only visible to Lone.

### Draft

Not publicly published.

### Archived

Historical but no longer current.

This distinction must exist at the data and application level.

---

# 55. Data Ownership

The platform should make it easy to export personal data.

Important career information should not be locked into the website.

At minimum, maintain:

- Git repository
- database backup
- resume files
- project documentation
- media backups

---

# 56. Future "Digital Annual Report"

The long-term vision is to create an annual archive.

Example:

```text
ARCHIVE

2026
├── Annual Review
├── Projects
├── Research
├── Certifications
└── Learning

2027
├── Annual Review
├── Projects
├── Research
├── Certifications
└── Learning
```

This becomes a long-term public record of professional development.

---

# 57. Product Principle

The website should never become a vanity project.

The goal is not:

> "Build an impressive website."

The goal is:

> **Build an impressive body of evidence and give it an excellent interface.**

The website is the interface.

The projects, analysis, research, engineering work and career development are the substance.

---

# 58. Success Metrics

The website is successful if a recruiter can answer the following within approximately one minute:

1. Who is Lone?
2. What is he studying?
3. What areas is he targeting?
4. What technologies does he use?
5. What has he actually built?
6. What certifications does he have?
7. How does he think?
8. Where can I see his work?
9. How can I contact him?

A second success metric:

> Lone can update his professional information without modifying application source code.

A third:

> Lone can manage his active portfolio projects from the private dashboard.

---

# 59. Final Product Definition

The finished Version 1 should be understood as:

> **A modern, information-first professional portfolio backed by a private career/content management system and a lightweight project-management tracker.**

It is inspired by Berkshire Hathaway's philosophy of making information directly available, but modernized for:

- data analytics
- data engineering
- quantitative finance
- software development
- professional recruiting
- personal knowledge management

The site should remain simple on the surface and become deeper as the visitor explores.

---

# 60. Initial Build Priority

When implementation begins, prioritize in this order:

```text
1. Foundation
2. Public information architecture
3. Visual system
4. CV/resume system
5. Project system
6. Admin authentication
7. Admin content management
8. Project tracker
9. Mobile/accessibility
10. SEO/performance
11. Testing
12. Deployment
```

Do not begin with advanced features.

The first production version should be small, reliable, fast, and genuinely useful.

---

# 61. First Development Milestone

The first milestone should produce:

```text
PUBLIC
────────────────────────
Home
About
CV
Projects
Project Details
Now
Contact

PRIVATE
────────────────────────
Admin Login
Admin Dashboard
Resume Manager
Project Manager
Profile Editor
Now Editor
```

Once this foundation works correctly, additional features can be introduced without destabilizing the core platform.

---

# 62. Guiding Statement

The project should be guided by this principle:

> **"Show the work. Document the thinking. Keep the record."**

The website is not merely a digital resume.

It is a living professional record that can grow with Lone Baithei's career.
