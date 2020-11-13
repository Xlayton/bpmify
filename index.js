const {
    Stream
} = require("stream");

exports.printMsg = () => {
    console.log("This is a message from pacakge")
}

exports.streamTest = () => {
    let count = 0;
    let rstream = new Stream.Readable({
        read(size) {
            this.push(`${genRandomNumber()}`);
            if (count === 49) {
                this.push(null)
                this.destroy()
            };
            count++;
        }
    });
    return rstream
}

const genRandomNumber = () => {
    return `${Math.floor(Math.random() * 100)}`
}