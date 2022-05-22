import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold">Business Summery</h2>
      <p className="text-slate-500"><small>Take a Look Our User Experience</small></p>


      <div class="stats shadow-lg bg-gray-200 ml-8 lg:mr-8 mb-4  mt-10">
        <div class="stat">
          <div class="stat-title font-bold text-cyan-700 text-lg mb-2">Served Customers</div>
          <div className="font-4xl">
          <FontAwesomeIcon style={{"fontSize":"60px",'color':'#3A4256'}} icon={faPeopleGroup} />
            
          </div>
          
          <div class="stat-value text-green-800">100+</div>
          <div class="stat-desc">Provides Best Products</div>
        </div>
      </div>
      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8">
        <div class="stat">
        <div class="stat-title font-bold text-cyan-700 text-lg mb-2">Reviews</div>
          <div className="font-4xl">
          <FontAwesomeIcon style={{"fontSize":"60px",'color':'#3A4256'}} icon={faThumbsUp} />
          </div>
          
          <div class="stat-value text-green-800">12k+</div>
          <div class="stat-desc">Precious Customers Review</div>
        </div>
      </div>
      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8">
        <div class="stat">
        <div class="stat-title font-bold text-cyan-700 text-lg mb-2">Component</div>
          <div className="font-4xl">
          <FontAwesomeIcon style={{"fontSize":"60px",'color':'#3A4256'}} icon={faScrewdriverWrench} />
          </div>
          
          <div class="stat-value text-green-800">500+</div>
          <div class="stat-desc">Available Stored Components</div>
        </div>
      </div>
      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8">
        <div class="stat">
        <div class="stat-title font-bold text-cyan-700 text-lg mb-2 ">Sold</div>
          <div className="font-4xl">
          <FontAwesomeIcon style={{"fontSize":"60px",'color':'#3A4256'}} icon={faPeopleCarryBox} />
          </div>
          
          <div class="stat-value text-green-800">200+</div>
          <div class="stat-desc">Outstanding Sold Decade</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
