# Codex Harness Port Issue Backlog

This backlog translates the Codex Harness Port PRD into tracer-bullet implementation slices. The current directory is not a Git repository, so these are local ready-to-publish drafts rather than GitHub issues.

## Proposed Breakdown

1. **Title**: Add project-local Harness meta-skill skeleton
   **Type**: AFK
   **Blocked by**: None
   **User stories covered**: 1, 2, 3, 12, 14

2. **Title**: Define Codex-native Harness artifact contracts
   **Type**: AFK
   **Blocked by**: 1
   **User stories covered**: 4, 5, 12, 15, 16

3. **Title**: Add product-planning orchestrator skill
   **Type**: AFK
   **Blocked by**: 1, 2
   **User stories covered**: 1, 2, 6, 7, 8, 9, 15

4. **Title**: Add GitHub publishing approval contract
   **Type**: AFK
   **Blocked by**: 2, 3
   **User stories covered**: 10, 11, 13

5. **Title**: Add multi-agent handoff workspace conventions
   **Type**: AFK
   **Blocked by**: 2
   **User stories covered**: 4, 5, 16

6. **Title**: Add Harness validation and smoke-test checklist
   **Type**: AFK
   **Blocked by**: 1, 2, 3, 4, 5
   **User stories covered**: 12, 14, 16

7. **Title**: Run a sample planning workflow through Harness
   **Type**: HITL
   **Blocked by**: 3, 4, 5, 6
   **User stories covered**: 1, 6, 7, 8, 9, 10, 11

## Issue Drafts

### 1. Add project-local Harness meta-skill skeleton

## What to build

Add a project-local Harness meta-skill that explains how to create purpose-specific Codex workflows from a user goal. The skill should inspect repository docs and ADRs, select an appropriate workflow shape, and generate or update local project artifacts only.

## Acceptance criteria

- [ ] A `harness` skill exists under the project-local skills directory.
- [ ] The skill tells agents to inspect existing docs, ADRs, and skills before generating new artifacts.
- [ ] The skill identifies `meta-harness` as the Codex-native base and `revfactory/harness` as an upstream concept source.
- [ ] The skill uses Codex-native paths and does not require `.claude` runtime paths.
- [ ] The skill states that GitHub publishing and commits require explicit approval.

## Blocked by

None - can start immediately

### 2. Define Codex-native Harness artifact contracts

## What to build

Define the core artifact contracts for Codex Harness: team specs, specialist skill specs, orchestrator specs, and handoff files. The contracts should be small, reviewable, and suitable for versioning inside the project.

## Acceptance criteria

- [ ] Harness contract docs describe team specs, specialist skills, orchestrators, and handoff files.
- [ ] Contracts use project-local paths.
- [ ] Contracts explain how bounded worker delegation fits into the file-based source of truth.
- [ ] Contracts separate durable files from optional runtime delegation.
- [ ] Contracts avoid Claude-specific runtime commands.

## Blocked by

- Issue 1

### 3. Add product-planning orchestrator skill

## What to build

Add a product-planning orchestrator skill that runs the explicit planning chain: draft PRD, request approval, draft issue slices, request approval, then prepare GitHub publishing and commit steps only after approval.

## Acceptance criteria

- [ ] A product-planning orchestrator skill exists under the project-local skills directory.
- [ ] The orchestrator tells agents to draft a PRD before drafting issue slices.
- [ ] The orchestrator reuses or mirrors the repository's `to-prd` conventions.
- [ ] The orchestrator reuses or mirrors the repository's `to-issues` conventions.
- [ ] The orchestrator requires user approval between PRD draft and issue draft.
- [ ] The orchestrator requires user approval before GitHub issue creation or commit.

## Blocked by

- Issue 1
- Issue 2

### 4. Add GitHub publishing approval contract

## What to build

Add docs that define how Harness workflows prepare GitHub issue creation and commits after local draft approval. The docs should specify approval gates, expected issue body shape, label expectations, and commit boundaries.

## Acceptance criteria

- [ ] GitHub publishing docs state that local drafts come first.
- [ ] GitHub issue creation requires explicit user approval.
- [ ] Commit creation requires explicit user approval.
- [ ] Push and PR creation require explicit user approval.
- [ ] Docs describe how to handle missing GitHub auth, missing repo, or missing label vocabulary.
- [ ] Docs avoid creating a separate GitHub publisher skill in the initial port.

## Blocked by

- Issue 2
- Issue 3

### 5. Add multi-agent handoff workspace conventions

## What to build

Add `_workspace/` handoff conventions for multi-agent Harness workflows. The convention should let an orchestrator assign bounded worker tasks and collect deterministic outputs without making runtime worker calls the only source of truth.

## Acceptance criteria

- [ ] Handoff docs define where worker inputs and outputs live.
- [ ] Handoff docs define required fields for a worker task.
- [ ] Handoff docs define required fields for a worker result.
- [ ] Handoff docs state that runtime delegation is optional and bounded.
- [ ] Handoff docs explain how the orchestrator reconciles worker outputs.

## Blocked by

- Issue 2

### 6. Add Harness validation and smoke-test checklist

## What to build

Add validation expectations and a smoke-test checklist for the port. Validation should catch missing skill metadata, Claude runtime leakage, broken planning order, missing approval gates, and malformed handoff files.

## Acceptance criteria

- [ ] Validation checklist covers skill frontmatter.
- [ ] Validation checklist catches `.claude` paths used as runtime targets.
- [ ] Validation checklist verifies PRD-before-issues order.
- [ ] Validation checklist verifies approval gates before GitHub publishing and commits.
- [ ] Validation checklist covers `_workspace/` handoff shape.
- [ ] Smoke-test checklist verifies a planning request can produce local drafts without publishing.

## Blocked by

- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5

### 7. Run a sample planning workflow through Harness

## What to build

Run one sample planning request through the new Harness workflow and review the generated PRD draft, issue slices, and publishing prompt. Use the result to tune the skill instructions and contracts.

## Acceptance criteria

- [ ] A sample user goal is processed through the Harness meta-skill.
- [ ] The workflow produces a local PRD draft.
- [ ] The workflow asks for approval before issue slice drafting.
- [ ] The workflow produces local issue slice drafts.
- [ ] The workflow asks for approval before GitHub publishing or commit.
- [ ] Any unclear instructions found during the sample run are corrected.

## Blocked by

- Issue 3
- Issue 4
- Issue 5
- Issue 6
