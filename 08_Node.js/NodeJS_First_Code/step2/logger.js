const EventEmitter = require('events');
const uuid = require('uuid')

// console.log(uuid.v4())

class Logger extends EventEmitter {
    log(issue, type) {
        if (type === 'tech-error') {
            this.emit('wrong', {
                id: uuid.v4(),
                details: issue
            })
        } else {
            this.emit('success', {
                id: uuid.v4(),
                details: issue
            })
        }
    }
}


module.exports = Logger;