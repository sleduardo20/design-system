import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  args: {
    src: 'https://avatars.githubusercontent.com/u/56615577?v=4',
    alt: 'Eduardo Lima',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
