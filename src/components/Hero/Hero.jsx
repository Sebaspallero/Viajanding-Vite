import airplaneImg from '../../assets/airplane-wing-bck-v2.png'
import './styles.css'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='info-hero-section'>
            <div className='hero-info-box'>
                <div className='hero-badge-box'>
                    <span className='hero-accent-badge'></span>
                    <p className='hero-text-badge text'>#2023 best flight seller</p>
                </div>
                <p className='text hero-text'>Viajanding it's the best place to <span>search</span>, <span>compare</span><span> & book</span> flights on the web. Get to known all our services <span className='hero-link'>here</span>.</p>
            </div>
            <h1 className='hero-title'>Find your <span>next</span> Adventure</h1>
        </div>
        <div className='image-hero-section'>
            <img src={airplaneImg} className='hero-img'/>
            <div className='stats-box'>
                <p className='stat sm-text'><span className='title'>25K</span> happy customers</p>
                <p className='stat sm-text'><span className='title'>+10K</span> Flights</p>
                <p className='stat sm-text'><span className='title'>+20</span> Destinations</p>
                <p className='stat sm-text'><span className='title'>1</span> Place To Find It All</p>
            </div>
        </div>
    </section>
  )
}

export default Hero