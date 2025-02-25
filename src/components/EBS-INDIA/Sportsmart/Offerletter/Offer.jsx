import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../../context/AuthContext";
import "./offer.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  let fixedsalary =
    parseInt(Global.geshurofferform.specialAllowances) +
    parseInt(Global.geshurofferform.medicalAllowance) +
    parseInt(Global.geshurofferform.foodAllowance) +
    parseInt(Global.geshurofferform.conveyance) +
    parseInt(Global.geshurofferform.hra) +
    parseInt(Global.geshurofferform.basicSalary);

  let netsalary =
    fixedsalary - parseInt(Global.geshurofferform.professionalTax);
  let annualsalary = parseInt(netsalary) * 12;

  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/mart.jpg" alt="ewded" className="i3" />
        <p className="gio1" style={{ textTransform: "capitalize" }}>
          {Global.geshurofferform.name}
        </p>
        <p className="gio2f">Date: {Global.geshurofferform.date}</p>
        <p className="gio3">Sub: Offer Letter</p>
        <p className="gio4">
          With reference to your application and subsequent discussions, we are
          pleased to offer you the position of “
          <span className="bol" style={{ textTransform: "capitalize" }}>
            {Global.geshurofferform.position}
          </span>
          ” in our company
        </p>
        <p className="gio3a">Joining</p>
        <p className="gio5">1.</p>
        <p className="gio6">
          Your date of joining is{" "}
          <span className="bol">{Global.geshurofferform.joiningDate}</span>.
        </p>
        <p className="gio7">Place of posting & work hours</p>
        <p className="gio8">2.</p>
        <p className="gio9">
          You will be posted at HYDERABAD, but a place of posting/ workplace is
          subject to change as per Company’s business needs and requirements.
        </p>
        <p className="gio10">3.</p>
        <p className="gio11">
          The total working hours per week are 40 hours. The work timings may
          change as per work requirements.
        </p>
        <p className="gio12">4.</p>
        <p className="gio13">You may be required to work in shifts.</p>
        <p className="gio14">Probation & Tenure</p>
        <p className="gio15">5.</p>
        <p className="gio16">
          You will be under Probation for a period of 3 months from the date of
          joining. If your performance during the probation period is found
          satisfactory, you will be absorbed on regular rolls of the Company.
          During the probation period, if your performance is not found to be
          satisfactory, the Management reserves the right to either extend the
          training period or terminate your employment without any notice.
        </p>
        <p className="gio17">6.</p>
        <p className="gio18">
          You have confirmed that you will work with the Company for a minimum
          period of two (2) years from the date of joining.
        </p>
        <p className="gio19">Compensation</p>
        <p className="gio20">7.</p>
        <p className="gio21">
          Compensation details are placed at Annexure. From time to time your
          salary will be reviewed as per Company policy. All statutory
          deductions will be applicable as per existing rules in force.
        </p>
        <p className="gio22">8.</p>
        <p className="gio23">
          You are required to strictly maintain secrecy of your compensation
          package and ensure that you do not divulge or communicate in any
          manner, any information regarding your remuneration/ terms of
          employment, to any other Associate of the Company except to authorized
          HR Team members of the Company.
        </p>
        <p className="gio24">9.</p>
        <p className="gio25">
          In a similar way, when deputed to work/interact at the Client site,
          you are expected to maintain full confidentiality regarding your
          salary package, and you are expected not to discuss or disclose the
          same to any member of the client staff, in the interest of maintaining
          and promoting good and ethical functional business relations with our
          clients. Any breach of this clause is liable for termination of your
          services without any notice.
        </p>
        <p className="gio26">Other benefits</p>
        <p className="gio27">10.</p>
        <p className="gio28">
          You will be entitled to leave, weekly off, paid holidays as applicable
          to your category
        </p>
        <p className="gio29">
          (training/probation/regular) of employees and location of posting /
          place of work.
        </p>
        <p className="gio30">11.</p>
        <p className="gio31">
          Bonus: You will be eligible for Annual Bonus as per company Policy.
        </p>
        <div className="ds1"></div>
        <img src="./images/mart.jpg" alt="ewded" className="i3" />

        <p className="gio32">Performance Review</p>
        <p className="gio33">12.</p>
        <p className="gio34">
          Increments will be based on performance and will be released every
          year as per rules of the Company. For the first year of service, as
          per the standard norms, your salary hike will be PRO-RATED.
        </p>
        <p className="gio35">Dress Code</p>
        <p className="gio36">13.</p>
        <p className="gio37">
          You will be required to present yourself in formal attire during
          working hours.
        </p>
        <p className="gio38">Transfers</p>
        <p className="gio39">14.</p>
        <p className="gio40">
          You are liable to be transferred in such capacity as the Company may,
          from time to time, determine to any other location, department,
          function, establishment, or branch of the Company (domestic or
          overseas), or subsidiary/associate/affiliate Company. In such a case,
          you will be governed by the terms and conditions of service applicable
          to the new assignment.
        </p>
        <p className="gio41">Duties and Responsibilities</p>
        <p className="gio42">15.</p>
        <p className="gio43">
          You will be required to follow the working hours or work schedule as
          laid down by your Department / Business Head / Project Leader from
          time to time.
        </p>
        <p className="gio44">16.</p>
        <p className="gio45">
          You must effectively, diligently and to the best of your ability
          perform all duties and responsibilities entrusted to you and ensure
          the accomplishment of the tasks assigned to you. You may be required
          to work extra hours to achieve targets whenever the job so requires.
          You are required not to engage, whether directly or indirectly in
          activities that have or will have an adverse impact on the reputation/
          image and business of the Company.
        </p>
        <p className="gio46">17.</p>
        <p className="gio47">
          You may be required to undertake travel on Company work as and when
          necessary. You will be reimbursed for travel expenses as per Company
          rules.
        </p>
        <p className="gio48">18.</p>
        <p className="gio49">
          You are required to comply with the policies of the Company
          introduced/ updated/ modified from time to time, as they form an
          integral part of the terms of employment. Consequently, you are
          required to understand the scope and intent behind the policies and to
          comply with the same. You shall be committed to ensuring integrity in
          all aspects of functioning.
        </p>
        <p className="gio50">Notice Period</p>
        <p className="gio51">19.</p>
        <p className="gio52">
          Your employment is terminable by the company, without assigning a
          reason(s) or any during the training/probationary period. You are not
          allowed to separate yourself from the services of the Company for a
          minimum period of 2 years as committed by yourself during our
          pre-employment discussions.
        </p>
        <p className="gio53">20.</p>
        <p className="gio54">
          On confirmation, your employment is terminable, by either party, by
          giving 2 Months’ notice. On medical grounds or reasons attributable to
          weak performance, however, the notice period may be restricted to less
          than two months as may be decided by the Management.
        </p>
        <p className="gio55">21.</p>
        <p className="gio56">
          Further, the Company at its discretion may relieve you from its
          services on such date, as it may deem fit without notice or even prior
          to the expiry of the notice period, for any act of personal or
          professional misconduct or violation of terms of this Appointment or
          violation of any condition of any Agreement specifically entered into.
        </p>

        <div className="ds2"></div>
        <img src="./images/mart.jpg" alt="ewded" className="i3" />

        <p className="gio57">Leave Policy</p>
        <p className="gio58">22.</p>
        <p className="gio59">
          You are eligible to leave as per the leave policy formulated by the
          Company from time to time.
        </p>
        <p className="gio60">23.</p>
        <p className="gio61">
          If you remain absent from work without authorization or reasonable
          explanation for more than three consecutive working days, it would be
          considered as a voluntary abandonment of duties from your side.
        </p>
        <p className="gio62">24.</p>
        <p className="gio63">
          In case of abandonment resulting in cessation of your service, you
          will be liable to pay compensation to the Company equivalent to
          one-month gross salary towards liquidated damages on account of loss
          arising outof your unplanned absence leading to non-delivery / delayed
          execution of Projects / ineffective functioning of the Organisation.
        </p>
        <p className="gio64">Confidentiality and Non-Disclosure</p>
        <p className="gio65">25.</p>
        <p className="gio66">
          You shall sign the attached confidentiality/non-disclosure/non-compete
          Agreement, in consideration of being employed by the Company.
        </p>
        <p className="gio67">ISMS Guidelines</p>
        <p className="gio68">26.</p>
        <p className="gio69">
          The Company would expect you to abide by the information Security
          Management System of the Company and follow all the policies and
          guidelines mentioned therein.
        </p>
        <p className="gio70">Conflict of Interest</p>
        <p className="gio71">27.</p>
        <p className="gio72">
          You are required to engage yourself exclusively in the work assigned
          to you by the Company and shall not take up any independent or
          individual or group assignments part-time or full time or in an
          advisory capacity or otherwise directly or indirectly without the
          express written consent of the Management.
        </p>
        <p className="gio73">28.</p>
        <p className="gio74">
          Please ensure that you shall not directly or indirectly, engage in any
          activity or have any interest in, or perform any services for any
          organization/person who is involved in activities, which are or shall
          be in conflict with the interests of the Company.
        </p>
        <p className="gio75">29.</p>
        <p className="gio76">
          It will be necessary on your part that during your employment and for
          a period of one year from the cessation of your employment,
          irrespective of the circumstances of or the reasons for the cessation,
          not to solicit, induce or encourage: -
        </p>
        <p className="gio77">a.</p>
        <p className="gio78">
          Any employee of the Company to terminate his/ her employment for
          accepting employment with any competitor, associate or customer with
          whom you or the Company has a direct or indirect relationship.
        </p>
        <p className="gio79">b.</p>
        <p className="gio80">
          Any customer or associate to move his existing business with BCL
          Sports LLP to a third party or to terminate their business
          relationship with BCL Sports LLP
        </p>
        <p className="gio81">c.</p>
        <p className="gio82">
          Any existing employee to become associated with or perform services of
          any type for any third party.
        </p>
        <p className="gio83">General</p>
        <p className="gio84">30.</p>
        <p className="gio85">
          While making presentations to prospective and present clients or
          associates, you will ensure compliance with directives and guidelines
          of our principals, and also ensure that they shall be based on factual
          information only. You shall while making such presentations, follow
          the rules, policies and directives laid down, if any, by the Company.
        </p>
        <p className="gio86">31.</p>
        <p className="gio87">
          You shall not commit on behalf of the Company any form of service or
          obligation unless it is part of the clearly laid out list of
          deliverables and services approved in writing by the Company.
        </p>
        <p className="gio88">32.</p>
        <p className="gio89">
          You shall not associate yourself in any manner with activities
          involving collective demands and shall not conduct yourself in any
          manner amounting to breach of confidence reposed in you or
          inconsistent with the position of trust and responsibility assigned to
          / occupied by you.
        </p>

        <div className="ds2"></div>
        <img src="./images/mart.jpg" alt="ewded" className="i3" />
        <p className="gio90">33.</p>
        <p className="gio91">
          We trust that you have not provided us with any false declaration or
          wilfully suppressed any material facts or information. If you have,
          you shall be liable for removal from service without notice. Please
          note that you are required to inform us if there are any Agreements,
          oral or written, that you have entered into and which relate to your
          commitments under the terms of your present or any previous
          employment.
        </p>
        <p className="gio92">34.</p>
        <p className="gio93">
          These employment terms supersede and replace any existing agreement or
          understanding, if any,between the Company and you, relating to the
          subject matter of your employment.
        </p>
        <p className="gio94">35.</p>
        <p className="gio95">
          Your employment terms may be specifically enforced legally if
          required. If any of the provisions under these terms are declared void
          or unenforceable for any reason, the remaining provisions shall
          continue to be in force and effect.
        </p>
        <p className="gio96">36.</p>
        <p className="gio97">
          At any time during the course of your employment with the Company, if
          you are found physically unfit to discharge your duties efficiently on
          a continuous basis, the company, may discharge you from the services
          of the Company giving a notice period of one month or lesser as may be
          decided by the Management or pay you salary in lieu of notice.
        </p>
        <p className="gio98">37.</p>
        <p className="gio99">
          You will be responsible to notify immediately to the Company, in
          writing, of any change/update in personal information like marital
          status, present address, permanent address, contact details, email
          address, additional/new qualification, etc.
        </p>
        <p className="gio100">38.</p>
        <p className="gio101">
          Please note that the terms of employment are liable to be changed from
          time to time based on the Company’s policies.
        </p>
        <p className="gio102">
          Note: At any point of time of your employment with the Company, in
          case you need any clarification on any terms of employment or support
          or service from HR, you may send a mail to hr@geshurinfra.com for a
          quick response. Please return the enclosed duplicate of this letter,
          duly signed on each page, in token of your having clearly understood,
          accepted and agreed to abide by the terms and conditions as referred
          above.
        </p>
        <p className="gio103">
          We welcome you to <span className="bol">BCL Sports LLP</span> Family
          and look forward to many years of mutually rewarding association. For
          BCL Sports LLP
        </p>
        <img src="./images/sportsstamp.png" alt="ewded" className="gesstamp" />
        <p className="gio104">Sincerely,</p>
        <p className="gio105">Ashwini Chinta</p>
        <p className="gio106">HR Manager</p>
        <p className="gio107">HR@geshurinfra.com</p>
        <p className="gio108">+91 – 93989 73635</p>
        <p className="gio109">Human Resources</p>
        <p className="gio110">Employee Acknowledgement</p>
        <p className="gio111">
          I have read and understood the above terms and conditions of
          employment and agree to accept{" "}
        </p>
        <p className="gio111a">
          the same on these terms and conditions. I confirm having received the
          original of this appointment letter.
        </p>
        <p className="gio112">Name: </p>
        <p className="gio113">Signature:</p>
        <div className="gio113a"></div>
        <p className="gio114">
          Date:{" "}
          <span style={{ marginLeft: "30px" }}>
            {Global.geshurofferform.date}
          </span>
        </p>
        <div className="ds2"></div>
        <img src="./images/spot.png" alt="ewded" className="i3" />

        <p className="gio115" style={{fontWeight:"bold"}}>ENCLOSURES:</p>
        <p className="gio116">
          1) Salary Structure dated {Global.geshurofferform.date}
        </p>
        <p className="gio117">SALARY STRUCTURE</p>
        <p className="gio118" style={{ textTransform: "capitalize" }}>
          Name: {Global.geshurofferform.name}
        </p>
        <p className="gio119" style={{ textTransform: "capitalize" }}>
          Designation: {Global.geshurofferform.position}
        </p>
        <p className="gio120">MONTHLY COMPONENTS</p>
        <p className="gio121">Basic Salary</p>
        <p className="gio122">HRA</p>
        <p className="gio123">Conveyance</p>
        <p className="gio124">Food Allowance</p>
        <p className="gio125">Medical Allowance</p>
        <p className="gio126">Special Allowances</p>
        <p className="gio127">Fixed Salary</p>
        <p className="gio128">Basket of allowance</p>
        <p className="gio129">Meal Voucher</p>
        <p className="gio130">Gross Salary</p>
        <p className="gio131">CCA / NSA</p>
        <p className="gio132">Total Monthly Earnings</p>
        <p className="gio133">Deductions</p>
        <p className="gio134">PF</p>
        <p className="gio135">ESI</p>
        <p className="gio136">Professional Tax</p>
        <p className="gio137">Income Tax</p>
        <p className="gio138">Total deductions</p>
        <p className="gio139">Net Salary per month</p>
        <p className="gio140">Monthly Benefits</p>
        <p className="gio141">PF</p>
        <p className="gio142">ESI</p>
        <p className="gio143">Total Additional benefits</p>
        <p className="gio144">Cost to Company per month</p>
        <p className="gio145">Annual Medical Insurance</p>
        <p className="gio146">Annual Bonus</p>
        <p className="gio147">Gratuity</p>
        <p className="gio148">PLI</p>
        <p className="gio149">ANNUAL COST TO COMPANY</p>
        <p className="gio150">AMOUNT</p>
        <p className="gio151">{Global.geshurofferform.basicSalary}</p>
        <p className="gio152">{Global.geshurofferform.hra}</p>
        <p className="gio153">{Global.geshurofferform.conveyance}</p>
        <p className="gio154">{Global.geshurofferform.foodAllowance}</p>
        <p className="gio155">{Global.geshurofferform.medicalAllowance}</p>
        <p className="gio156">{Global.geshurofferform.specialAllowances}</p>
        <p className="gio157">{fixedsalary}</p>
        <p className="gio158">0</p>
        <p className="gio159">0</p>
        <p className="gio160">{fixedsalary}</p>
        <p className="gio161">-</p>
        <p className="gio162">{fixedsalary}</p>
        <p className="gio163">NA</p>
        <p className="gio164">-</p>
        <p className="gio165">{Global.geshurofferform.professionalTax}</p>
        <p className="gio166">-</p>
        <p className="gio167">{Global.geshurofferform.professionalTax}</p>
        <p className="gio168">{netsalary}</p>
        <p className="gio169">NA</p>
        <p className="gio170">-</p>
        <p className="gio171">NA</p>
        <p className="gio172">{netsalary}</p>
        <p className="gio173">NA</p>
        <p className="gio174">NA</p>
        <p className="gio175">NA</p>
        <p className="gio176">-</p>
        <p className="gio177">{annualsalary}</p>
        <p className="gio178">Notes:</p>
        <p className="gio179">
          ****Performance linked incentive: paid between 0% to 100% based on the
          eligibility criteria.
        </p>
        <div className="fd"></div>
        <div className="ds2"></div>
      </div>
    </div>
  );
});

const Sportsoffer = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="print-button">
        Print this out!
      </button>
    </div>
  );
};

export default Sportsoffer;
