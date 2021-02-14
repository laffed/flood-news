import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';

function NotificationSignup() {
  // const [resMessage, setResMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, 'Must be greater than 2 characters').required('Required'),
      lastName: Yup.string().min(2, 'Must be greater than 2 characters').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => (handleSubmit(values))
  })

  const handleSubmit = async (values: any) => {
    // const url = process.env.REACT_APP_MAILCHIMP_URL || '';
    // const response = await fetch(url, {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
    console.log(values);
  }

  return (
    <section id="notifications">
      <div className="container centerText">
        <h2 className="sectionTitle">Get Notified</h2>
        <p>Get the latest news and reminders about Flood News at Noon direct to your inbox!</p>
        <div id="mc_embed_signup">
          <form onSubmit={formik.handleSubmit}>
            <div id="mc_embed_signup_scroll">
              <div className="indicates-required">
                <><span className="asterisk">*</span> <em>indicates required</em></>
              </div>
              <div className="dFlex">
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="firstName"
                    className="required"
                    id="mce-FNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="lastName"
                    className="required"
                    id="mce-LNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                    className="required email"
                    id="mce-EMAIL" />
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
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mainBtn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NotificationSignup;