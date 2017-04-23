import React from 'react'
import {renderToString} from 'react-dom/server'

import Page from '../../components/page/page'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'

const title = 'Starbucks Machine'

export default () => {

  const dom = renderToString(
    <Page>
      <Header title={title} />
      <Sidebar />
    </Page>
  )

  return {
    dom,
    title
  }
}