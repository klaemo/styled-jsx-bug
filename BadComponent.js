const React = require('react')
const css = require('styled-jsx/css')

const styles = css`
  p {
    color: red;
  }
`

module.exports = () => (
  <div>
    <p>only this paragraph will get the style :)</p>

    <style jsx>{styles}</style>
  </div>
)
