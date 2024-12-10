// Create a synth using Tone.js
const synth = new Tone.Synth().toDestination();

// Get all the keys
const keys = document.querySelectorAll('.key');

// Add event listeners to each key
keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    playNote(note);
  });
});

// Function to play the note
function playNote(note) {
  synth.triggerAttackRelease(note, '8n');
}

// Generate music function
document.getElementById('generateMusic').addEventListener('click', generateMusic);

function generateMusic() {
  // Create a random melody
  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
  const randomMelody = [];

  for (let i = 0; i < 8; i++) {
    randomMelody.push(notes[Math.floor(Math.random() * notes.length)]);
  }

  // Play the melody
  let time = 0;
  randomMelody.forEach(note => {
    Tone.Transport.scheduleOnce(() => {
      synth.triggerAttackRelease(note, '8n');
    }, time);
    time += 0.5; // 8th note duration
  });

  // Start the Transport
  Tone.Transport.start();
}
