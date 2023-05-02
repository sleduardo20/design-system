import { ComponentProps } from 'react'

import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export function CheckBox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

export interface CheckBoxProps
  extends ComponentProps<typeof CheckboxIndicator> {}
