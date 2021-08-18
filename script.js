// door images
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");

// randomize door imaging
const randomChoreDoorGenerator = () => {
 let choreDoor = Math.floor(Math.random() * numClosedDoors);
 if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
 } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
 } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
 };
};

// global variables mutable.
let numClosedDoors = 3;
let openDoor1;
let openDoor2; 
let openDoor3;
let currentlyPlaying = true;


// game functions
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = (door) => {
 if (door.src === closedDoorPath) {
   return false;
 } else {
   return true;
 }
};

function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};
// door paths
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

// door clicking
doorImage1.onclick = () => {
 if (currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
   playDoor(doorImage1);
 };
};
doorImage2.onclick = () =>  {
  if (currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
   playDoor(doorImage2);
  };
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  };
};

//GAME OVER // START ROUND //
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  };
  currentlyPlaying = false;
};

startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!'
  numClosedDoors = 3;
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

// game function calls
startRound();
