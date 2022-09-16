import Layout from '../components/layout'
import MainBanner from '../components/mainBanner'
import FormSearch from '../components/formSearch'
import StepsBanner from '../components/stepsBanner'
import Contact from '../components/contact'
import Benefits from '../components/benefits'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <FormSearch />
      <StepsBanner />
      <Benefits />
      <Contact />
    </Layout>
  )
}
