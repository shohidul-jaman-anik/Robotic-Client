import React from 'react';
import { Accordion } from 'react-bootstrap';

const blog = () => {
    return (
        <div className='container my-5'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>How will you improve the performance of a React Application?</Accordion.Header>
    <Accordion.Body>
  <p>To improve the performance of a React Application we need to know how React updates its UI and how to measure an apps performance.
you need to make sure that components receive only necessary props.Detecting unnecessary rendering of components.Virtual DOM is used in React.js to increase performance.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
    <Accordion.Body>
    <p>To properly manage react app we need four types of state</p>
   <p>URL state.</p>
   <p>Global state.</p>
   <p>Local state.</p>
   <p>Server state.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
    <Accordion.Body>
    <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</Accordion.Header>
    <Accordion.Body>
    <p>If you use directly update the state it made only updates it does not change this.If you use like this const [products, setProducts] = useState([]),setProducts() then it will change directly.When we need to change a value in the state object you need to use setState()</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Accordion.Header>
    <Accordion.Body>

<p>
    const dress = 
   name: 'earring', price: 33, description: 'valuable ' 
   name: 'show', price: 13, description: 'valuable ' 
   name: 'babaydress', price: 53, description: 'valuable  
   name: 'ring', price: 73, description: 'valuable' 

function getProduct(mobiles, keyword) 
   (const mobile of mobiles) 
     (dress.name === keyword) 
      return mobile;
  console.log(getProduct(dress, 'earring'))
</p>
   <p>One can use filter() function in JavaScript to filter the object array based on attributes. The filter() function will return a new array containing all the array elements that pass the given condition. If no elements pass the condition it returns an empty array.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>What is a unit test? Why should write unit tests?</Accordion.Header>
    <Accordion.Body>
    <p>To ensures the quality and standards of code before deployed we need to use  Unit testing.This the smallest testable parts of an application in the software development process. This makes the implementation details in your code shorter and easier to understand.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default blog;