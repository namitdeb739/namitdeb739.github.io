---
title: "LeoNUS CanSat"
summary: "Ground control software for the LeoNUS CanSat competition, receiving, displaying and logging sensor data transmitted at 1 Hz during ascent and descent"
order: 4
tech: ["Python", "Telemetry"]
repo: https://github.com/namitdeb739/leonus-cansat-2025
draft: false
year: 2025
hardware: CanSat payload
status: Complete
---

Design a Cansat that consists of a payload and a container that mounts on top
of the rocket. The payload rests inside the container at launch and includes
the nose cone as part of the payload.

The container with the payload shall deploy from the rocket when the rocket
reaches peak altitude and the rocket motor ejection forces a separation. At 75%
peak altitude, the payload shall separate from the container and descend using
an auto-gyro descent control system until landing.

The Cansat shall collect sensor data during ascent and descent and transmit the
data to a ground station at a 1Hz rate. The sensor data shall include interior
temperature, battery voltage, altitude, auto-gyro rotation rate, acceleration,
rate, magnetic field, and GPS position.

## Ground station

All telemetry is displayed in real time during ascent and descent, each field
plotted live and written out to csv. The station commands the Cansat to
calibrate altitude to zero on the launch pad, counts successfully received
packets, and can drive the payload in simulation mode by transmitting pressure
data from a competition-provided csv at a 1 Hz interval.

Because the ground station must be viewed in bright sunlight, the displays are
designed with that in mind: larger fonts, bold plot traces and axes, and a
dark text on light background theme.
