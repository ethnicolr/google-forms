import React from 'react'

export default function ViewFormGrid({ columns, rows, type }) {
  const tableSpace = [{ value: '&nbsp;' }, ...rows]
  return (
    <table>
      <tbody>
        {rows.map((item, ind) => {
          let head = null
          if (ind === 0) {
            head = (
              <tr>
                <td>&nbsp;</td>
                {columns.map((column) => (
                  <td>{column.value}</td>
                ))}
              </tr>
            )
          }
          return (
            <>
              {head}
              <tr>
                <td>{item.value}</td>
                {columns.map((column) => (
                  <td>
                    <input type={type} name={item.value} />
                  </td>
                ))}
              </tr>
            </>
          )
        })}
      </tbody>
    </table>
  )
}
