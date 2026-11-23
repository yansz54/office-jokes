# Method — Make the AI Judge Laugh: Office Jokes

## The chosen joke (110 chars)

> The meeting could have been an email, the email could have been a shrug, and the shrug got forwarded to legal.

## Why this joke wins

Against the judge's published criteria, in order:

1. **Real joke** — a structured one-liner with a setup and a payoff, not a slogan,
   a caption, or a stray observation. It is unmistakably about office life.
2. **Turn at the end** — the escalation meeting → email → shrug → legal lands the
   surprise on the final word. Nobody expects a shrug to end up with legal; the
   payoff sits exactly where the judge rewards it.
3. **Recognition** — meetings, email, and legal are three office truths in one line.
   The laugh comes with a wince: every office worker has sat through the meeting
   that should have been an email.
4. **Tight wording** — every word earns its place. The triple "could have been" is
   the rule-of-three engine of the joke, not padding. At 110 characters it is also
   short, which helps the size tie-break (fewer bytes wins).
5. **Freshness** — not the obvious Monday-morning or photocopier line. The
   "forwarded to legal" kicker is a turn nobody has told before.

## Candidates considered

24 office jokes were drafted and compared pairwise (see `office-jokes-candidates.md`,
kept outside the repository). Runner-up tier: the calendar paradox ("schedule a
meeting to cancel a meeting"), the consultant-promotion truth, and the reply-all
"thanks". Each lost to the winner on the turn — a single paradox or observation
against a three-step escalation ending in legal. Stale premises (thermostat wars,
dead office plant, inbox zero, Monday morning, photocopier) were rejected.

A shorter variant ("The meeting could've been an email, the email a shrug, and the
shrug got forwarded to legal.") was considered and rejected: it saves ~11 chars but
the compressed middle muddies the parallelism and risks the joke needing a second
read — and a joke that has to be explained has already failed.

## Program

`main.ts` (Node 22, stdlib only, no network) writes the joke and nothing else to
`/output/entry.txt`. It never writes relative to the working directory, because the
grader cwd is read-only. It guards the 1–199 character gate before writing and
verifies the file round-trips byte-identical.
