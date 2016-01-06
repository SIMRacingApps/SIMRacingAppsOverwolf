//This global var should be set in the AppWindowXX.html file before including this script.
//var SRAname = 'AppWindowXX';

var SRAstate = {
    name:   'unknown',
    configuration: 'default'
};

var restored = false;  //used to not save state until we have restored state

addEventListener('storage', function(e) {
    if (e) {
        if (e.key == SRAname) { //if the event is for this window. SRAname is set in the html file.
            if (e.newValue) {
                var windowState = JSON.parse(e.newValue);
                if (windowState) {
                    SRAstate = windowState;
                    console.log("Received storage event("+SRAstate.name+"): "+JSON.stringify(SRAstate));
                    if (localStorage.getItem(SRAstate.name+'-'+SRAstate.configuration)) {
                        //restore the window state
                        var state = JSON.parse(localStorage.getItem(SRAstate.name+'-'+SRAstate.configuration));
                        console.log("localStorage("+SRAstate.name+'-'+SRAstate.configuration+"): "+JSON.stringify(state));
                        SRAstate.left   = state.left   || SRAstate.left   || 0;
                        SRAstate.top    = state.top    || SRAstate.top    || 0;
                        SRAstate.width  = state.width  || SRAstate.width  || 800;
                        SRAstate.height = state.height || SRAstate.height || 480;
                    }
                    overwolf.windows.getCurrentWindow( function(result) {
                        if (result.status == "success") {
                            overwolf.windows.restore(result.window.id, function(result1) {
                                overwolf.windows.changeSize(result.window.id,SRAstate.width,SRAstate.height, function(result2) {
                                    if (result2.status == "success") {
                                        overwolf.windows.changePosition(result.window.id,SRAstate.left,SRAstate.top);
                                        restored = true;
                                    }
                                });
                            });
                        }
                    });
                    window.title  = windowState.name + " - SIMRacingApps";
                    document.getElementById("webviewelement").src = windowState.url;
                    document.getElementById("loading").style.display = 'none';
                }
            }
        }
    }
}, false);

window.addEventListener('resize',function(e) {
    if (restored) {
        var name = SRAstate.name;
        var configuration = SRAstate.configuration;
        SRAstate             = JSON.parse(localStorage.getItem(name+'-'+configuration)) || {name: name, configuration: configuration};
        SRAstate.name        = SRAstate.name || name;
        SRAstate.configuration=SRAstate.configuration || configuration;
    //    SRAstate.left        = result.window.left;
    //    SRAstate.top         = result.window.top;
        SRAstate.width       = e.target.innerWidth  || SRAstate.width;
        SRAstate.height      = e.target.innerHeight || SRAstate.height;
        localStorage.setItem(SRAstate.name+'-'+SRAstate.configuration,JSON.stringify(SRAstate));
        console.log('onResize() = ' + JSON.stringify(SRAstate));
    }
});

function dragMove() {
    overwolf.windows.getCurrentWindow( function(result) {
        if (result.status=="success"){
            overwolf.windows.dragMove(result.window.id, function(result1) {
                if (result1.status=="success") {
                    overwolf.windows.getCurrentWindow( function(result2) {
                        if (restored) {
                            var name = SRAstate.name;
                            var configuration = SRAstate.configuration;
                            SRAstate             = JSON.parse(localStorage.getItem(name+'-'+configuration)) || {name: name, configuration: configuration};
                            SRAstate.name        = SRAstate.name || name;
                            SRAstate.configuration=SRAstate.configuration || configuration;
                            SRAstate.left        = result2.window.left;
                            SRAstate.top         = result2.window.top;
                            localStorage.setItem(SRAstate.name+'-'+SRAstate.configuration,JSON.stringify(SRAstate));
                            console.log('dragMove() = ' + JSON.stringify(SRAstate));
                        }
                    });
                }
            });
        }
    });
};

//function dragResize() {
//    overwolf.windows.getCurrentWindow( function(result) {
//        if (result.status=="success"){
//            overwolf.windows.dragResize(result.window.id,overwolf.windows.enums.WindowDragEdge.BottomRight);
//        }
//    });
//};

//The following events simulate a :hover CSS property. 
//I found that :hover would not go away if the mouse moves out the top of the div.
//I also don't get the mouseout event either. So, I set a timer to hide the bar.
var SRAtimer = null;
var SRAonMouseOver = function() {
  document.getElementById("bar").className = "handleHover";
  document.getElementById("closer").className = "closerHover";
  if (SRAtimer) {
      SRAonMouseOut();
  }
  //set a timer to clear the bar if the mouse leaves for more than 3 seconds.
  SRAtimer = setTimeout(function() {
      document.getElementById("bar").className = "handle";
      document.getElementById("closer").className = "closer";
  },3000);
}

var SRAonMouseOut = function() {
  document.getElementById("bar").className = "handle";
  document.getElementById("closer").className = "closer";
  if (SRAtimer) {
      clearTimeout(SRAtimer);
      SRAtimer = null;
  }
}

var SRAcloser = function() {
    overwolf.windows.getCurrentWindow( function(result) {
        if (result.status=="success"){
            overwolf.windows.close(result.window.id);
        }
    });
};

var SRAreturnFalse = function() { 
    return false; 
};

window.onload = function() {
    overwolf.windows.onStateChanged.addListener( function(e) {
        var window_name = e.window_id.substring(e.window_id.length - SRAname.length);
        if (window_name == SRAname) {
            console.log("onStateChanged("+window_name+") = " + JSON.stringify(e));
            if (e.window_state == "normal") {
                restored = true;
                console.log("onStateChanged("+e.windowState+"): restored = true");
            }
            else {
                restored = false;
                console.log("onStateChanged("+e.windowState+"): restored = false");
            }
        }
    });

    document.getElementById("bar").onmouseover = SRAonMouseOver;
    document.getElementById("bar").onmouseout  = SRAonMouseOut;
    document.getElementById("closer").onmousedown = SRAcloser;
    document.getElementById("closer").onselectstart = SRAreturnFalse;
};

