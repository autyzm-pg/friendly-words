import * as R from "ramda"

export default class Mutex {
    constructor() {
        this.isLocked = false
        this.interval = 150

        this.lock = this.lock.bind(this)
        this.unlock = this.unlock.bind(this)
    }

    lock() {
        const checkAndResolve = (resolve, reject) => {
            if (!this.isLocked) {
                this.isLocked = true
                resolve()
            }
            else {
                setTimeout(checkAndResolve, this.interval, resolve, reject)
            }
        }

        return new Promise(checkAndResolve)
    }

    unlock() {
        this.isLocked = false
    }

    static create() {
        return new Mutex()
    }
}