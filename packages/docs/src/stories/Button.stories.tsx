import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { User } from 'phosphor-react'

export default {
  title: 'Form/Button',
  args: {
    children: 'Send',
  },
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Button Small',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Profile
        <User />
      </>
    ),
  },
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Button Small',
  },
}
