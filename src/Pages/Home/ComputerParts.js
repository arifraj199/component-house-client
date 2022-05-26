import React, { useState } from "react";
import Component from "./Component";

const ComputerParts = () => {
  const [components, setComponents] = useState([]);

  fetch("http://localhost:5000/component")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setComponents(data);
    });

    const start = components?.length-6;
    const end = components?.length;

  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold">Components:{components.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-10">
        {components.slice(start,end).map((component) => (
          <Component key={component.id} component={component}></Component>
        ))}
      </div>
    </div>
  );
};

export default ComputerParts;
