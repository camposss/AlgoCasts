// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // ASKED A LOT! STUDY
  constructor(){
    // save collection of events
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    
    if(this.events[eventName]){
      this.events[eventName].push(callback);
    }
    else{
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.events[eventName]){
      for(let cb of this.events[eventName]){
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // deletes entire array of callbacks
    delete this.events[eventName];
  }
}

module.exports = Events;
