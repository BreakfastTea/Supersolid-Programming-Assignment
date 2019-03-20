# Supersolid Programming Assignment.

A simple node.js web service to handle the back-end for a game involving palindromes.


## Core Functionality

- User enters name and word
- If word is a palindrome (same backwards as forwards), then a high score
is recorded. (based on string length).
- All characters are allowed.
- Scores are persisted in memory.
- Score does not increase cumulatively, each score is independent.
- Multiple players may have the same word.


## Issues encountered

- I wanted to utilise TDD, but have not done TDD for node in eons and was not
confident I would make good use of it here. If I had to take this test again, I
would have attempted to get back up to speed with mocha/chai before starting the
test.
- Confused angular controller with node controllers duh!
- Forgot password to recently created db, but eventually remembered it, also duh!


## Possible future additions

- Proper error handling and visual feedback
- Same name can't submit same word more than once.
- Ability to change number of displayed scores, and ability to delete scores.
- Use of api keys and containerisation for security.
