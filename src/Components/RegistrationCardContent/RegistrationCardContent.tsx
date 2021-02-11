import React from 'react'

function RegistrationCardContent() {

  return (
    <div className="regContent dFlex centerText">
      <p>*Must be on the CNC Roster to attend.</p>
      <div className="regCall">
        <p className="large">Register by calling:</p>
        <a href="tel:2514714718" className="mainBtn">251-471-4718</a>
        <p className="blueBold">Option 4</p>
      </div>
      <div className="regDetails">
        <p>Within a few days prior to the webinar, you will receive an email with instructions and a link to join.</p>
        <p className="small"><em>Check your spam and add cnc-resource to your contacts so you don't miss out.</em></p>
        <hr />
        <p className="small">For questions, please email HR at <a href="mailto:hr@cnc-resource.com">hr@cnc-resource.com</a>.</p>
      </div>
    </div>
  );
}

export default RegistrationCardContent;