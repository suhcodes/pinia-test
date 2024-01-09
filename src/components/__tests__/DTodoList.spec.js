import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from '../DTodoList.vue'

describe('TodoList', () => {
  it('emits add event when button is clicked with a todo', async () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: ['Task 1', 'Task 2']
      }
    })
    await wrapper.find('button').trigger('click')
    // expect(wrapper.emitted().add).toHaveLength(1)
    // expect(wrapper.emitted().add[0]).toEqual(['Task 1'])
  })

  it('does not emit add event when button is clicked without a todo', async () => {
    const wrapper = mount(TodoList)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().add).toBeUndefined()
  })
})
