# Dual Audio Player

A script for playing two audio files simultaneously to showcase before/after comparisons.

## How It Works

The Dual Audio Player allows users to play two audio files at the same time, enabling a direct comparison between an original and a modified (mastered) version of the audio. The script provides buttons to control playback and adjust the volume levels of each audio file independently.

### Features

- **Play/Pause Control:** A single button toggles the playback of both audio files simultaneously.
- **Volume Control:** Two buttons allow users to switch between the original and mastered audio by adjusting the volume levels of the corresponding audio files.
- **End of Playback Handling:** The script includes logic to handle events when the audio files finish playing, ensuring a smooth user experience.

### Key Technologies Used

- **HTML:** The structure of the page includes buttons for controlling the audio playback. The script tags use the `defer` attribute to ensure that the DOM is fully loaded before the script runs.
- **JavaScript (ES6):** The script leverages modern JavaScript features, such as `const` for variable declarations and event listeners to handle user interactions with the audio controls.
- **Web Audio API:** The script uses the `Audio` object, which is part of the Web Audio API, to load and control the playback of the audio files. The `Audio` object allows for easy manipulation of audio playback, including setting the volume and responding to events like `ended`.

### Usage

- **Add Audio Files:** Place your `before.mp3` and `after.mp3` files into the `audio` folder.
- **Open the HTML File:** Open the `index.html` file in your web browser.
- **Start Playback:** Click the "Play song" button to start both audio files. By default, the `before.mp3` file will be audible.
- **Switch Between Original and Mastered:** Click the "Original" button to hear the unaltered audio and the "Mastered" button to hear the processed version.
- **End of Playback:** The script automatically pauses both audio files and resets the button when playback ends.

This script is ideal for scenarios where you need to compare two versions of the same audio file, such as before and after applying mastering effects or other audio processing techniques.
