# Codex Harness Port PRD

## Problem Statement

The project wants a Codex-native Harness workflow that feels like the original Harness tool: a user invokes a skill for a goal, and the system helps shape purpose-specific skills, planning docs, issue slices, and publishing steps. Directly porting `revfactory/harness` would carry Claude Code runtime assumptions into Codex, including `.claude` paths, Claude-specific team commands, and `CLAUDE.md` conventions.

The port needs to preserve the useful Harness idea: multi-agent planning and orchestration. It should do this using Codex-native project-local skills, durable file contracts, explicit approval gates, and existing planning/GitHub workflows.

## Solution

Use `SaehwanPark/meta-harness` as the conceptual base, then selectively vendor only the project-local artifacts needed for this repository.

The initial port will add a Harness meta-skill, a product-planning orchestrator skill, and GitHub publishing contract docs. The workflow will use an explicit chain: draft PRD, ask for approval, draft issue slices, ask for approval, then publish GitHub issues and commit only after explicit approval.

Multi-agent behavior will be hybrid. The durable contract is file-based: team specs, specialist skill specs, and `_workspace/` handoff files. Runtime worker delegation is allowed when a bounded parallel slice benefits from it, but generated files remain the source of truth.

## User Stories

1. As a project owner, I want to invoke a Harness skill with a product or engineering goal, so that I can get a structured workflow without manually picking every supporting skill.
2. As a project owner, I want Harness to inspect existing docs and ADRs, so that generated plans use project language and respect prior decisions.
3. As a project owner, I want Harness to create project-local skills, so that the workflow is versioned with the project instead of hidden in user-level config.
4. As a project owner, I want Harness to support multi-agent team design, so that complex work can be decomposed into orchestrator and specialist responsibilities.
5. As a project owner, I want Harness to use file-based handoff contracts, so that worker outputs are reviewable and reproducible.
6. As a project owner, I want Harness to call or mirror `to-prd`, so that product plans follow the repository's planning conventions.
7. As a project owner, I want Harness to call or mirror `to-issues`, so that PRDs become independently grabbable vertical slices.
8. As a project owner, I want draft PRDs to be local first, so that I can review and revise before publishing.
9. As a project owner, I want draft issue slices to be local first, so that I can approve granularity and dependencies before GitHub issue creation.
10. As a project owner, I want GitHub publishing to require explicit approval, so that the workflow does not mutate the issue tracker unexpectedly.
11. As a project owner, I want commits to require explicit approval, so that repo history stays intentional.
12. As a project owner, I want the port to avoid Claude-specific runtime assumptions, so that future Codex sessions can use it reliably.
13. As a project owner, I want a clear GitHub publishing contract, so that agents know when to draft, when to ask, and when to publish.
14. As a project owner, I want the initial artifact set to be small, so that the port is easy to review and adjust.
15. As a future agent, I want a team spec for product planning, so that I know the required roles, handoffs, and approval gates.
16. As a future agent, I want validation expectations, so that generated skills and handoffs can be checked before use.

## Implementation Decisions

- Adopt `SaehwanPark/meta-harness` as the base for the Codex-native port.
- Treat `revfactory/harness` as an upstream concept source, not as the runtime contract.
- Use project-local installation under `.agents/skills` rather than user-level installation under `~/.codex/skills`.
- Selectively vendor needed artifacts instead of installing the whole upstream tree.
- Initial artifact set includes:
  - Harness meta-skill.
  - Product-planning orchestrator skill.
  - Product-planning team spec.
  - GitHub publishing contract docs.
- Do not create a separate GitHub publisher skill initially; use the existing GitHub plugin or `gh` workflow behind an approval gate.
- Preserve multi-agent Harness feel through orchestrator skills, specialist skill specs, bounded worker delegation, and deterministic `_workspace/` handoff files.
- Use an explicit planning chain: PRD draft, approval, issue slice draft, approval, GitHub issue creation, commit.
- GitHub issue creation, commit creation, push, and PR creation require explicit approval.
- `CONTEXT.md` remains unchanged because Harness is development tooling, not Idle OCG domain language.
- Record the architectural choice in an ADR.

## Testing Decisions

- Test external workflow behavior, not prompt internals.
- Validate skill frontmatter and required sections.
- Validate that generated paths are Codex-native and do not reference `.claude` paths as runtime targets.
- Validate that the product-planning orchestrator produces a PRD draft before issue drafts.
- Validate that GitHub publishing instructions include an explicit approval gate.
- Validate `_workspace/` handoff shape for worker delegation.
- Smoke-test by invoking the Harness workflow on a small planning request and confirming it produces local drafts without publishing.

## Out of Scope

- Full direct clone of `revfactory/harness`.
- User-level installation.
- Automatic GitHub issue publishing without approval.
- Automatic commit, push, or PR creation without approval.
- A dedicated GitHub publisher skill in the first slice.
- Rewriting existing Idle OCG game prototype code.
- Adding Harness terms to the Idle OCG glossary.

## Further Notes

The key porting principle is translation, not emulation. Claude Harness concepts should survive only when they can be expressed through Codex-native skills, docs, handoff files, and approval gates.
