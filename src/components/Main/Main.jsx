import React from 'react'
import { Contato } from '../Contato/Contato'
import { Section1 } from '../Section1/Section1'
import { Section2 } from '../Section2/Section2'
import S from './Main.module.css'

export const Main = () => {
  return (
    <main className={S.main}>
        <h2>Confira nossos quartos de casais</h2>
        <Section1 />
        <h2>segunda section</h2>
        <Section2 />

        <Contato />
    </main>
  )
}
