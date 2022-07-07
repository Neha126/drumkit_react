const playerInstances = {
  w: () => {
    const inst = new Audio("/sounds/tom-1.mp3");
    inst.play();
  },
  a: () => {
    const inst = new Audio("/sounds/tom-2.mp3");
    inst.play();
  },
  s: () => {
    const inst = new Audio("/sounds/tom-3.mp3");
    inst.play();
  },
  d: () => {
    const inst = new Audio("/sounds/tom-4.mp3");
    inst.play();
  },
  j: () => {
    const inst = new Audio("/sounds/snare.mp3");
    inst.play();
  },
  k: () => {
    const inst = new Audio("/sounds/crash.mp3");
    inst.play();
  },
  l: () => {
    const inst = new Audio("/sounds/kick-bass.mp3");
    inst.play();
  },
};
export default function drumPlayer(sequence, speed) {
  const from = 0;
  const to = sequence.length;
  let current = from;
  let timerId = setInterval(function () {
    if (current + 1 >= to) {
      clearInterval(timerId);
    }
    playerInstances[sequence[current]]();
    current++;
  }, speed);
}
