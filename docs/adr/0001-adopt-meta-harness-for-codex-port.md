# Adopt Meta Harness for Codex Port

Status: accepted

We will adopt `SaehwanPark/meta-harness` as the base for a Codex-native Harness port instead of directly adapting `revfactory/harness`. The original Harness is built around Claude Code runtime conventions such as `.claude/agents`, `.claude/skills`, `CLAUDE.md`, and Claude-specific team orchestration commands, while Meta Harness already translates the model into Codex conventions such as `.agents/skills`, `AGENTS.md`, file-based handoff, installer scripts, and validation.

For this repository, we will vendor only the project-local pieces needed for a usable Harness workflow rather than install the whole upstream tree. The initial artifact set will include the Harness meta-skill, a product-planning orchestrator, and GitHub publishing contract docs. The port must still support multi-agent harness design through orchestrator skills, specialist skills, team specs, bounded worker delegation, and deterministic `_workspace/` handoff files. Its execution model is hybrid: the durable contract is file-based, while runtime worker delegation is allowed when a bounded parallel slice benefits from it. Product planning runs through an explicit chain: draft PRD, request approval, draft issue slices, request approval, then publish GitHub issues and commit only after explicit approval.

## Considered Options

- Directly install or minimally patch `revfactory/harness` into Codex.
- Use `meta-harness` as the base and selectively absorb upstream Harness concepts.
- Build a one-off Harness only for the Idle OCG prototype.

## Consequences

The port should treat Claude Harness as an upstream concept source, not as the runtime contract. Any upstream feature must be translated into Codex-native paths, prompts, handoff files, and validation before adoption.
