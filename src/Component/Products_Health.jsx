import React from 'react';
import './Health.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


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
        <img src='./images/health-insurance.png' width='400px' height='250px'></img>
        </div>
        </div>


    <div className='health-home_link'>
        <a target='_self' href='https://www.acko.com/' className='health-a'>Home</a>
        <span> / Health Insurance</span>
    </div>

                {/* what is health insurance */}

       <div className='health-insurance_para1'>
         <h4 className='health-insurance_h4'>Buy Health Insurance Policy Online in India</h4>
         <h4 className='health-insurance_h4'> What is Health Insurance?</h4>
         <p className='health-insurance_p'>Health insurance, also known as medical insurance, is a vital financial tool that provides coverage for the cost of medical treatment for injuries, illnesses, and more. There are a variety of health insurance plans available, from basic in-patient hospitalization coverage to more comprehensive policies that offer additional benefits such as preventive healthcare, death benefits, and more. Choosing the right health insurance policy or medical insurance plan can ensure you and your family are financially protected in the event of an unexpected illness or injury</p> 
         <p className='health-insurance_p'>Enhance your current sum insured by opting for our super top-up plans that provide several amazing benefits like no waiting period, coverage from day one, and many built-in add-ons. Super top-up plans offer all the benefits and coverage of a health plan, with an additional sum insured amount, for that extra cushioning during medical emergencies.</p>  
       </div>

                     {/* Overview */}
      <div className='health-insurance_para1'>
         <h4 className='health-insurance_h4'>ACKO Health Insurance: Overview</h4>
         <p className='health-insurance_p'>At ACKO, we offer Platinum Health Insurance Plans with different sum insured amounts such as Rs. 10 lakhs, Rs. 25 lakhs, Rs. 50 lakhs, and Rs. 1 crore; we also have a plan with an unlimited amount! With ACKO Platinum Health Plans by your side, there's no need to buy multiple policies, as we offer a one-stop solution for all your medical insurance needs.</p> 
      </div>  

       
                  {/* table */}
        <div className='health-insurance_table'>
         
         <Table bordered >
      <thead className='health-insurance_thead'>
        <tr>
          <th>ACKO HEALTH INSURANCE CATEGORIES</th>
          <th>ACKO SPECIFICATIONS</th>  
        </tr>
      </thead>
      <tbody className='health-insurance_tbody'>
        <tr>
          <td>Sum Insured</td>
          <td>10L, 25L, 50L, 1Cr, Unlimited</td>
        </tr>
        <tr>
          <td>Network Hospitals</td>
          <td>7100+ PAN India</td> 
        </tr>
        <tr>
          <td>Add-ons</td>
          <td>Included in the plan</td>
        </tr>
        <tr>
          <td>Deductions on claims</td>
          <td>No deductions</td>
        </tr>
        <tr>
          <td>Middleman commission</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Pre-Hospitalisation</td>
          <td>60 days</td>
        </tr>
        <tr>
          <td>Post-Hospitalisation</td>
          <td>120 days</td>
        </tr>
      </tbody>
    </Table>
        </div>

                    {/* why ACKO Health */}
        <div className='health-insurance_para1'>
         <h4 className='health-insurance_h4'>Why ACKO Health Insurance?</h4>
         <p className='health-insurance_p'>Livemint has recognized ACKO health insurance as India's top-ranked health insurance company. We are honoured to receive this recognition and take pride in providing our customers with exceptional service and coverage.</p> 
         <div className='health-insurance_img'>
          <img src='./images/news-paper.png' width='955px'></img>
         </div>
      </div>
                     
                  {/* why mwdical insurance important */}
      <div className='health-insurance_para1'>
         <h4 className='health-insurance_h4'>Why is Medical Insurance important for you and your family?</h4>
         <p className='health-insurance_p'>Unlike motor insurance, buying health insurance is not mandatory. No one will issue a challan or impose a penalty on your name if you don't have a medical insurance policy. However, getting a health plan is no longer a choice these days but a necessity. Considering the rising healthcare costs of quality healthcare facilities, we can't stop emphasising the importance of holistic health plans. Medical insurance is essential for those who wish to avail the following</p> 
           <div style={{marginLeft:'15px'}}>
        <p className='health-insurance_p bold'><b>1. Protection against rising medical costs (Inflation):</b> The development of medical technology has made it possible to treat diseases that were once incurable. But because the treatment is so expensive, it is practically impossible to pay out-of-pocket. In this situation, buying health insurance is the perfect solution to the rising medical costs and inflation.</p>  
        <div><p className='health-insurance_p bold'><b>2. Quality medical facilities:</b> You might have to compromise on the quality of healthcare without insurance. But if you do have health insurance, it will be easier to avail treatment in a good quality medical facility without thinking twice about the costs. The quality of treatment and timely availability can help with the patient's faster recovery thanks to coverages like pre and post-hospitalisation.</p>  
        </div>
           </div>
       </div>

    </>
    );
}
export default Products_Health;