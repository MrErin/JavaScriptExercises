# Drag And Drop

## Requirements:

The user should be able to drag one of the middle cards into either the top box, or the bottom box. However, there's a problem with the way the code currently works. There's also a couple changes you need to make.

[Assignment Link](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-3-the-initiate/chapters/JS_EVENTS.md)

## Completed features:

1. The user should only be able to drag one card into either box. Use the childNodes property to ensure that, if a card is already in the box, another can't be added.
1. If you drag one of the cards into the top/bottom box, and then drag another card into the first one, you get a nested card. You need to prevent this from happening.
1. The user should be able to move a card from the top/bottom box back to the middle.

## Structure:

* .stage refers to a card
* .target is one of the two boxes (finished and current)

## To Run:

1. Clone the repo.
2. From the command line, cd into the directory.
3. Type ```hs -o``` into the command line.