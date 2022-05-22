import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
  return (
    <div className="my-8">
      <h2 className="text-3xl mb-12">Business Summery</h2>


      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8 mb-4">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div className="font-4xl">
            <FontAwesomeIcon style={{"fontSize":"70px"}} icon={faCoffee} />
          </div>
          
          <div class="stat-value">89,400</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div className="font-4xl">
            <FontAwesomeIcon style={{"fontSize":"70px"}} icon={faCoffee} />
          </div>
          
          <div class="stat-value">89,400</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div className="font-4xl">
            <FontAwesomeIcon style={{"fontSize":"70px"}} icon={faCoffee} />
          </div>
          
          <div class="stat-value">89,400</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
      <div class="stats shadow-lg bg-slate-200 ml-8 lg:mr-8">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div className="font-4xl">
            <FontAwesomeIcon style={{"fontSize":"70px"}} icon={faCoffee} />
          </div>
          
          <div class="stat-value">89,400</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
