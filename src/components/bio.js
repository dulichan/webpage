/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary,
            more
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
       {author?.name && (
        <>
         <p>
          {author?.summary}
          <br />
          <span className="more">Some more things,</span>
          
          <ul >
             {author?.more?.length > 0 && author.more.map((item, index) => (
                <li key={index}>{item}</li>
             ))}
           </ul>
          
         
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Check my Twitter
          </a>

        </p>
        <p>
        
        </p>
        </>
      )}

    
     
    </div>
  )
}

export default Bio
