/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Kyle Matthew
* Created on: Mar 2026
* This program does an RGB LED by using circuits+.
*/

// variable
let score = 0
let randomNumber = (0,2)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Shake the Micro:Bit
input.onGesture(Gesture.Shake, function () {
  randomNumber = randint (0,2)
  basic.clearScreen()

  // Show the corresponding icon
  if (randomNumber == 0) {
  basic.showIcon(IconNames.SmallSquare) 
  } 
  if (randomNumber == 1) {
  basic.showIcon(IconNames.Square)      
  } 
  if (randomNumber == 2) {
  basic.showIcon(IconNames.Scissors)    
  }

  // Hold the icon for 5 seconds (5000 milliseconds)
  basic.pause(5000)
  basic.clearScreen()
})

// Press A to increase score
input.onButtonPressed(Button.A, function () {
  score = score + 1
  basic.showIcon(IconNames.Yes)
  basic.pause(1000) 
  basic.clearScreen()
})

// Press B to check your present score
input.onButtonPressed(Button.B, function () {
  basic.showString('Score:' + score)
})
