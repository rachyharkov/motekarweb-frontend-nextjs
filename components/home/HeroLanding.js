export default function HeroLanding() {

  const startVideo = async () => {
    const video = document.querySelector('#HeroBackgroundVideo');
  
    try {
        await video.play();
        video.setAttribute('autoPlay', true);
        document.querySelector('#HeroBackgroundVideo').style.opacity = 1;
        console.log('video started playing successfully');
    } catch (err) {
      console.log(err, 'video play error');
      // do stuff in case your video is unavailable to play/autoplay
    }
  }

  setTimeout(startVideo,7000);

  return(
    <section className='section-vh-85 section-hero-landing'>
      <div className="container-fluid section-hero-inner section-inner">
        <div className="row">
          <div className="col-12">
            <h2><span className="animation-slide-up delay-1">ETERNALLY CAPTURED, </span><br/><span className="animation-slide-up delay-2">BEAUTIFULLY EDITED</span></h2>
            <p className="animation-fade-in delay-3">Motekar is A Team of trained video editors who are able to
strip the heavy lifting from most production houses</p>
            <button className="btn btn-primary animation-fade-in delay-3-5">Beyond Editing</button>
          </div>
        </div>
      </div>
      <div className='section-hero-landing-transparent'></div>
      <div className='section-hero-landing-background animation-fade-in'>
        <video muted loop id="HeroBackgroundVideo" alt="placeholder" playsInline>
          <source src="videos/video-hero.mp4" type="video/mp4"></source>
          <source src="videos/video-hero.webm" type="video/webm"></source>
        </video>
      </div>
      {/* <img data-src="./src/videos/images/1066_websize.jpg" className="lazyload section-hero-landing-background" alt="placeholder" /> */}
    </section>
  )

}