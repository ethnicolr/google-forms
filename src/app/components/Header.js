/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useState, useRef } from 'react'
import { useEditMod } from './Container'
import Container from './Container'
import Wrapper from './Wrapper'
import { Textarea, ContainerField, EditStripeInput } from '../lib'

const defaultState = {
  title: 'Новая форма',
  desc: 'Описание',
}

export default function Header({
  edit,
  changeStateHeader,
  data = defaultState,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target
    changeStateHeader(name, value)
  }

  return (
    <>
      <Wrapper>
        <Container>
          <form>
            <ContainerField>
              <Textarea
                spellCheck='false'
                value={data.title}
                onChange={handleChange}
                name='title'
                onFocus={(e) => e.target.select()}
              />
              {edit ? <EditStripeInput /> : null}
            </ContainerField>

            <ContainerField>
              <Textarea
                spellCheck='true'
                onChange={handleChange}
                name='desc'
                value={data.desc}
                onFocus={(e) => e.target.select()}
              />
              {edit ? <EditStripeInput /> : null}
            </ContainerField>
          </form>
        </Container>
      </Wrapper>
    </>
  )
}
