/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import './styles.css'
import { useState, useEffect } from 'react'
import faqs from '@/data/source'

const page = () => {
    const [isActive, setIsActive] = useState<number>(1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        setIsActive(1)
        setIsOpen(isActive === 1 && true)
    }, [])

    return (
        <main className="mx-auto mt-14 md:mt-16">
            <h1 className="text-xl md:text-2xl text-center">
                FAQ
            </h1>
            <section>
                {faqs.map((faq: IFAQ) => {
                    const active:boolean = isOpen && isActive === faq.id

                    return (
                        <article key={faq.id} onClick={() => {
                            setIsActive(faq.id)
                            setIsOpen(true)
                        }}>
                            <h3 className={`${active && 'text-clr-2'}`}>
                                {faq.quest}
                            </h3>
                            <p className={`${!active && 'hidden'}`}>
                                {faq.ans}
                            </p>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default page