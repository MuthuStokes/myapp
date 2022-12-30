import logo from './dream-effects-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="pt-40 pb-50">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>

                        <div className='boxlogo text-center'>
                            <img src={logo} alt='dreameffect logo' className='img-fluid header-logo'></img>
                        </div>
                        <div className='socialbox'>
                            <h4>Follow Us on Social Channels</h4>

                            <ul className='sociallink'>
                                <li><a href='https://www.facebook.com/dreameffects' target='_blank'><i class="fa fa-facebook" aria-hidden='true'></i> <span>Facebook</span></a></li>
                                <li><a href='https://twitter.com/dreameffects' target='_blank'><i class='fa fa-twitter' aria-hidden='true'></i> <span>Twitter</span></a></li>
                                <li><a href='https://www.linkedin.com/company/dreameffects/' target='_blank'><i class='fa fa-linkedin' aria-hidden='true'></i> <span>LinkedIn</span></a></li>
                                <li><a href='https://www.linkedin.com/company/dreameffects/' target='_blank'><i class='fa fa-youtube-play' aria-hidden='true'></i> <span>YouTube</span></a></li>
                                <li><a href='https://www.youtube.com/@DreamEffectsMultimedia' target='_blank'><i class='fa fa-behance' aria-hidden='true'></i> <span>Behance</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>


    </div>
    </div>
  );
}

export default App;
