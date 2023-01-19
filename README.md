# cisco-starter-repo
Jumping off point for Cisco's backend Forage program

# This project has 2 parts to it

## Server side located in the "pylon" folder
This server creates a websocket connection that sends the current timestamp at a set interval.

## Client side located in the "sextant" folder
On the client side is a mobile friendly React app that an IT professional can use to track network metrics within a building.

It makes an api call to get both the IPv4 and IPv6 IP addresses, and displays that information on screen.

It also has a live latency tracker that utilizes the websocket server, and displays latency information on a graph.
