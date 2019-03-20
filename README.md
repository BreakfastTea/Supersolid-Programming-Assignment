# Supersolid Programming Assignment.

A simple node.js web service to handle the back-end for a game involving palindromes.


## Core Functionality

- User enters name and word
- If word is a palindrome (same backwards as forwards), then a high score
is recorded. (based on string length).
- Numbers are allowed
- Scores are persisted in memory.
- Score does not increase cumulatively, each score is independent.
- Multiple players may have the same word.


## Issues encountered

- I wanted to utilise TDD, but have not done TDD for node in eons and was not
confident I would make good use of it here. If I had to take this test again, I
would have attempted to get back up to speed with mocha/chai before starting the
test. Lesson learnt!
- Confused angular controller with node controllers duh!
- Forgot password to recently created db, but eventually remembered it, also duh!
- Figuring out app.js (I am not familiar with AngularJS so was a little thrown off by
some of the syntax ($scope for example). A quick google search sorted me out!).


## Possible future additions

- Proper error handling and visual feedback
- Ability to change number of displayed scores, and ability to delete scores.
- Use of keys and containerisation for security.


## To do
- Return score when inputting.
- call get scores again when new score submitted.
- Multiple score submissions and top score.
