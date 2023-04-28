import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  args: {
    children: 'Enviar',
  },
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
