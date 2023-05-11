// @ts-ignore
export default function debounce(callback: Function, dely? = 300) {
    let timer = 0
    let context = null as any
    /* eslint-disable */
    return function(args1?: any, args2?: any, args3?: any, args4?: any) {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-this-alias,no-invalid-this
        context = this
        if (timer) return
        timer = window.setTimeout(() => {
            clearTimeout(timer)
            timer = 0
        }, dely)
        callback.apply(context, [...arguments])
    }
    /* eslint-enable */
}
