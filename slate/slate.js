// Configs
// ===========================
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.1,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000,
  "orderScreensLeftToRight" : true,
  "windowHintsShowIcons" : true,
  "windowHintsIgnoreHiddenWindows" : false,
  "windowHintsSpread" : true
});

// Snapshot
// ===========================
var snapshotName = 'ws1Snapshot=';
var take_ws1Snapshot = slate.operation('snapshot', {
    name: snapshotName,
    save: true
});
slate.bind('p:cmd;ctrl;alt;shift', take_ws1Snapshot);
var activate_ws1Snapshot = slate.operation('activate-snapshot', {
    name: snapshotName
});
slate.bind('o:cmd;ctrl;alt;shift', activate_ws1Snapshot);

// Monitors
// ===========================
var monLaptop = "0";
var monCenter = "1";
var monRight = "2";

// Hint
// ===========================
// Launches the "hint" view, where each window gets assigned one of the below letters and allows you to press that letter to switch to it
var hint = slate.operation("hint", {
  "characters" : "QWERASDFZXC"
});

// Grid
// ===========================
// Each resolution entry determines what the grid dimensions are for that screen
var gridify = slate.operation("grid", {
  "grids" : {
    "1440x900" : {
      "width" : 4,
      "height" : 4
    },
    "1920x1200" : {
      "width" : 8,
      "height" : 8
    }
  },
  "padding" : 3
});

// Operations
// ===========================
var lapFull = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
var lapLeft = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY"
});
var lapRight = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX + screenSizeX/2",
  "y" : "screenOriginY",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY"
});
var lapUpperRight = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX + screenSizeX/2",
  "y" : "screenOriginY",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY*2/3"
});
var lapLowerRight = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX + screenSizeX/2",
  "y" : "screenOriginY + (screenSizeY*2/3)",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY*1/3"
});
var lapChat = S.op("corner", {
  "screen" : monLaptop,
  "direction" : "top-left",
  "width" : "screenSizeX/9",
  "height" : "screenSizeY"
});
var lapChatWindow = S.op("corner", {
  "screen" : monLaptop,
  "direction" : "bottom-right",
  "width" : "screenSizeX/3",
  "height" : "screenSizeY/3"
});
var lapMain = lapChat.dup({ "direction" : "top-right", "width" : "8*screenSizeX/9" });
var centerFull = S.op("move", {
  "screen" : monCenter,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
var centerMonBig = S.op("move", {
  "screen" : monCenter,
  "x" : "screenOriginX+screenSizeX/3",
  "y" : "screenOriginY",
  "width" : "screenSizeX*2/3",
  "height" : "screenSizeY",
});
var monRightFull = S.op("move", {
  "screen" : monRight,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
var monRightTop = S.op("move", {
  "screen" : monRight,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY/2"
});
var monRightBottom = S.op("move", {
  "screen" : monRight,
  "x" : "screenOriginX",
  "y" : "screenOriginY + screenSizeY/2",
  "width" : "screenSizeX",
  "height" : "screenSizeY/2"
});
var monRightTinyMiddle = S.op("move", {
  "screen" : monRight,
  "x" : "screenOriginX + 3*screenSizeX/8",
  "y" : "screenOriginY + 7*screenSizeY/16",
  "width" : "screenSizeX/4",
  "height" : "screenSizeY/8"
});
var lapCalendar = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX+-189",
  "y" : "screenOriginY",
  "width" : 770,
  "height" : "screenSizeY"
});
//Remove
var lapCalendar2 = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX+-132",
  "y" : "screenOriginY",
  "width" : 770,
  "height" : "screenSizeY"
});
var lapSkype = S.op("move", {
  "screen" : monLaptop,
  "x" : "screenOriginX+581",
  "y" : "screenOriginY",
  "width" : 854,
  "height" : "screenSizeY"
});
var mainRightHalf = slate.operation("move", {
   "screen" : monCenter,
   "x" : "screenSizeX/2+screenOriginX",
   "y" : "screenOriginY",
   "width" : "screenSizeX/2",
   "height" : "screenSizeY"
});
var mainLeftHalf = slate.operation("move", {
   "screen" : monCenter,
   "x" : "screenOriginX",
   "y" : "screenOriginY",
   "width" : "screenSizeX/2",
   "height" : "screenSizeY"
});
var centerMonThreeQuarters = slate.operation("move", {
   "screen" : monCenter,
   "x" : "screenOriginX+screenSizeX/8",
   "y" : "screenOriginY+screenSizeY/8",
   "width" : "3*screenSizeX/4",
   "height" : "3*screenSizeY/4"
});
var centerMonMost = slate.operation("move", {
   "screen" : monCenter,
   "x" : "screenOriginX+screenSizeX/20",
   "y" : "screenOriginY+screenSizeY/20",
   "width" : "9*screenSizeX/10",
   "height" : "9*screenSizeY/10"
});
var centerMonMostRight = slate.operation("move", {
   "screen" : monCenter,
   "x" : "screenOriginX+screenSizeX/10",
   "y" : "screenOriginY+screenSizeY/20",
   "width" : "9*screenSizeX/10",
   "height" : "9*screenSizeY/10"
});

//More window placements, but written in a shorter fashion
var centerMonLeft = centerFull.dup({ "width" : "3*screenSizeX/5" });
var centerMonMid = centerMonLeft.dup({ "x" : "screenOriginX+screenSizeX/3" });
var centerMonRight = centerMonLeft.dup({ "x" : "screenOriginX+(screenSizeX*2/5)" });
var centerMonLeftTop = centerMonLeft.dup({ "height" : "screenSizeY/2" });
var centerMonLeftBot = centerMonLeftTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var centerMonMidTop = centerMonMid.dup({ "height" : "screenSizeY/2" });
var centerMonMidBot = centerMonMidTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var centerMonRightTop = centerMonRight.dup({ "height" : "screenSizeY/2" });
var centerMonRightBot = centerMonRightTop.dup({ "y" : "screenOriginY+screenSizeY/2" });

// Miscellaneous Functions
// ===========================
// Used to hide the console app
var hideConsole = slate.operation("hide", { "app" : "Console" });

// Focus
// A generic function that takes in an app name and immediately focuses that window
var focus = function (app) {
  return S.op("focus", {
    // only one of these is required. if both are specified it will use app.
    //"direction" : direction,
    "app" : app
  });
};

var focusSpotify = focus("Spotify");

// common layout hashes
// ===========================
var lapMainHash = {
  "operations" : [lapMain],
  "ignore-fail" : true,
  "repeat" : true
};
var lapLeftHash = {
  "operations" : [lapLeft],
  "ignore-fail" : true,
  "repeat" : true
};
var lapRightHash = {
  "operations" : [lapRight],
  "ignore-fail" : true,
  "repeat" : true
};
var lapSublimeHash = {
  "operations" : [lapUpperRight],
  "ignore-fail" : true,
  "repeat" : true
};
var lapTermHash = {
  "operations" : [lapLowerRight],
  "ignore-fail" : true,
  "repeat" : true
};
var lapFullHash = {
  "operations" : [lapFull],
  "ignore-fail" : true,
  "repeat" : true
};
var adiumHash = {
  "operations" : [lapChat, lapMain],
  "ignore-fail" : true,
  "title-order" : ["Contacts"],
  "repeat-last" : true
};
var mvimHash = {
  "operations" : [centerMonMid, centerMonRightTop],
  "repeat" : true
};
var centerMonBigHash = {
  "operations" : [centerMonBig],
  "sort-title" : true,
  "repeat" : true
};
var centerFullHash = {
  "operations" : [centerFull],
  "sort-title" : true,
  "repeat" : true
};
var centerLeftHash = {
  "operations" : [centerMonLeft],
  "sort-title" : true,
  "repeat" : true
};
var centerRightHash = {
  "operations" : [centerMonRight],
  "sort-title" : true,
  "repeat" : true
};
var centerMonMostHash = {
  "operations" : [centerMonMost],
  "repeat" : true
};
var centerMonMostRightHash = {
  "operations" : [centerMonMostRight],
  "repeat" : true
};
var centerMonThreeQuartersHash = {
  "operations" : [centerMonThreeQuarters],
  "repeat" : true
};
var monRightFullHash = {
  "operations" : [monRightFull],
  "repeat" : true
};
var monRightTopHash = {
  "operations" : [monRightTop],
  "repeat" : true
};
var monRightBottomHash = {
  "operations" : [monRightBottom],
  "repeat" : true
};
var monRightTinyMiddleHash = {
  "operations" : [monRightTinyMiddle],
  "repeat" : true
};
var itermHash = {
    "operations" : [centerMonLeft, monRightBottom, centerMonRight],
    "repeat-last" : true,
    "sort-title" : true
};
var genBrowserHash = function(regex) {
  return {
    "operations" : [function(windowObject) {
      var title = windowObject.title();
      if (title !== undefined && title.match(regex)) {
        windowObject.doOperation(monRightTop);
      } else {
        windowObject.doOperation(centerMonThreeQuarters);
      }
    }],
    "ignore-fail" : true,
    "repeat" : true
  };
};

//LAYOUTS
// ===========================
// 3 monitor layout
var threeMonitorLayout = S.lay("threeMonitor", {
  "_before_" : {
    "operations" : hideConsole
  },
  "Adium" : {
    "operations" : [lapChat, lapChatWindow],
    "ignore-fail" : true,
    "title-order" : ["Contacts"],
    "repeat-last" : true
  },
  "MacVim" : mvimHash,
  "iTerm" : itermHash,
  "iTerm2" : itermHash,
  "Sublime Text" : { // this is the name of 3 also
    "operations" : [function(windowObject) {
      var title = windowObject.title();
      if (title.indexOf("—") > -1) {
        // projects have this hyphen in them but individual files don't
        // put projects on main monitor, individuals on left
        // windowObject.doOperation(centerMonMost);
        windowObject.doOperation(centerMonRight);
      } else {
        windowObject.doOperation(lapRight);
      }
    }],
    "ignore-fail" : true,
    "repeat" : true
  },
  // "Sublime Text 2" : centerRightHash,
  "P4V": monRightTopHash,
  "Activity Monitor" : monRightBottomHash,
  "Activity Monitor" : {
    "operations" : [function(windowObject) {
      var title = windowObject.title();
      if (title.match(/^Activity Monitor.*$/)) {
        windowObject.doOperation(monRightBottom);
      } else {
        windowObject.doOperation(monRightTinyMiddle);
      }
    }],
    // "operations" : [monRightBottom, monRightTinyMiddle],
    "ignore-fail" : true,
    // "title-order" : ["Activity Monitor"],
    "repeat-last" : true
  },
  // Application: Activity Monitor
  // Window: 'mono-sgen (15723) (Terminated)'
  // "Activity Monitor" : monRightTinyMiddleHash,
  "DataGrip" : monRightBottomHash,
  "Cyberduck" : monRightBottomHash,
  "Xcode" : centerFullHash,
  "IntelliJ IDEA" : centerMonMostHash,
  "JetBrains Rider" : centerMonMostRightHash,
  "GoLand" : centerMonMostRightHash,
  "Skype" : {
    "operations" : [lapSkype],
    "repeat" : true
  },
  "HipChat" : {
    "operations" : [lapSkype],
    "repeat" : true
  },
  "Slack" : {
    "operations" : [lapLeft],
    "repeat" : true
  },
  "Firefox" : genBrowserHash(/^Firebug\s-\s.+$/),
  "Google Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "Safari" : centerMonThreeQuartersHash,
  "Spotify" : {
    "operations" : [monRightTop],
    "repeat" : true
  },
  "TextEdit" : {
    "operations" : [lapFull],
    "repeat" : true
  },
  "FileZilla" : centerMonThreeQuartersHash,
  "MonoDevelop-Unity" : centerFullHash,
  "Unity" : {
    "operations" : [function(windowObject) {
      windowObject.doOperation(centerMonLeft);
      // windowObject.doOperation(centerFull);
    }],
    "ignore-fail" : true,
    "repeat" : true
  },
  "Atom" : centerFullHash,
  "Microsoft Outlook" : {
    "operations" : [function(windowObject) {
      var title = windowObject.title();
      if (title.match(/^Calendar$/)) {
        windowObject.doOperation(lapCalendar);
      } else if (title.indexOf("\u2022") > -1 || title.match(/^Searching /)) { //\u2022 is • - this is the main window. Also if you are "searching" in the main window.
        windowObject.doOperation(centerMonMost);
      } else if (title.match(/^\d* Reminder?/)) {
        windowObject.doOperation(centerMonMidTop);
      } else {
        windowObject.doOperation(monRightFull);
      }
    }],
    "ignore-fail" : true,
    "repeat" : true
  }
  /*{
    "operations" : [lapCalendar, centerMonMost],
    "ignore-fail" : true,
    "title-order" : ["Calendar"],
    "repeat-last" : true
  }*/
});

// 2 monitor layout
var twoMonitorLayout = S.lay("twoMonitor", {
  "Adium" : {
    "operations" : [lapChat, lapMain],
    "ignore-fail" : true,
    "title-order" : ["Contacts"],
    "repeat-last" : true
  },
  "MacVim" : mvimHash,
  "iTerm" : centerFullHash,
  "iTerm2" : centerFullHash,
  "Xcode" : centerMonBigHash,
  "Google Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "GitX" : {
    "operations" : [lapFull],
    "repeat" : true
  },
  "Firefox" : genBrowserHash(/^Firebug\s-\s.+$/),
  "Safari" : lapFullHash,
  "Spotify" : {
    "operations" : [lapFull],
    "repeat" : true
  },
  "TextEdit" : {
    "operations" : [lapFull],
    "repeat" : true
  }
});

// 1 monitor layout
var oneMonitorLayout = S.lay("oneMonitor", {
  "iTerm" : lapRightHash,
  "iTerm2" : lapRightHash,
  "Google Chrome" : lapFullHash,
  "Xcode" : lapFullHash,
  "GitX" : lapFullHash,
  "Ooyala Player Debug Console" : lapFullHash,
  "Firefox" : lapFullHash,
  "Safari" : lapFullHash,
  "Eclipse" : lapFullHash,
  "Spotify" : lapLeftHash,
  "Sublime Text 2" : lapRightHash,
  "Microsoft Outlook" : {
    "operations" : [lapCalendar2, lapFull],
    "ignore-fail" : true,
    "title-order" : ["Calendar"],
    "repeat-last" : true
  },
  "Adium" : adiumHash
});

// Defaults
S.def(3, threeMonitorLayout);
S.def(2, twoMonitorLayout);
S.def(1, oneMonitorLayout);

// Layout Operations
var threeMonitor = S.op("layout", { "name" : threeMonitorLayout });
var twoMonitor = S.op("layout", { "name" : twoMonitorLayout });
var oneMonitor = S.op("layout", { "name" : oneMonitorLayout });

// Function to decide which pre-configured layout to use
var universalLayout = function() {
  if (S.screenCount() === 3) {
    threeMonitor.run();
  } else if (S.screenCount() === 2) {
    twoMonitor.run();
  } else if (S.screenCount() === 1) {
    oneMonitor.run();
  }
};

// Batch bind everything. Less typing.
// ===========================
// First key is the main key press, followed by a colon and then a semicolon-separated list of modifier keys
S.bnda({
  // Layout Bindings
  "padEnter:ctrl" : universalLayout,

  //Pfay-style binds
  //Typical workflow is to throw a window to the right monitor, then position it as desired all using ctrl + alt + <multiple numpad keys>
  //the ctrl + alt + numpad(1-3) will throw the current window to the first, second, or third monitor (and fullscreen it)
  "pad1:ctrl;alt" : S.op("throw", { "screen" : "0", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "pad2:ctrl;alt" : S.op("throw", { "screen" : "1", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "pad3:ctrl;alt" : S.op("throw", { "screen" : "2", "width" : "screenSizeX", "height" : "screenSizeY" }),

  //ctrl + alt + numpad(4,6) will push a window to one half of the screen (a bit like windows key + arrow key snap)
  "pad4:ctrl;alt" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/2" }),
  "pad6:ctrl;alt" : S.op("push", { "direction" : "right", "style" : "bar-resize:screenSizeX/2" }),

  //ctrl + alt + numpad(0, 8) will push a window to the lower or upper half of the screen
  "pad0:ctrl;alt" : S.op("push", { "direction" : "down", "style" : "bar-resize:screenSizeY/2" }),
  "pad8:ctrl;alt" : S.op("push", { "direction" : "up", "style" : "bar-resize:screenSizeY/2" }),

  //ctrl + alt + numpad . will fullscreen the current window
  "pad.:ctrl;alt" : S.op("move", { "x" : "screenOriginX", "y" : "screenOriginY", "width" : "screenSizeX", "height" : "screenSizeY"}),

  //ctrl + alt + numpad5 will make the current window MOSTLY full screen
  "pad5:ctrl;alt" : S.op("move", { "x" : "screenOriginX+screenSizeX/8", "y" : "screenOriginY+screenSizeY/8", "width" : "3*screenSizeX/4", "height" : "3*screenSizeY/4" }),

  //ctrl + alt + numpad(7,9) will bump the width of the window up and down
  "pad9:ctrl;alt" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
  "pad7:ctrl;alt" : S.op("resize", { "width" : "-10%", "height" : "+0" }),

  // Basic Location Bindings
  "pad0:ctrl" : lapChat,
  "[:ctrl" : lapChat,
  "pad.:ctrl" : lapMain,
  "]:ctrl" : lapMain,
  "pad1:ctrl" : centerMonLeftBot,
  "pad2:ctrl" : centerMonMidBot,
  "pad3:ctrl" : centerMonRightBot,
  "pad4:ctrl" : centerMonLeftTop,
  "pad5:ctrl" : centerMonMidTop,
  "pad6:ctrl" : centerMonRightTop,
  "pad7:ctrl" : centerMonLeft,
  "pad8:ctrl" : centerMonMid,
  "pad9:ctrl" : centerMonRight,
  //"pad=:ctrl" : centerFull,

  // Resize Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:ctrl;shift;alt" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
  "left:ctrl;shift;alt" : S.op("resize", { "width" : "-10%", "height" : "+0" }),
  "up:ctrl;shift;alt" : S.op("resize", { "width" : "+0", "height" : "-10%" }),
  "down:ctrl;shift;alt" : S.op("resize", { "width" : "+0", "height" : "+10%" }),
  "right:cmd;ctrl;alt;shift" : S.op("resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }),
  "left:cmd;ctrl;alt;shift" : S.op("resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }),
  "up:cmd;ctrl;alt;shift" : S.op("resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }),
  "down:cmd;ctrl;alt;shift" : S.op("resize", { "width" : "+0", "height" : "-10%", "anchor" : "bottom-right" }),

  // Push Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:ctrl;shift" : S.op("push", { "direction" : "right", "style" : "bar-resize:screenSizeX/2" }),
  "left:ctrl;shift" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/2" }),
  "up:ctrl" : S.op("push", { "direction" : "up", "style" : "bar-resize:screenSizeY/2" }),
  "down:ctrl" : S.op("push", { "direction" : "down", "style" : "bar-resize:screenSizeY/2" }),

  // Nudge Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:ctrl;alt" : S.op("nudge", { "x" : "+10%", "y" : "+0" }),
  "left:ctrl;alt" : S.op("nudge", { "x" : "-10%", "y" : "+0" }),
  "up:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "-10%" }),
  "down:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "+10%" }),

  // Throw Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:ctrl;alt;cmd" : S.op("throw", { "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "left:ctrl;alt;cmd" : S.op("throw", { "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "up:ctrl;alt;cmd" : S.op("throw", { "screen" : "up", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "down:ctrl;alt;cmd" : S.op("throw", { "screen" : "down", "width" : "screenSizeX", "height" : "screenSizeY" }),

  // Focus Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "l:cmd" : S.op("focus", { "direction" : "right" }),
  "h:cmd" : S.op("focus", { "direction" : "left" }),
  //"k:cmd" : S.op("focus", { "direction" : "up" }),
  "j:cmd" : S.op("focus", { "direction" : "down" }),
  "k:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "j:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "right:cmd" : S.op("focus", { "direction" : "right" }),
  "left:cmd" : S.op("focus", { "direction" : "left" }),
  "up:cmd" : S.op("focus", { "direction" : "up" }),
  "down:cmd" : S.op("focus", { "direction" : "down" }),
  "up:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "down:cmd;alt" : S.op("focus", { "direction" : "behind" }),

  // Window Hints
  "esc:cmd" : S.op("hint"),

  //Focus binds
  "q:cmd;ctrl;alt;shift" : slate.operation("focus", { "app" : "Skype" }),
  "w:cmd;ctrl;alt;shift" : slate.operation("focus", { "app" : "Google Chrome" }),
  "e:cmd;ctrl;alt;shift" : slate.operation("focus", { "app" : "iTerm2" }),
  "r:cmd;ctrl;alt;shift" : slate.operation("focus", { "app" : "Microsoft Outlook" }),

  // Grid
  // Entering this key combination will allow you to resize the currently selected window
  // using your mouse and the built-in grid, which represents different portions of the screen
  "z:cmd;ctrl;alt;shift" : gridify
});

// Do something when a window is opened, some of these are commented out since I found them often more annoying than helpful
slate.on("windowOpened", function(event, win) {
  switch(win.app().name()) {
    case "iTerm":
    case "iTerm2":
      win.doOperation(centerFull);
      break;
    // case "Unity":
      // win.doOperation(centerFull);
      // break;
    // case "Preview":
      // win.doOperation(centerMonLeft);
      // break;
    default:

  }
});

// Test Cases
S.src(".slate.test", true);
S.src(".slate.test.js", true);

// Log that we're done configuring
S.log("[SLATE] -------------- Finished Loading Config --------------");
