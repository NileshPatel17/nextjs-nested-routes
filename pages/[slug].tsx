import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import type { ReactElement } from 'react'
import {useRouter} from 'next/router';

export default function Index() {
    const router=useRouter();
    const {slug}=router.query;
  return (
    <section>
      <h2>Dynamic route (slug): {slug}</h2>
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