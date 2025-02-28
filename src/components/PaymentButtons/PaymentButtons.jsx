'use client'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

export const PaymentButtons = ()=>{
    const initialOptions = {
        client_id: "AThgNMLSW6yJ-eriWWMMxF2LFMUcjtHfHSgyYLfXZ0hnh9lLlvXRcj1-Nr0L4PilRxBsc38wxM7uNrie",
        currency:'MXN',
        intent:'capture'
    }
    return (
        <div>
            <PayPalButtons
                style={{layout: 'vertical'}}
            />
        </div>
    )
}