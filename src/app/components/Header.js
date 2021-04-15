/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { useContextEditMod } from './Wrapper'
import { Textarea, ContainerField, EditStripeInput } from '../lib'

const defaultState = {
  title: 'Новая форма',
  desc: 'Описание',
}

export default function Header({ changeStateHeader, data = defaultState }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    changeStateHeader(name, value)
  }

  const [edit] = useContextEditMod()
  return (
    <form>
      <ContainerField>
        <Textarea
          spellCheck='false'
          value={data.title}
          placeholder='Названиеи формы'
          onChange={handleChange}
          name='title'
          onFocus={(e) => e.target.select()}
          size={'32px'}
        />
        {edit ? <EditStripeInput edit /> : null}
      </ContainerField>

      <ContainerField>
        <Textarea
          spellCheck='true'
          onChange={handleChange}
          placeholder='Описание'
          name='desc'
          height={'25px'}
          size={'18px'}
          value={data.desc}
          onFocus={(e) => e.target.select()}
        />
        {edit ? <EditStripeInput /> : null}
      </ContainerField>
    </form>
  )
}
