import SliderSection from '../components/SliderSection'
import SearchSection from '../components/SearchSection'
import AboutSection from '../components/AboutSection'
import FooterSection from '../components/FooterSection'
import { HashLink } from 'react-router-hash-link'

function Home() {

  return (
      <>
        <SliderSection></SliderSection>
        <SearchSection></SearchSection>
        <AboutSection></AboutSection>
        <FooterSection></FooterSection>
        <div className='go-up'>

          <HashLink smooth to="#">
            <img src="./assets/arrow.png" alt="go up" />
          </HashLink>
        </div>
        
      </>
  )
}

export default Home