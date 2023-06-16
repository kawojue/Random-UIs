/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import './styles.css'
import faqs from '@/data/source'
import { useState, useEffect } from 'react'
import { GiPlainCircle } from 'react-icons/gi'

const page = () => {
    const [isActive, setIsActive] = useState<number>(1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        setIsActive(1)
        setIsOpen(isActive === 1 && true)
    }, [])

    return (
        <main className="w-full mt-14 md:mt-16">
            <h1 className="text-xl md:text-2xl text-center">
                FAQ
            </h1>
            <section className="flex flex-col gap-5 mx-auto rounded-lg mt-5 w-[95vw] max-w-[600px] bg-white px-5 py-3 justify-center">
                {faqs.map((faq: IFAQ) => {
                    const active:boolean = isOpen && isActive === faq.id

                    return (
                        <article key={faq.id} onClick={() => {
                            setIsActive(faq.id)
                            setIsOpen(true)
                        }} className="flex flex-col gap-3 justify-center">
                            <div className={`${active && 'text-clr-2'} flex gap-5 items-center`}>
                                <GiPlainCircle />
                                <p>
                                    {faq.quest}
                                </p>
                            </div>
                            <div className={`${!active && 'hidden'} flex gap-5 ml-1.5`}>
                                <div className="border-[0.125rem] border-dashed"></div>
                                <p>
                                    {faq.ans}
                                </p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default page