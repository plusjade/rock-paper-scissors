# Think in Data Challenge: Rock Paper Scissors

Hi there! This challenge is a very short course aimed at training our brains to see problems in terms of _data_. Fundamentally, most all programming concepts can be tackled by _modeling the data_.

## The Methodology 

We'll quickly walk through an example problem and explicitly outline _the thinking_ behind how to build the solution from the ground up.

This is different from other tutorials in that our goal is to examine _how we derive a solution_, not merely documenting the solution itself.

## Goals

Gain practice in _thinking in data_. 

I would like you to be able to answer these questions for yourself when running into _any_ problem:

- Where do I start?
- How do I build a control test/environment to assert and measure my progress?
- What is next? Where do I go from here?

By examining _how we think_ and training ourselves to _think in data_, we give ourselves a more powerful toolset to solve problems in a disciplined and autonomous manner =).


## The Challenge

Build a basic web-browser application that allows two players to play the game "rock paper scissors".

## Prerequisites

Basic knowledge of the `key/value map` and `Array` data structures.

I use `key/value map` as the common name to refer to an unordered set of key/value pairs which has many names depending on the language:

- associative array
- hash table
- dictionary


# Challenge Outline

First let's outline what exactly "rock paper scissors" is.

**Basic Setup**

- Two players should be able to play.
- Each player can decide three options to play: "rock", "paper", "scissors"
- Each takes their turn at the same time based on a count of say 3 seconds.

**Gameplay**

The game is played between two people. A round consists of both players simultaneously "throwing" either 
a rock, paper, or scissors out into the playing field against the opponent's choice.
After choices have been thrown the field is analyzed to determine the winner.

**Rules**

Wins and losses are calculated based on the following rule system:


# Can We Model These Rules as Data?

Ultimately we'll need to create code logic to determine which player wins and loses for a given set of choices made.
The data driving which choice wins relative to another choice is the set of rules.
Therefore we need to model the rules as data to efficiently work with it in our code.

How to model these rules as data???


## What Do the Rules Model?

The rules model a given player's choice and what _other_ choice this choice beats.
We can see there are only three unique choices "rock", "paper", "scissors".
We can see the words "breaks", "cut", and "covers" are really just meanings for "WIN".
So a rock "WINS" against scissors which implicitly means scissors "LOSES" against rock.

So we have 3 unique "choices" and 2 unique "outcomes" that are being modeled in this data.
We can also see that each line represents a "round" of play.
Finally since in each round if you reverse the choices you see which choice "LOSES" against the other.

Therefore the data represents the win/loss outcomes between 2 choices when played against one another in a given "round" with 6 total possible round combinations.

How would you model this as data?


# Let's Lean on Our Core Data Structures.

`key/value map` and `Array`.

We can say the data associates two "choices" with one "outcome".
Assocations between two values are a very common use-case for `key/value maps` in that one value is the "key" and the other value is the "value"
so a `key/value map` sounds like a good data structure to try.


# Did We Forget Something?

The previous data structure represents the association of the two choices in the first round. However it does not show the outcome!

How can we include the outcome of this round?

We have correctly associated "rock" with "scissors". We need to associate this _pair_ with the outcome "WIN".
If a `key/value map` works for one association, it can work for two!


# It works!

The below code works! We have modeled the first round in data. We can get the outcome by accessing the data-structure:

```javascript
> round["rock"]["scissors"];
> "WIN"
```

# Add All the Rounds

Next let's add all the remaining rounds to our data structure:

# Wait, that's not exactly how key/value maps work!

Notice I have duplicate keys for every choice. The last defined key/value definition will overwrite the earlier one so our data model will not be complete.

But our key/value map is better than that! We just need to merge the values onto a single key:


# It Works for All Rounds!

Our data-structure can now give us all outcomes for all choice pairs!

    > rounds["rock"]["scissors"];
    > "WIN"

    > rounds["scissors"]["rock"];
    > "LOSE"

    > rounds["paper"]["scissors"];
    > "LOSE"


# Analyzing Our Work So far...

Hmmm... what if we do this:

    -> rounds["scissors"]["scissors"];
    -> undefined

There's no reason two players couldn't choose the same choice! We haven't modeled that round =(. In the scenario both players choose the same choice there is neither a "WIN" nor "LOSE" event, so let's define a new event "TIE". We need to support every possible "TIE" scenario:

Before looking at the code; how would you model this new data?
