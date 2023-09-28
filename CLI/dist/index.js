import * as readline from 'node:readline';
const rl = readline.createInterface(process.stdin, process.stdout);
const debounce = (fn, ms) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
rl.question("Write anything you like\n", function (answer) {
    const func = () => {
        console.log(answer);
    };
    const debouncedAnswer = debounce(func, 1000);
    debouncedAnswer();
    rl.setPrompt(`
    Your message is going to appear after one second\n
    If you wanna see it again write anything and hit enter\n
    If you wanna leave, write exit\n
`);
    rl.prompt();
    rl.on("line", function (saying) {
        debouncedAnswer();
        if (saying.toLocaleLowerCase().trim() === "exit") {
            rl.close();
        }
        else {
            rl.setPrompt(`
    Your message is going to appear after one second\n
    If you wanna see it again write anything and hit enter\n
    If you wanna leave, write exit\n
`);
            rl.prompt();
        }
    });
});
