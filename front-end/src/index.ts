let doc = document.getElementById("rabbitDen")

const debounce = (fn: Function, ms: number) => {

    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]) {

      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    
    };
};

const rabbit = () => {

    for (let i= 0; i<1; i++) {
        if (doc) {
            doc.innerHTML += "🐰";
        }
    } 
}

const rabbitGen = debounce(rabbit, 1000)