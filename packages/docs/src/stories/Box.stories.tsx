import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@igniteui-sleduardo20/react'

export default {
  title: 'Box',
  args: {
    children: (
      <>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ducimus nisi tempore quis ratione veniam, facere magni quod sunt
          corporis cumque modi est fugiat quia aspernatur adipisci pariatur sed
          nam.
        </Text>
      </>
    ),
  },

  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },

  component: Box,
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
