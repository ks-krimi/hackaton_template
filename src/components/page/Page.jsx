import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { forwardRef } from 'react'
import { Box } from '@material-ui/core'

const Page = forwardRef(({ children, title = '', ...props }, ref) => (
  <Box ref={ref} {...props}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
))

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Page
