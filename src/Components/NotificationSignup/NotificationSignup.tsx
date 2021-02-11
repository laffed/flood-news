import React, {useState, MouseEvent} from 'react'

function NotificationSignup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [resMessage, setResMessage] = useState('');

  const validate = (): boolean => {
    if (fname.length > 2 && lname.length > 2 && email.length > 6) {
      setError('');
      return true;
    }
    if (fname.length <= 2) {
      setError(prev => prev + ' |First Name Required (more than 2 characters)| ')
    }
    if (lname.length <= 2) {
      setError(prev => prev + ' |Last Name Required (more than 2 characters)| ')
    }
    if (email.length <= 6) {
      setError(prev => prev + ' |Email Required (more than 6 characters)| ')
    }
    return false;
  }

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    //TODO call fetch here
  }

  return (
    <section id="notifications">
      <div className="container centerText">
        <h2 className="sectionTitle">Get Notified</h2>
        <p>Get the latest news and reminders about Flood News at Noon direct to your inbox!</p>
        <div id="mc_embed_signup">
          <form>
            <div id="mc_embed_signup_scroll">
              <div className="indicates-required">
                {error.length > 0 && <em>{error}</em>}
                {error.length === 0 && <><span className="asterisk">*</span> <em>indicates required</em></>}
              </div>
              <div className="dFlex">
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input type="text" value={fname} onChange={e => setFname(e.target.value)} name="FNAME" className="required" id="mce-FNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input type="text" value={lname} onChange={e => setLname(e.target.value)} name="LNAME" className="required" id="mce-LNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
              </div>
              {/* TODO handle response stuff here */}
              {/* <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style="display:none"></div>
                <div className="response" id="mce-success-response" style="display:none"></div>
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_efdc40eec1b24ab9ed739201b_08d27c3fb5" tabindex="-1" value="" />
              </div> */}
              <div className="clear">
                <input type="submit" value="Subscribe" onClick={e => handleSubmit(e)} name="subscribe" id="mc-embedded-subscribe" className="mainBtn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NotificationSignup;