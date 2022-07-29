import React from 'react';
import './Jobarea.css';
import job1 from '../../../image/Jobarea/job1.jpg';
import job2 from '../../../image/Jobarea/job2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Jobarea = () => {
    return (
        <div className='Job-area my-5 py-5'>
        <div className='Job-area-part'>
        <div className='ad-img-1'style={{backgroundImage: `url(${job1})`, backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",width:"100%",height:"100%",padding:'200px 0'}}>
           </div>
           <div className='ad-img-2'>
               <div className='job-shape'>
                    <img src={job2} alt="" />
               </div>
               <div className='job-area-content'>
               <h2>Enhancing, Not Replacing, Human Jobs</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
               <ul>
                   <li><FontAwesomeIcon icon={faCheck} /> Higher Revenue</li>
                   <li><FontAwesomeIcon icon={faCheck} /> Improved Monitoring</li>
                   <li><FontAwesomeIcon icon={faCheck} /> Lower Cost</li>
                   <li><FontAwesomeIcon icon={faCheck} /> Fast Implementation</li>
                   <li><FontAwesomeIcon icon={faCheck} /> Greater Efficiency</li>
                   <li><FontAwesomeIcon icon={faCheck} /> Better Safety</li>
               </ul>
               </div>
           </div> 
        </div>
       </div>
    );
};

export default Jobarea;