import React from 'react';
import './Footer.css';
import {FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <> 
    <div className='main-div'>
    <footer>
      <div className='foot-div1'>
            <img src='./images/acko-logo.png' height='33px' width='100px'></img>
            
            <div className='foot-div2'>
              <div className='foot-left'>
              <h4 className='foot-h4'>ACKO General Insurance Limited</h4>
              <p className='foot-address'>2nd Floor, #36/5, Hustlehub One East, Somasandrapalya,
              27th Main Rd, Sector 2, HSR Layot, Bengaluru, Karnataka 560102</p> 

            <div className='foot-social-media'>
             <a target='_blank' href='https://www.facebook.com/ackoindia/' >< FaFacebookF className='foot-icon'/></a>

             <a target='_blank' href='https://www.instagram.com/ackoindia/'>< FaInstagramSquare className='foot-icon'/></a>

             <a target='_blank' href='https://www.linkedin.com/company/acko/'><FaLinkedinIn className='foot-icon'/></a>

             <a target='_blank' href='https://twitter.com/AckoIndia'><FaTwitter className='foot-icon'/></a>

             <a target='_blank' href='https://www.youtube.com/channel/UCn1gqDU9TqbR8u6_10S0RJA'><FaYoutube className='foot-icon'/></a>
             </div>
           </div>
           <div className='foot-right'>
            <div className='foot-div3'>
              <p className='foot-download'>Download our ACKO app now!</p>
              <a target='_blank' href='https://ackogi01.onelink.me/j0xF/fce251b8'><img src='./images/google-play.png' width='135' height='40' className='foot-app'></img></a>
              <a target='_blank' href='https://ackogi02.onelink.me/mnNt/d3aba770'><img src='./images/app-store.png' width='135' height='40' className='foot-app'></img></a>
            </div>
           </div>
          </div>
      </div> 

      {/* *********** */}
      <div className='foot-list'>
      <div className='foot-div4'>
        <div className='foot-div5'>
          <div className='foot-title'>
              <h4 className='foot-H4'>Products</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Car insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Third party car insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Two wheeler insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Third party bike insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Vehical/Motor insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Health insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Company</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>About us</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Board of directors</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Careers</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Media kit</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>All resources</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Articles</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Legal</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Whistleblower policy</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Public disclosure</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Financials & disclosures</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Privacy policy</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Terms & conditions</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Stewardship code</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Support</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Contact us</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Customer service</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Cancellations & refunds</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Download</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Unclaimed amount</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>IRDAI website</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Car Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Car insurance premium calculator</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Car insurance comparison</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Car insurance claim process</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>IDV in car insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Brand new car insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Old car insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Bike Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Bike Insurance premium calculator</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Compare two wheeler insurance online</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Bike/Two wheeler insurance claim process</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>IDV in bike insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>New bike insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Old bike insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Health Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Health Insurance premium calculator</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Compare health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Health insurance claim</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Cashless health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Renewing mediclaim policy online</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>1 crore health insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Explore Car Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Own damage insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>SUV car insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Add-on cover in car insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Car theft insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Cashless garages for vehicle insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Tyre protection in car insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Explore Bike Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Bike insurance claim settlement ratio</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Comprehensive vs third party bike insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>What is NCB in bike insurance?</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>First party bike insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Personal accident cover in bike insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Constructive total loss in bike insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Explore Health Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>waiting period in health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Reimbursement health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Women's health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Health insurance for parents</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Health insurance for children</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Health insurance for senior citizens</a></li>
              </ul>
          </div>
           <div className='foot-title'>
              <h4 className='foot-H4'>Explore Group Health Insurance</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>Corporate health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Group health insurance add-ons</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Maternity cover in group health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Daily hospital cash benefit in group health insurance</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Group health insurance for pre-existing diseases</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Tax benefits of group health insurance</a></li>
              </ul>
          </div>
          <div className='foot-title'>
              <h4 className='foot-H4'>Explore More</h4>
              <ul className='foot-ul'>
                <li className='foot-li'><a href='#' className='foot-links'>RTO Office</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Traffic Rules and Fines</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>PUC Certificate</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Vehicle Fitness Certificate</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>New Vehicle Registration</a></li>
                <li className='foot-li'><a href='#' className='foot-links'>Vehicle Owner details by Number Plate</a></li>
              </ul>
          </div>
        </div>
      </div>
      </div> 
      <div className='foot-end1'>
        <div className='foot-end2'>
          <div className='foot-end3'>
            <div className='foot-end4'>
              <p className='foot-p'>CIN: U66000KA2016PLC138288</p>
              <p className='foot-p'>IRDAI Registration No: 157</p>
              <p className='foot-p'>Category: Non-Life Insurance</p>
            </div>
            <div className='foot-end4'>
            <p className='foot-p1'>The use of images and brands are only for the purpose of indication and illustration. ACKO claims no rights on the IP rights of any third parties. The ratings are derived from reviews and feedback received from Google and Facebook users on their respective platforms. | *Discount is calculated basis F&amp;U filling rates. Product name: Private Car Policy - Bundled | UIN: IRDAN157RP0014V01201819 |</p>
              <p className='foot-p1'>Trade logo displayed above belongs to ACKO Technology &amp; Services Pvt Ltd and used by ACKO General insurance Limited under License. For more details on risk factors, terms, conditions and exclusions, please read the policy wordings carefully before concluding a sale.</p>
            </div>
          </div>
        </div>
        </div>   
    </footer>
    </div>
    </>
  )
}

export default Footer;