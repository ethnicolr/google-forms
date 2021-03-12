/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

const TD = styled.td`
  height: 2.5em;
  min-width: 48px;
  padding: 0.25em;
  text-align: center;
  vertical-align: middle;
  width: 120px;
`

export default function ViewFormGrid({ columns, rows, type }) {
  const tableSpace = [{ value: '&nbsp;' }, ...rows]
  return (
    <table css={{ borderCollapse: 'collapse' }}>
      <tbody>
        {rows.map((item, ind) => {
          let head = null
          if (ind === 0) {
            head = (
              <tr>
                <TD>&nbsp;</TD>
                {columns.map((column) => (
                  <TD>{column.value}</TD>
                ))}
              </tr>
            )
          }
          return (
            <>
              {head}
              <tr
                css={{
                  backgroundColor: '#f8f9fa',
                }}
              >
                <TD>{item.value}</TD>
                {columns.map((column) => (
                  <TD>
                    <input type={type} name={item.value} />
                  </TD>
                ))}
              </tr>
            </>
          )
        })}
      </tbody>
    </table>
  )
}
