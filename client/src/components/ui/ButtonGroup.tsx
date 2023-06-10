import React from 'react'

type ButtonGroupPropsType = {
    setKeyName: (args: string) => void
}

function ButtonGroup({setKeyName}: ButtonGroupPropsType): JSX.Element {
  return (
    <div>
    <button
      type="button"
      onClick={() => setKeyName('2021')}
    >
      2021
    </button>
    <button
      type="button"
      onClick={() => setKeyName('2022')}
    >
      2022
    </button>
    <button
      type="button"
      onClick={() => setKeyName('2023')}
    >
      2023
    </button>
    <button
      type="button"
      onClick={() => setKeyName('2024')}
    >
      2024
    </button>
  </div>
  )
}

export default React.memo(ButtonGroup);