const React = require('react')
const renderer = require('react-test-renderer')
const Component = require('./Component')
const BadComponent = require('./BadComponent')

test('Component', () => {
  const component = renderer.create(<Component />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('BadComponent', () => {
  const component = renderer.create(<BadComponent />)
  expect(component.toJSON()).toMatchSnapshot()
})
