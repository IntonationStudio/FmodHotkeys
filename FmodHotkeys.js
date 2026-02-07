/* -------------------------------------------
   FMOD Studio Script Example:
   Add a new loop region to the currently selected events first instrument
   -------------------------------------------
 */

   //Function 1: Add Loop Region to all currently selected Event
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Add Loop Region to selections",
    keySequence: "Shift+L",
    isEnabled: function() { return studio.window.editorSelection().length && studio.window.browserCurrent().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element, index) {
            var loopRegion = studio.project.create("LoopRegion");
            loopRegion.name = "Loop Region " + (index + 1);
            loopRegion.position = element.start;
            loopRegion.length = element.length;
            loopRegion.selector = event;
            loopRegion.timeline = timeLine;
            loopRegion.markerTrack = track;
        });
    }
});

//Function 2: Add Magnet Region to all currently selected Event
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Add Magnet Region to selections",
    keySequence: "Shift+M",
    isEnabled: function() { return studio.window.editorSelection().length && studio.window.browserCurrent().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element, index) {
            var loopRegion = studio.project.create("LoopRegion");
            loopRegion.name = "Magnet Region " + (index + 1);
            loopRegion.position = element.start;
            loopRegion.length = element.length;
            loopRegion.looping = 2; // Magnet Region
            loopRegion.timeline = timeLine;
            loopRegion.markerTrack = track;
        });
    }
});


//Function 3: Add new event with a timeline sheet
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Add new event with a timeline sheet",
    keySequence: "Ctrl+Alt+T",
    execute: function() {
        var event = studio.project.create("Event");
        event.name = "New Timeline Event";
        event.addGroupTrack("Audio Track");
    }
});

//Function 4: Add Transition Region to selections
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Add Transition Region to selections",
    keySequence: "Shift+T",
    isEnabled: function() { return studio.window.editorSelection().length && studio.window.browserCurrent().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element, index) {
            var TransitionRegion = studio.project.create("TransitionRegion");
            TransitionRegion.name = "Transition Region " + (index + 1);
            TransitionRegion.position = element.start;
            TransitionRegion.length = element.length;
            TransitionRegion.selector = event;
            TransitionRegion.timeline = timeLine;
            TransitionRegion.markerTrack = track;
        });
    }
});

//Function 5: Add Destination Region to selections
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Add Destination Region to selections",
    keySequence: "Shift+D",
    isEnabled: function() { return studio.window.editorSelection().length && studio.window.browserCurrent().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element, index) {
            var DestinationRegion = studio.project.create("LoopRegion");
            DestinationRegion.name = "Destination Region " + (index + 1);
            DestinationRegion.looping = 0; // non looping aka destination region
            DestinationRegion.position = element.start;
            DestinationRegion.length = element.length;
            DestinationRegion.selector = event;
            DestinationRegion.timeline = timeLine;
            DestinationRegion.markerTrack = track;
        });
    }
});

//Function 6: Add Destination Marker to selections
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Add Destination Marker to start of selections",
    keySequence: "Ctrl+Shift+D",
    isEnabled: function() { return studio.window.editorSelection().length && studio.window.browserCurrent().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element, index) {
            var DestinationMarker = studio.project.create("NamedMarker");
            DestinationMarker.name = "Destination Marker " + (index + 1);
            DestinationMarker.position = element.start;
            DestinationMarker.selector = event;
            DestinationMarker.timeline = timeLine;
            DestinationMarker.markerTrack = track;
        });
    }
});

//Function 7: Refresh Modified Assets
studio.menu.addMenuItem({
    name: "FMOD Hotkeys\\Refresh Modified Assets",
    keySequence: "Shift+Alt+R",
    execute: function() {
        var window = studio.window.browserCurrent();
        studio.window.triggerAction("RefreshModifiedAssets");
        alert("Assets refreshed!")
    }
});

