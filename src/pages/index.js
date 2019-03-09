import React from "react"
import { graphql } from "gatsby"

export default props => {
  const { allImageSharp } = props.data

  const { edges } = allImageSharp

  return (
    <div>
      {edges.map(edge => {
        return <img key={edge.node.id} src={edge.node.resize.src} alt="" />
      })}
    </div>
  )
}

export const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          id

          resize(width: 640) {
            src
          }
        }
      }
    }
  }
`
