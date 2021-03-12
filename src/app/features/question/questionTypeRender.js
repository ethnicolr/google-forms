/** @jsxImportSource @emotion/react */
import QuestionSelect from './questionTypeSelect'
import QuestionRange from './questionTypeRange'
import QuestionText from './questionTypeText'

export default function QuestionSwitch({
  typeItems,
  updateParameters,
  parameters,
}) {
  function renderSwitch(item) {
    const [type, mode] = item.split('-')

    switch (type) {
      case 'text':
        return <QuestionText mode={mode} />
      case 'range':
        return <QuestionRange updateParameters={updateParameters} />
      case 'select':
        return (
          <QuestionSelect
            mode={mode}
            grid={false}
            updateParameters={updateParameters}
            head={'items'}
            data={parameters.items}
            type={type}
          />
        )
      case 'grid':
        return (
          <div css={{ display: 'flex' }}>
            <QuestionSelect
              mode={mode}
              grid={true}
              head={'column'}
              data={parameters.coumn}
              updateParameters={updateParameters}
              type={type}
            />
            <QuestionSelect
              mode={mode}
              grid={true}
              head={'items'}
              data={parameters.items}
              updateParameters={updateParameters}
              type={type}
            />{' '}
          </div>
        )
      default:
        return null
    }
  }

  return <>{renderSwitch(typeItems)}</>
}
