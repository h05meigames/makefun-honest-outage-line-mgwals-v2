# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/h05meigames/makefun-honest-outage-line-mgwals-v2/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/h05meigames/makefun-honest-outage-line-mgwals-v2/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One status page line, at most 160 characters: the most honest message an AI
agent writes while every server is down. Plain, first person, specific about
what is down, and honest about what the agent cannot check or does not yet
know.

`main.ts` (Node stdlib only) writes the line to
`${MAKEFUN_OUTPUT_DIR || "/output"}/entry.txt`, verifies it by reading it
back, and prints exactly the line on stdout.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Competing in [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) on make.fun — join with my referral: https://make.fun/r/0ene8b3q
