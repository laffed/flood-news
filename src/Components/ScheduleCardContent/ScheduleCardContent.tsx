import React, {useState, useEffect} from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {dummyData} from '../../assets/utils';
import {Data} from '../../types';

function ScheduleCardContent() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  const mount = async () => {
    const fetchData = async () => {
      //dummy fetch
      setData(dummyData);
    }
    await fetchData().then(() => setLoading(false));
  }

  useEffect(() => {
    mount();
  }, []);

  if (loading) {
    return (
      <div>Loading schedule data...</div>
    );
  }

  return (
    <div className="schedulecardcontent-wrapper">
      {data.map((obj) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
          >
            <span>{obj.date}</span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="classInfo">
              <div className="author">
                <p className="blueBold">${obj.name}</p>
                <p className="small">${obj.company}</p>
                {obj.social.length > 0 && (
                  <p>
                    <a href={obj.social} target="_blank" rel='noreferrer'>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </p>
                )}
              </div>
              <p>{obj.description}</p>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default ScheduleCardContent;