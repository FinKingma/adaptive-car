Feature: Adaptive Cruise Control
  As a driver
  I want my car to adjust its speed to the car in front of me
  So that I can use my cruise control in traffic

Scenario: Car adjusts its speed when it reaches another car
  Given John drives at 60 mph
  And William drives at 70 mph
  When William nears John
  Then Williams car will adjust its speed to 60 mph

Scenario: Cruise Control adjustment is activated at a car distance of 10m
  Given Johns is at the 20m marker
  When William is approaching John at the 10m marker
  Then Williams cruise control adjustment is activated

Scenario: Car returns to its original speed when there are no cars in the vicinity
  Given John drives at 60 mph
  And William nears John at 70 mph
  When John speeds up to 80 mph
  Then Williams car will adjust its speed back to 70 mph