import React from 'react';
import './Health.css';
import Button from 'react-bootstrap/Button';


const Products_Health = () => {
  return (
    <>
    <div className='health-main'>
        <div className='health-left'>
        <h1 className='health-h1'>Health Insurance</h1>
        <p className='health-para'> Health insurance policies that are specifically designed to
            cover You & Your Family</p>
        <p className='health-para2'>✅ Plans starting @ ₹20/day*  ✅ Zero deductions at claims ✅7100+ Cashless Hospitals</p>

        <div className='health-btn'>
            <Button variant="success" className='health-btn-main'><span className='health-btn-span'>Find the right plan</span></Button>
        </div>
        </div>
        <div className='health-img'>
        <img src='./images/health-insurance.png' width='210px' height='220px'></img>
        </div>
        </div>
    <div className='health-homelink'>
        <a target='_self' href='https://www.acko.com/'>Home</a>
        <span> / Health Insurance</span>
    </div>
    <div className='health-'>
        <h4>Buy Health Insurance Policy Online in India Jump Tag Icon
            What is Health Insurance?</h4>
         <p>Health insurance, also known as medical insurance, is a vital financial tool that provides coverage for the cost of medical treatment for injuries, illnesses, and more. There are a variety of health insurance plans available, from basic in-patient hospitalization coverage to more comprehensive policies that offer additional benefits such as preventive healthcare, death benefits, and more. Choosing the right health insurance policy or medical insurance plan can ensure you and your family are financially protected in the event of an unexpected illness or injury</p> 
         <p>Enhance your current sum insured by opting for our super top-up plans that provide several amazing benefits like no waiting period, coverage from day one, and many built-in add-ons. Super top-up plans offer all the benefits and coverage of a health plan, with an additional sum insured amount, for that extra cushioning during medical emergencies.</p>  
    </div>
    </>
    );
}

export default Products_Health;
