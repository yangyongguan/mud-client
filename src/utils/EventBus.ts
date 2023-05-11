export default class EventBus {
    private eventInstance: any
    private _events: {}
    constructor() {
        if (this.eventInstance) {
            throw new Error('EventBus is singlton， please EventBus.OBJ')
        }
        this.eventInstance = this
        this._events = {}
    }
    static get OBJ (): EventBus {
        // @ts-ignore
        if (!this.eventInstance) {
            // @ts-ignore
            this.eventInstance = new EventBus()
        }
        // @ts-ignore
        return this.eventInstance
    }
    $on(eventName: string, callback: Function) {
        // @ts-ignore
        const callbacks = this._events[eventName] || []
        callbacks.push(callback)
        // @ts-ignore
        this._events[eventName] = callbacks
    }
    $emit(eventName: string, ...args: any) {
        // @ts-ignore
        const callbacks = this._events[eventName] || []
        // @ts-ignore
        callbacks.forEach((cb) => cb.call(this, ...args))
    }
    $only(eventName: string, callback: Function) {
        // @ts-ignore
        this._events[eventName] = [callback]
    }
    $once(eventName: string, callback: Function) {
        const one = (...args: any) => {
            callback(...args)
            this.$off(eventName, one)
        }
        one.initialCallback = callback
        this.$on(eventName, one)
    }
    $off(eventName: string, callback: Function) {
        // @ts-ignore
        const callbacks = this._events[eventName] || []
        const newCallbacks = callbacks.filter(
            (fn: Function) =>
                // @ts-ignore
                fn !== callback && fn.initialCallback !== callback /* 用于once的取消订阅 */
        )
        // @ts-ignore
        this._events[eventName] = newCallbacks
    }
    $offOnly(eventName: string) {
        // @ts-ignore
        delete this._events[eventName]
    }
    /** *
   * 移除所有事件
   */
    $offAll() {
        this._events = {}
    }
}

