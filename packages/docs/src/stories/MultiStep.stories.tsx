import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, MultiStep, MultiStepProps } from '@igniteui-sleduardo20/react'

export default {
  title: 'Form/MultiStep',
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$1',
          }}
        >
          <Text size="sm">Etapas</Text>
          {Story()}
        </Box>
      )
    },
  ],
  component: MultiStep,
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
    size: 5,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 5,
    size: 5,
  },
}
