import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../DNavbar.vue'

describe('DNavbar', () => {
  it('renders properly', () => {
    const wrapper = mount(Navbar, {
      props: {
        name: 'Suely',
        routes: [{ to: '/', name: 'Home' }]
      },
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    const navLinks = wrapper.findAll('RouterLink')
    expect(navLinks.length).toBe(wrapper.vm.routes.length)
    expect(wrapper.text()).toContain('Suely')
  })
})
