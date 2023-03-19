export default function HeaderSection({ title, imageBackground }) {
  return (
    <section className='section-vh-50 section-general-header'>
      <div className="container-fluid section-general-header-inner section-inner">
        <div className="row">
          <div className="col-12">
            <h2><span className="animation-slide-up">{title}</span></h2>
          </div>
        </div>
      </div>
      <div className='section-general-header-transparent'></div>
      <img className='background-static' src={imageBackground} alt="logo" />
    </section>
  )
}