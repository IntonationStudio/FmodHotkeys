/* -------------------------------------------
   FMOD Studio Script Example:
   Add a new loop region to the currently selected events first instrument
   -------------------------------------------
 */

   //Function 1: Add Loop Region to all currently selected Event
studio.menu.addMenuItem({
    name: "Add Loop Region to selection",
    keySequence: "Shift+L",
    isEnabled: function() { return studio.window.editorSelection().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element) {
            var loopRegion = studio.project.create("LoopRegion");
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
    name: "Add Magnet Region to selection",
    keySequence: "Shift+M",
    isEnabled: function() { return studio.window.editorSelection().length; },
    execute: function() {
        // Retrieve the current selected event
        var event = studio.window.browserCurrent();
        var selections = studio.window.editorSelection();
        var timeLine = event.timeline;
        
        var track = studio.project.create("MarkerTrack");
        track.event = event;

        selections.forEach(function(element) {
            var loopRegion = studio.project.create("LoopRegion");
            loopRegion.position = element.start;
            loopRegion.length = element.length;
            loopRegion.looping = 2; // Magnet Region
            loopRegion.selector = event;
            loopRegion.timeline = timeLine;
            loopRegion.markerTrack = track;
        });
    }
});


//Function 2: Add new event with a timeline sheet
studio.menu.addMenuItem({
    name: "Add new event with a timeline sheet",
    keySequence: "Ctrl+Alt+T",
    execute: function() {
        var event = studio.project.create("Event");
        event.name = "New Timeline Event";
        event.addGroupTrack("Audio Track");
    }
});