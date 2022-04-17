import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import type { ReactElement } from 'react'

export default function Index() {
  return (
    <section>
      <h2>Layout Example (About)</h2>
    </section>
  )
}

Index.getLayout = function getLayout(page:ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}