import React from 'react'
import { App } from './App'
import { mount } from '../../../pr-validations/cypress/npm/react'

it('renders hello world', () => {
  mount(<App />)
  cy.get('h1').contains('Hello World')
}
})
