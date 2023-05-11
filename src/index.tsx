import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/assets/css/index.scss'
import {App} from 'src/pages/App'
import {ToastContainer} from "react-toastify"
import {setup} from "@/pages/mud/setup"
import {MUDProvider} from "@/pages/view/MUDContext"
import {ComponentBrowser} from "@/pages/view/ComponentBrowser"
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error("React root not found")
const root = ReactDOM.createRoot(rootElement)
setup().then((result) => {
    root.render(
        <MUDProvider {...result}>
            <App />
            <ToastContainer position='bottom-right' draggable={false} theme='dark'/>
            <ComponentBrowser />
        </MUDProvider>
    )
})

