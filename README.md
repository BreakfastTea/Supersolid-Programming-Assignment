# Supersolid Programming Assignment.

A simple node.js web service to handle the back-end for a game involving palindromes.


## Getting Started

- Clone or download this repo
- Navigate to project folder and run the following commands:
- npm install
- npm start
- Navigate to http://localhost:3000 in your browser and enjoy!


## Core Functionality

- User enters name and word
- If word is a palindrome (same backwards as forwards), then a high score
is recorded (based on string length).
- Letters and numbers are accepted.
- Scores are persisted in memory.
- Score does not increase cumulatively, each score is independent.
- Multiple players may have the same word.


## Issues encountered

- I wanted to utilise TDD, but have not done TDD for node in eons and was not
confident I would make good use of it here. If I had to take this test again, I
would have attempted to get back up to speed with mocha/chai before starting the
test.
- Some connection issues with MongoDB and using MongoDB Atlas, but nothing a
quick search couldn't fix.
- Forgot password to recently created db, but eventually remembered it!


## Possible future additions

- Proper error handling and visual feedback
- Same name can't submit same word more than once.
- Ability to change number of displayed scores, and ability to delete scores.
- Enhanced security features and authentication.
