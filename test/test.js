let assert = require("assert")
let bpmify = require("../index")

describe("Stream", () => {
    describe("stream_capacity", () => {
        let numbers = []
        let f = bpmify.streamTest()
        f.setEncoding('UTF8')
        f.on("data", (chunk) => numbers.push(parseInt(chunk.toString())))
        f.on("close", () => {
            console.log(numbers, numbers.length)
            assert.strictEqual(numbers.length, 50)
        })
    })
})