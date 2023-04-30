import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto ex perferendis culpa omnis quibusdam molestias numquam nobis facilis iure natus veniam laboriosam, repellendus, libero adipisci corporis assumenda quos autem!',
  },
  component: Text,
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
