import { Box, CheckBox, CheckBoxProps, Text } from '@igniteui-sleduardo20/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/CheckBox',
  decorators: [
    (Story) => {
      return (
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {Story()}
          <Text>Is checked</Text>
        </Box>
      )
    },
  ],
  component: CheckBox,
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
