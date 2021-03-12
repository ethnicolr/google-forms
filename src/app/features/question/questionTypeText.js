/** @jsxImportSource @emotion/react */
import React from 'react'

export default function QuestionTypeText({ mode }) {
  return (
    <div
      css={{
        width: '80%',
        borderBottom: '1px dotted rgba(0,0,0,0.38)',
        marginBottom: '30px',
      }}
    >
      <h2
        css={{
          fontSize: '14px',
          color: '#70757a',
          fontWeight: '400',
        }}
      >
        {mode === 'line' ? 'Краткий ответ' : 'Развернутый ответ'}
      </h2>
    </div>
  )
}
