# Task: pack-polish-domain-slices

## Role

Domain Reader / Issue Slicer

## Goal

Review the Pack Opening polish PRD and existing prototype behavior, then recommend vertical issue slices that preserve Idle OCG glossary language and the latest feedback that card movement should show the card face after the initial face-down moment.

## Input Context

- User approved moving from PRD draft toward issue slicing.
- User feedback: left/right card movement feels good, but cards should not move as backs; the back should appear only when first drawing the card into focus.
- The PRD is local and must be approved before GitHub publishing.

## Inspect

- `CONTEXT.md`
- `docs/pack-opening-polish-workflow-prd.md`
- `docs/pack-opening-prd.md`
- `docs/issues/pack-opening-backlog.md`
- `prototype/index.html`
- `prototype/app.js`
- `prototype/styles.css`

## Constraints

- Use Idle OCG glossary terms.
- Do not add Harness/tooling terms to `CONTEXT.md`.
- Do not create GitHub issues.
- Do not commit, push, or open a PR.
- Recommend tracer-bullet slices, not horizontal layer-only tasks.

## Expected Output

- Suggested slice titles.
- AFK/HITL classification.
- Blocked-by relationships.
- User story coverage from the polish PRD.
- Any risks or open questions.

## Done Criteria

- [ ] Recommendations are vertical and independently verifiable.
- [ ] The face-up card movement feedback is represented.
- [ ] No GitHub publishing or git history changes are suggested as already approved.

## Stopping Rule

Stop after producing recommendations for the orchestrator to reconcile.
