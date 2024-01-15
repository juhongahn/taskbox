import PureInboxScreen from './PureInboxScreen.vue'

import { fireEvent, within } from '@storybook/test'

export default {
  component: PureInboxScreen,
  title: 'PureInboxScreen',
  tags: ['autodocs']
}

export const Default = {}

export const Error = {
  args: { error: true }
}

export const WithInteractions = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'))
    await fireEvent.click(canvas.getByLabelText('pinTask-2'))
    await fireEvent.click(canvas.getByLabelText('pinTask-3'))
    await fireEvent.click(canvas.getByLabelText('pinTask-4'))

    // Simulates pinning the third task
  }
}
