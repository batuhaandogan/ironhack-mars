
// var groundMars = [
//   [null, null, M, null, null, null, null, null, null, M],
//   [null, null, null, null, null, M, null, null, null, M],
//   [null, null, null, M, null, null, null, null, null, M],
//   [null, null, null, M, null, null, null, null, null, M],
//   [M, null, null, M, null, null, null, null, null, M],
//   [null, null, null, M, null, null, null, null, null, M],
//   [null, null, M, null, M, null, null, null, null, M],
//   [null, null, M, null, null, null, null, null, null, M],
//   [null, null, null, null, M, null, null, null, null, M],
//   [null, null, null, null, null, null, null, null, M, M]
// ]

var rover = {
	direction: 'N',
	position: [0, 0],
	travelLog: [],
};

// ========================
// TURNING LEFT
// ========================
function turnLeft() {
	console.log('turnLeft was called!');
  rover.travelLog.push("Turned Left")
	switch (rover.direction) {
		case 'N':
    console.log("The rover is facing North...")
    console.log("loading started...")
    console.log(".....Command ON.....")
    console.log("loading finished...")
			rover.direction = 'W';
      console.log("Succsesfully the rover now is facing West...")
			break;
		case 'W':
    console.log("The rover is facing West...")
    console.log("loading started...")
    console.log("....Command ON.....")
    console.log("loading finished...")
			rover.direction = 'S';
      console.log("Succsesfully the rover now is facing South...")
			break;
		case 'S':
          console.log("The rover is facing South...")
      console.log("loading started...")
      console.log(".....Command ON....")
      console.log("loading finsihed...")
			rover.direction = 'E';
      console.log("Succsesfully the rover now is facing East...")
			break;
		case 'E':
    console.log("The rover is facing East...")
    console.log("loading started...")
    console.log(".....Command ON.....")
    console.log("loading finsihed...")
			rover.direction = 'N';
      console.log("Succsesfully the rover now is facing North...")
			break;
	}
}
//=================



// ===================
// TURNING RIGHT
// ===================
function turnRight() {
	console.log('turnRight was called!');
  rover.travelLog.push("Turned Right")
	switch (rover.direction) {
    case 'N':
    console.log("The rover is facing North.")
    console.log("loading started...")
    console.log("...Command ON...")
    console.log("loading finsihed...")
    rover.direction = 'E';
    console.log("Succsesfully the rover now is facing East...")
    break;
    case 'E':
    console.log("The rover is facing East.")
    console.log("loading started...")
    console.log("...Command ON...")
    console.log("loading finished...")
    rover.direction = 'S';
    console.log("Succsesfully the rover now is facing South...")
    break;
    case 'S':
    console.log("The rover now is facing South.")
    console.log("loading started...")
    console.log("...Command ON...")
    console.log("loading finished...")
    rover.direction = 'W';
    console.log("Succsesfully the rover now is facing West...")
    break;
    case 'W':
    console.log("The rover now is facing West.")
    console.log("loading started...")
    console.log("...Command ON...")
    console.log("loading finished...")
    rover.direction = 'N';
    console.log("Succsesfully the rover now is facing North...")
    break;
  }
}
// =================


// ============
// MOVE FORWARD =================
// ============
function moveForward() {
	console.log('moveForward was called');
  rover.travelLog.push("Moved Forward")
	switch (rover.direction) {
		case 'W':
    console.log("The rover moved West.")
    console.log("Coordinates loading")
    console.log("Coordinates: " + rover.position + " ...")
			rover.position[0]--;
      console.log("The new coordinates are added to travelLog!")
      console.log("The new coordinates...")
      console.log("Rover current position: " + rover.position);
      console.log("Rover current direction: " + rover.direction);
			break;
		case 'N':
    console.log("The rover moved North.")
    console.log("Coordinates loading")
    console.log("Coordinates: " + rover.position + " ...")
			rover.position[1]--;
      console.log("The new coordinates are added to travelLog!")
      console.log("The new coordinates...")
      console.log("Rover current position: " + rover.position);
      console.log("Rover current direction: " + rover.direction);
			break;
		case 'S':
    console.log("The rover moved South")
    console.log("Coordinates loading")
    console.log("Coordinates: " + rover.position  + " ...")
			rover.position[1]++;
      console.log("The new coordinates are added to travelLog!")
      console.log("The new coordinates...")
      console.log("Rover current position: " + rover.position);
      console.log("Rover current direction: " + rover.direction);
			break;
	}
}
// =========================


// =========
// MOVING BACKWARDS
// =========

function moveBackward() {
  console.log('moveBackward was called');
  rover.travelLog.push("Moved Backward")
  switch(rover.direction) {
    case 'W':
    console.log("The rover moved West.")
    console.log("Coordinates loading")
    console.log("Coordinates: " + rover.position)
    rover.position[0]++;
   console.log("The new coordinates: " + rover.position + " " + rover.direction)
    break;
    case 'N':
    console.log("The rover moved North.")
    console.log("Coordinates loading")
    console.log("Coordinates: " + rover.position)
    rover.position[1]++;
   console.log("The new coordinates: " + rover.position + " " + rover.direction)
    break;
    case 'S':
    console.log("The rover moved South.")
    console.log("Coordinates loading")
    console.log("Coordinates: " + rover.position)
    rover.position[1]--;
    console.log("The new coordinates: " + rover.position + " " + rover.direction)
    break;
  }
}




// ==============
// RECEIVER
// =============


function receiver(commands) {
  for(var i = 0; i < commands.length; i++) {
      if(commands[i] === 'f') {
    moveForward();
   } else if(commands[i] === 'r') {
     turnRight();
   } else {
     turnLeft();
   }
  }
}

//===========

console.log(rover.position);
console.log(rover.direction);
turnLeft();
moveForward();
moveBackward();