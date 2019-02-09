# 101 Ways to Say "Hello, World"

A Rube Goldbergian exercise in exploring convoluted solutions to simple problems. The goal of this repo is to accrue 101 uniqe approaches to saying 'Hello, World' in JavaScript. Over engineering and outside-the-box thinking is encouraged!

## Getting Started & Contributing

**Please contribute your solution!** I want to see your over-engineered solutions to the first program all programmers learn. For discussions on ways to improve this please see the issue tracker.

If you would like to add your own "Hello, World" solution to the repository I suggest starting with the `template.js` file. Copy it to the correct filename in the `src/` folder and rename it to the next number in the sequence, e.g. `00X-hellow-world.js`. 

So long as your solution returns a value of "Hello, World" (case-sensitive!) it should pass the tests. Look at `src/001-hellow-world.js` for the simplest example.

## Rules

For the most part there are no rules, though I exepct (and slightly hope) that might change as people make more adventurous solutions! However, to keep the test script usable and potentially automatable, I'd ask that no solutions require an extreme amount of time to execute. One example I had but nixed: a "Hello, World" script that takes days to execute. Funny and interesting, but kind of renders the testing impractical.


## Running Tests

Simply run:

`npm run test`

All of the contributed examples will be tested to assure they return "Hello, World" as their values. Examples that fail should be noted in the output.

If you use the `template.js` file to start it's setup so that you can also simply run `node src/00x-hello-world.js` to execute your script and see what the output will be.

