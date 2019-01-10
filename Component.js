const React = require('react')

module.exports = () => (
  <div>
    <p>only this paragraph will get the style :)</p>

    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
  </div>
)
