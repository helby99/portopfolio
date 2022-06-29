


export default function Beranda(props) {
  console.log(props.web.Datajson[0].Body[0].banner[1].image);
  return (
    <div>
      <div style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].banner[1].image}")`}}>
        {/*Header*/}
        <div className="container" id="Home" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].banner[2].image}")`}}>
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#Home" className="nav-link px-2 link-dark">{props.web.Datajson[0].Header[0].navbar[0].title}</a></li>
              <li><a href="#Album" className="nav-link px-2 link-dark">{props.web.Datajson[0].Header[0].navbar[1].title}</a></li>
              <li><a href="#About" className="nav-link px-2 link-dark">{props.web.Datajson[0].Header[0].navbar[2].title}</a></li>
              <li><a href="#Contact" className="nav-link px-2 link-dark">{props.web.Datajson[0].Header[0].navbar[3].title}</a></li>
            </ul>
            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">{props.web.Datajson[0].Header[0].account[0].text}</button>
              <button type="button" className="btn btn-primary">{props.web.Datajson[0].Header[0].account[1  ].text}</button>
            </div>
          </header>
        </div>
        {/*banner*/}
        <div className="px-4 py-5 my-5 text-center" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].banner[2].image}")`, opacity : 0.8}}>
          <h1 className="display-5 fw-bold">{props.web.Datajson[0].Body[0].banner[0].title}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{props.web.Datajson[0].Body[0].banner[0].desc}</p>
          </div>
        </div>
        {/*album*/}
        <div className="container px-4 py-5" id="Album" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].banner[2].image}")`}}>
          <h2 className="pb-2 border-bottom">{props.web.Datajson[0].Body[0].album[0].title}</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].album[1].image}")`}}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.web.Datajson[0].Body[0].album[1].insideText}</h2>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].album[2].image}")`}}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.web.Datajson[0].Body[0].album[2].insideText}</h2>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].album[1].image}")`}}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.web.Datajson[0].Body[0].album[3].insideText}</h2>
                </div>
              </div>
            </div>
          </div>
        </div><br/>
        {/*About*/}
        <div className="container col-xxl-8 px-4 py-5" id="About" style={{backgroundImage: `url("${props.web.Datajson[0].Body[0].banner[2].image}")`}}>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={props.web.Datajson[0].Body[0].about[1].image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">{props.web.Datajson[0].Body[0].about[0].title}</h1>
              <p className="lead">{props.web.Datajson[0].Body[0].about[0].desc}</p>
            </div>
          </div>
        </div>	
        {/*Contact*/}
        <div className="mt-5 conatiner" id="Contact">
          <div className="text-center">
            <h3 className="text-primary">{props.web.Datajson[0].Body[0].contact[0].title}</h3>
            <p className="lead">{props.web.Datajson[0].Body[0].contact[0].desc}</p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <div className="bg-white col-md-4">
              <div className="p-4 rounded shadow-md">
                <div>
                  <label htmlFor="name" className="form-label">{props.web.Datajson[0].Body[0].contact[1].text}</label>
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mt-3">
                  <label htmlFor="email" className="form-label">{props.web.Datajson[0].Body[0].contact[2].text}</label>
                  <input type="text" name="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mt-3">
                  <label htmlFor="subject" className="form-label">{props.web.Datajson[0].Body[0].contact[3].text}</label>
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mt-3 mb-3">
                  <label htmlFor="message" className="form-label">{props.web.Datajson[0].Body[0].contact[4].text}</label>
                  <textarea name="message" cols={20} rows={6} className="form-control" placeholder="message" defaultValue={""} />
                </div>
                <button className="btn btn-primary">
                  {props.web.Datajson[0].Body[0].contact[5].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*footer*/}
        <div className="container">
          <footer className="container">
            <p className="float-end"><a href="#">{}</a></p>
            <p>{props.web.Datajson[0].Footer[0].Coppyright[0].text}<a href="#">{props.web.Datajson[0].Footer[0].Coppyright[1].text}</a> · <a href="#">{props.web.Datajson[0].Footer[0].Coppyright[2].text}</a></p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const localLink = "http://localhost:5000/"
  const onlineLink = ""
  const dataResponse = await fetch(localLink);
  const dataJson = await dataResponse.json();
  
  return {
    props : {
      web: dataJson
    }
  }
}
