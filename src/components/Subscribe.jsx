import React from 'react'
import { useState } from 'react'
import axios from "axios"

export default function Subscribe() {
    const [email, setEmail] = useState("")

    function handleChange(event) {
        setEmail(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:3000/subscribe", { email: email })
            .then((response) => {
                console.log(response.data)
                setEmail("")
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <section className="bg-orange-50 py-12 my-8">
                <div className="mb-8">
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">Lets Get Started.</p>
                    <h2 className="mt-3 text-center text-lg  md:mb-2 lg:text-lg">Subscribe to our newsletter and receive the latest news about our products and services!</h2>
                </div>

                <form onSubmit={handleSubmit} className="flex items-center max-w-lg mx-auto">
                    <div className="relative w-full">
                        <input
                            id="email"
                            name='email'
                            value={email}
                            onChange={handleChange}
                            type="email"
                            placeholder='example@gmail.com'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                    <button type="submit" className="inline-flex items-center py-2 px-6 text-xl text-white bg-orange-500 rounded-md border">
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    )
}
