import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = (props) => {
    const { location, title, children } = props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <div
          style={{
            ...scale(0.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: '#666',
          }}
          >
      HealthyWealthyMe.com
          </div>
        </>
      )
    } else {
      header = (
        <>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <div
        style={{
          ...scale(-0.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          color: '#666',
        }}
        >
 ❤ HealthyWealthyMe.com
        </div>
        </>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(23),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
HealthyWealthyMe      >
        <iframe
          title="it's healthy on HealthyWealthyMe"
          src="https://github.com/Sukumu/gatsby-wordpress-netlify-starter/"
          frameBorder="0"
          scrolling="0"
          width="158px"
          height="30px"
          style={{
            position: 'absolute',
            left: 10,
            top: 10,
          }}
          ></iframe>
          <a
          href=TWITTER_SITE
          style={{
            position: 'absolute',
            left: 150,
            top: 10,
          }}
        >Get Healthy, Wealthy and Happy</a>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://www.healthywealthyme.com/">HealthyWealthyMe</a>
          {` `}
          | Administered by <a href="https://sukumu.com">Sukumu</a>
        </footer>
      </div>
    )
}

export default Layout
