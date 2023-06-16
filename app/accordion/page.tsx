/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import './styles.css'
import { useState, useEffect } from 'react'
import faqs from '@/data/source'

const page = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<number>(1)

    useEffect(() => {
        setIsActive(1)
        setIsOpen(isActive === 1 && true)
    }, [isActive, isOpen])

    return (
        <main className="mx-auto mt-14 md:mt-16">
            <h1 className="text-xl md:text-2xl text-center">FAQ</h1>
            {faqs.map((faq: IFAQ) => {
                const active:boolean = isOpen && isActive === faq.id

                return (
                    <section key={faq.id} onClick={() => {
                        setIsActive(faq.id)
                        setIsOpen(true)
                    }} className={`${active && 'text-clr-2'}`}>
                        <h3>{faq.quest}</h3>
                        <p>{faq.ans}</p>
                    </section>
                )
            })}
        </main>
    )
}

export default page