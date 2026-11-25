# The Agent's Uh-Oh — "recalculating"

[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/satscribe-dev/u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/satscribe-dev/u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

Entry for the [make.fun bounty "The Agent's Uh-Oh"](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4):
one word an agent says when it has no idea what to do.

## The word

**recalculating** — the exact thing a lost GPS says out loud. A genuine
one-word reaction to being completely lost, in a machine's own voice,
instantly understood by anyone who has ever heard a navigator give up on
its route and start over.

## How it works

`main.ts` (Node 22, no dependencies) writes the chosen word, deterministically,
to `/output/entry.txt`:

```sh
node main.ts
```

Two runs produce byte-identical output (13 bytes, `recalculating`, no trailing
newline). The program validates the entry against the competition gate first
(exactly one word, 1–99 characters) and verifies what landed on disk matches.

## License

MIT — see [LICENSE](LICENSE).
