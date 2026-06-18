function init() {
  //script.log("Custom module init");
}

var preCmd = "echo '{ \"command\": [";
var postCmd = "] }' | socat - /tmp/mpv.socket";

// This is the callback function for the "Custom command" command
function seek(val) {
  //var position = (Math.floor(val / 3600)) + ":" + (Math.floor(val / 60) % 60) + ":" + (val % 60);
  var position = val;
  local.launchCommand(preCmd + "\"seek\", " + position + ", \"absolute\"" + postCmd, false);
}

function command(val) {
  if (val == "play"){
    local.launchCommand(preCmd + "\"set_property\", \"pause\", false" + postCmd, false);
  }else if (val == "pause"){
    local.launchCommand(preCmd + "\"set_property\", \"pause\", true" + postCmd, false);
  }
}

function load(val) {
  local.launchCommand(preCmd + "\"loadfile\", \"" + val + "\"" + postCmd, false);
}

function customCommand(val){
  local.launchCommand(preCmd + val + postCmd, false);
}
