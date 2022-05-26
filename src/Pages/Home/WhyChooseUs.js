import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="my-10 py-12">
      <h2 className="text-4xl font-bold">We Word With The Best</h2>
      <p className="text-slate-500 mb-8">
        <small>see our cloud support</small>
      </p>
      <div className="grid grid-cols-2 ml-6 lg:flex justify-center gap-16 mb-10">
          <img width='150' src="https://i.ibb.co/8bY97rC/work-google-cloud.jpg" alt="" />
          <img width='150' src="https://i.ibb.co/rwRzWTZ/work-mailchimp.jpg" alt="" />
          <img width='150' src="https://i.ibb.co/nbVCq5M/work-opayo.jpg" alt="" />
          <img width='150' src="https://i.ibb.co/zh22mbt/work-paypal.jpg" alt="" />
      </div>
      <div className="grid grid-cols-2 ml-6 lg:flex justify-center gap-16">
          <img width='150' src="https://i.ibb.co/bgnN685/khaos-control.jpg" alt="" />
          <img width='150' src="https://i.ibb.co/f8mzmjF/work-loqate.jpg" alt="" />
          <img width='150' src="https://i.ibb.co/LkJLLPf/work-123reg.jpg" alt="" />
          <img width='150' src="https://i.ibb.co/3sSpWsv/work-leadforensics.jpg" alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
