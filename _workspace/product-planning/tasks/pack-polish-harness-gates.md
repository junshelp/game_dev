# Task: pack-polish-harness-gates

## Role

Harness Gate Reviewer

## Goal

Review the product-planning workflow requirements and identify the approval gates, local artifact paths, and publication constraints that must be preserved when drafting the issue backlog.

## Input Context

- The workflow has produced a local PRD draft at `docs/pack-opening-polish-workflow-prd.md`.
- The user has asked to proceed and requested multi-agent usage review.
- The next artifact should be a local issue backlog draft only.

## Inspect

- `docs/adr/0001-adopt-meta-harness-for-codex-port.md`
- `docs/harness/contracts.md`
- `docs/harness/handoff-workspace.md`
- `docs/harness/product-planning/team-spec.md`
- `docs/harness/product-planning/github-publishing.md`
- `.agents/skills/product-planning-orchestrator/SKILL.md`
- `.agents/skills/to-issues/SKILL.md`

## Constraints

- Use Codex-native paths only.
- Do not use `.claude` paths as runtime paths.
- Do not create GitHub issues.
- Do not commit, push, or open a PR.
- Stop after local issue backlog draft guidance.

## Expected Output

- Required pending approval gates.
- Recommended issue backlog path.
- Validation checks for the local backlog.
- Any risks or open questions.

## Done Criteria

- [ ] Approval gates match the Harness contracts.
- [ ] Path recommendations are Codex-native.
- [ ] The next required user approval is explicit.

## Stopping Rule

Stop after producing gate and validation recommendations for the orchestrator to reconcile.
