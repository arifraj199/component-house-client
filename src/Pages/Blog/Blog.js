import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold mt-5">FAQ</h2>
      <hr className="my-5 w-1/6 mx-auto" />
      <div className="w-2/3 mx-auto mb-5">
        <div className="text-left pl-12 bg-slate-100 p-4 w-full rounded-sm ml-12 mt-6">
          <h2 className="text-xl font-bold mb-1">
            How will you improve the performance of a React Application?
          </h2>
          <p className="text-md">
            <ul>
              <li>1) Using immutable data structures,</li>
              <li>2) Function/Stateless components and React.PureComponent,</li>
              <li>3) Dependency optimization,</li>
              <li>4) Avoid using index as Key for map,</li>
              <li>5) Avoiding props in initial states,</li>
              <li>6) CSS animations instead of JS animations,</li>
              <li>7) Using a CDN,</li>
              <li>8) Consider server-side rendering etc.</li>
            </ul>
          </p>
        </div>
        <div className="text-left pl-12 bg-slate-100 p-4 w-full  rounded-sm ml-12 mt-6">
          <h2 className="text-xl font-bold mb-2">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-md">
            There are four main types of state you need to properly manage in
            your React apps: 1. Local state, 2. Global state, 3. Server state,
            4. URL state Local state : Local state is most often managed in
            React using the useState hook. Global state : Global state is data
            we manage across multiple components. Global state is necessary when
            we want to get and update data anywhere in our app, or in multiple
            components at least. Server state : Data that comes from an external
            server that must be integrated with our UI state. Server state is a
            simple concept, but can be hard to manage alongside all of our local
            and global UI state. URL state : Data that exists on our URLs,
            including the pathname and query parameters.
          </p>
        </div>
        <div className="text-left pl-12 bg-slate-100 p-4 w-full  rounded-sm ml-12 mt-6">
          <h2 className="text-xl font-bold mb-2">
            How does prototypical inheritance work?
          </h2>
          <p className="text-md">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
        <div className="text-left pl-12 bg-slate-100 p-4 w-full  rounded-sm ml-12 mt-6">
          <h2 className="text-xl font-bold mb-2">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p className="text-md">
            First of all i will apply map on array of products. This i will get
            each product from array of products. Then i will send each product
            to another route. Then i will distructure all key from product
            object. Then i will use useQuery for sending data to server. In
            useQuery i will use query link so that i will find all data by
            query(name). Then i will use get api to server for finding data from
            database using query(name).
          </p>
        </div>
        <div className="text-left pl-12 bg-slate-100 p-4 w-full  rounded-sm ml-12 mt-6">
          <h2 className="text-xl font-bold mb-2">
            What is a unit test? Why should write unit tests?
          </h2>
          <p className="text-md">
            Unit test is a method that instantiates a small part of our code and
            verifies its behavior independently from other parts of the project.
            Unit testing allows software developers to actually think through
            the design of the software and what has to be done before they write
            the code. This can help them to stay focused and can also help them
            to create much better designs. Testing a code early on can help to
            define what that piece of code is really responsible for..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
