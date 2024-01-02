import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../DNavbar.vue'

describe('Tests Navbar', () => {
  it('renders properly', async () => {
    const props = {
      user: { name: 'Suely' },
      routes: [{ to: '/', name: 'Home' }],
      actions: [
        {
          name: 'Login',
          trigger: 'handleLogin',
          show: true
        }
      ]
    }
    const wrapper = mount(Navbar, {
      props,
      global: {
        stubs: ['router-link', 'router-view']
      }
    })

    const navLinks = wrapper.findAll('RouterLink')
    const button = wrapper.find('button')

    expect(navLinks.length).toBe(wrapper.vm.routes.length)
    expect(wrapper.text()).toContain('Suely')
    expect(button.text()).toContain('Login')
  })
})
