import {useComponentValue} from "@latticexyz/react"
import {useMUD} from "@/pages/view/MUDContext"

export const App = () => {
    const {components, systems, singletonEntity, singletonEntityId} = useMUD()
    // @ts-ignore
    const counter = useComponentValue(components.Counter, singletonEntity)
    return (
        <>
            <div>
                Counter: <span>{counter?.value ?? "??"}</span>
            </div>
            <button
                type='button'
                className='border'
                onClick={(event) => {
                    event.preventDefault()
                    // @ts-ignore
                    systems["system.Increment"].executeTyped(singletonEntityId)
                }}>
                Increment
            </button>
        </>
    )
}
