import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Survey from '../DSurvey.vue'

const mockSurvey = {
  showQuestionNumbers: 'off',
  checkErrorsMode: 'onValueChanged',
  questionErrorLocation: 'bottom',
  elements: [
    {
      name: 'Name',
      title: 'Enter your name:',
      type: 'text',
      isRequired: true
    },
    {
      name: 'Email',
      title: 'Enter your email:',
      type: 'text',
      isRequired: true,
      validators: [{ type: 'email' }]
    }
  ]
}

describe('Tests Survey', () => {
  it('renders properly', async () => {
    const wrapper = mount(Survey, {
      props: {
        model: mockSurvey
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })
})
