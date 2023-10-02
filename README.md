# Level 1

Debounce is a function made to delay a function for a determined amount of time, when trying to call the function twice before this delay ends, the timer will be reseted until no more calls are made until the timer ends. This level is pure logic on the debounce function, the tests are made withe the time mock jest's functions and are used to test the passage of time as its the functionality of this function. One test is made to test that the function has been called once the timer end and the other one to test that it should only be called once when calling it before the delay ends.

# Level 2

This level can be found in the "CLI" folder, inside dist. When executing "node index.js" in the terminal text will appear asking you to write anything you like, once this happens the word/sentence you wrote will be shown again with a 1s delay, write anything again and hit enter to see it again or just type "exit" to stop the loop.

# Level 3

This level can be found in the "front-end" folder, inside dist. When executing the .html that ask you to click a button to see a rabbit, but that can only see one every second so be patient, the debounce function will reset every time the rabbit() function until you wait 1s for it to complete its delay time.
