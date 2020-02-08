// module.exports shorthand is exports

//We need to use module.exports instead of short hand because we're returning the entire function for the module instead of methods
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dmensions must be greater than zero. Recieved: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                //Since X and Y are available in the outer function, we no longer need to pass them in to the arguments, this is due to closures
                perimeter: () => 2 * (x + y),
                area: () => (x * y)
            }),
            2000
        );
    }
};



