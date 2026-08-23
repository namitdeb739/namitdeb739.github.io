---
title: "kittcat"
summary: "Automated bag-handling prototype: an ATmega328 state machine driving servos, stepper and solenoid from laser, PIR, pressure and limit-switch inputs"
order: 3
tech: ["C++", "PlatformIO", "ATmega328"]
repo: https://github.com/namitdeb739/kittcat
draft: false
year: 2026
hardware: ATmega328
status: Complete
---

Purpose: coordinate servos and a solenoid to pick up a bag, accept an inserted
item, and release/restart.

Behavior: a small state machine runs a fixed sequence (pick up, wait for
insert, close valve, wait for retrieval, restart).

## Usage notes

- Power: use an external 5V supply for servos/solenoid. Always connect the
  external supply ground to the board ground.
- Serial: use the serial monitor for debug output; reduce verbosity if logging
  affects timing.
- Sensors: the code polls the distance sensor continuously during the
  insert/retrieve stages; that polling is intentional and required.
