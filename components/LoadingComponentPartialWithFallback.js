export default function LoadPartial({ children, loading, condition}) {
  if (loading == true) {
    if (condition == true) {
      return children
    } else {
      return <div className="text-center">
        <img src="/images/failed-load-partial.png" alt="failed-load-partial" style={{width: '59%',opacity: '40%'}}/>
        <p className="text-center" style={{marginTop: '-1.5rem'}}>Sorry, we can't load this content. Please try refreshing the page.</p>
      </div>
    }
  } else {
    return <div className="text-center"><i className="fa fa-spinner fa-spin"></i> Loading</div>
  }
}