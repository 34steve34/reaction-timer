REACTION TIMER APP
==================
Created: January 2026

FEATURES:
- Random start delay: 3-5 seconds after pressing START
- Adjustable interval between alerts (default: 5 seconds)
- Vibration + sound alert at each interval
- Alert counter: tracks total number of alerts
- Count-up timer: shows elapsed time in MM:SS.T format (includes tenths of seconds)
- Optional warning system: plays distinct tone & vibration X seconds before specified alert

CONTROLS:
- START button: begins the timer sequence
- RUNNING button: stops the timer (appears after start)
- Interval setting: change time between alerts (1-300 seconds)
- Warning checkbox: enable pre-alert warnings
  - Warn seconds: how many seconds before the target alert (1-10)
  - Alert #: which alert number to warn before (2-99)

ALERTS:
- Regular alert: 1000 Hz tone, 0.5s vibration
- Warning alert: 600 Hz tone (lower), 0.3s vibration (shorter)

EXAMPLE:
If interval = 5s, warning enabled, warn 3s before alert #4:
- START signal at 0s (vibrate + beep, timer starts counting, user begins running)
- Alert 1 at 5s (after first interval)
- Alert 2 at 10s  
- Alert 3 at 15s
- WARNING at 17s (3s before alert 4)
- Alert 4 at 20s
- Alert 5 at 25s
- etc.

TECHNICAL:
- Pure HTML/CSS/JavaScript (no dependencies)
- Uses Web Audio API for sound
- Uses Vibration API for haptic feedback
- Progressive Web App (PWA) installable to home screen
- Works completely offline after first load
- Local storage not used - all state in memory

USAGE:
1. Open in mobile browser (Chrome or Samsung Internet recommended)
2. Add to home screen for app-like experience
3. Adjust settings before pressing START
4. Timer begins after random 3-5 second delay
5. Press RUNNING to stop at any time
-->
