import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./offer.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/geneis.png" alt="ewded" className="i3" />
        <p className="gene1" style={{ fontWeight: "bold" }}>
          OFFER OF EMPLOYMENT
        </p>
        <p className="gene2">{Global.Offerform.name}</p>
        <p className="gene3">Date: {Global.Offerform.date}</p>

        <p className="gene5">
          <span className="bol">1. JOB OFFER :</span> We are pleased to offer
          you the position of{" "}
          <span
            className="bol"
            style={{ fontSize: "15px", textTransform: "capitalize" }}
          >
            {Global.Offerform.position}
          </span>{" "}
          with{" "}
          <span className="bol" style={{ fontSize: "15px" }}>
            Genesis7 Solutions{" "}
          </span>
          effective Start Date {Global.Offerform.startDate}. Our consulting
          practice is enjoying rapid growth, and we believe that you will find
          your career exciting and rewarding. We trust that your knowledge,
          skills and experience will be our most valuable assets.
        </p>
        <p className="gene6">
          <span className="bol">2. PROBATION AND EMPLOYMENT :</span> During the
          period of probation, the employee is not eligible for salary as the
          company is investing time and efforts on candidate for no result. Once
          the candidate compgenees the probation will be eligible for the salary
          mentioned in the remuneration.
        </p>
        <p className="gene7">
          <span className="bol">3. REMUNERATION :</span> During the term of your
          employment, your commencing salary will be{" "}
          <span className="bol">{Global.Offerform.salaryPackage}/-</span> Per
          Annum plus Incentives/ Bonus and Rewards program as applicable (Less
          appropriate payroll taxes and authorized withholdings as applicable).
          Payroll will be subject to TDS and the remaining will be directly
          deposited into your account. You can file income tax returns at the
          end of the year. You are eligible to participate in our benefits and
          rewards program as applicable.
        </p>
        <p className="gene8">
          <span className="bol">4. WORK TIMING :</span> Your work time is Monday
          to Friday between{" "}
          <span className="bol" style={{ fontSize: "15px" }}>
            {Global.Offerform.workTime}
          </span>
          .
        </p>
        <p className="gene9">
          <span className="bol"> 5. LEAVES :</span>
          You will be entitled to 12 days of paid leave per year that includes
          casual leave and sick leave with minimum prior notice period of 2 days
          to the management/ reporting manager by email prior to availing the
          casual leave. Ensure business continuity during the absence by
          arranging backup coverage for ongoing work and interview coordination.
          Paid leave will accrue as soon as compgeneion of the probationary
          period.
        </p>
        <p className="gene10">
          <span className="bol">6. APPRAISAL :</span> As per the company rules
          appraisal will be done according to the wish of management and your
          performance. One yearly appraisal will always be there. Your Career
          progression is purely based on your performance and professional
          conduct.
        </p>

        <p className="gene12">
          <span className="bol">7. TERMINATION OF EMPLOYMENT : </span>If you
          don’t abide by the rules and regulations that are mentioned in the
          code of conduct; then you can be terminated from the company. You
          cannot resign without the Resignation acceptance of the Company Head.
          Upon termination of your employment with Company, you must return all
          such notes/memoranda and every copy thereof to the company. You cannot
          leave the company without compgeneing your notice period of 30 days,
          if you do so then, company can hold your 1-month salary upon
          absconding.
        </p>

        <p className="gene13">
          <span className="bol" style={{ fontSize: "16px" }}>
            Terms of Termination :
          </span>
        </p>
        <p className="gene14a"> i) </p>
        <p className="gene14">
          In the event information furnished by you in your application for
          employment or during the selection process is found at any time during
          your employment to be incorrect or false, and/or if you have
          suppressed material information regarding. Your qualifications and
          experience, the Company reserves the right to terminate your services
          without notice or compensation.
        </p>
        <p className="gene16a"> ii) </p>
        <p className="gene16">
          In the event of leave of absence from work for a continuous period of
          3 days without obtaining your manager’s approval, you will be deemed
          to have voluntarily terminated your service without notice.
        </p>

        <div className="ds1"></div>
        <img src="./images/geneis.png" alt="ewded" className="i3" />

        <p className="gene17a">iii) </p>
        <p className="gene17">
          You are required to provide 30 days’ notice prior to voluntary
          termination of employment. You agree to make best efforts to
          transition the responsibilities and client relationships in an orderly
          manner.
        </p>
        <p className="gene18a">iv) </p>
        <p className="gene18">
          The company at any time during the employment/probation period may
          terminate the employment if the services rendered by you are not
          satisfactory to our management with or without prior notice.
        </p>
        <p className="gene19">
          <span className="bol">8. POLICIES & GUIDELINES :</span> Your
          association and employment will be governed by the various Associate
          related policies and guidelines of the organization.
        </p>
        <p className="gene20a"> i) </p>
        <p className="gene20">
          As per the requirement of the organization there would be reference
          check done to ascertain the details provided by you, your appointment
          is contingent upon satisfactory references; background checks
          including verification of your application materials, education and
          employment history. Your employment is also contingent upon your
          ability to work for the Company without restriction (i.e. you do not
          have any non-compete obligations or other restrictive clauses with any
          previous employer). In the event we find there are any deviations, we
          would view the same stringently and would initiate necessary action as
          per the company’s disciplinary policy.
        </p>
        <p className="gene21a"> ii) </p>
        <p className="gene21">
          Your posting at present is at{" "}
          <span className="bol">Genesis7 Solutions</span>. Hyderabad, India
          during your employment with this company, you may be posted or
          transferred to the other companies or else if you attached to any
          other Group Company or to any of the offices/ subsidiaries/units/
          associate offices of the company, to any town or city in India or
          abroad, at the sole discretion of the Management. While working in
          another company on transferred/ attached, you shall be entitled to
          emoluments and perks as applicable in transferred/ attached company
          and for all purposes you shall be deemed to be employed in the company
          transferred/ attached.
        </p>

        <p className="gene22a"> iii) </p>
        <p className="gene22">
          During your service with the Company, you are expected to devote your
          whole time and Attention to the Company’s affairs and refrain from
          directly or indirectly engaging in any other business.
        </p>
        <p className="gene23a">iv) </p>
        <p className="gene23">
          You are expected to deal with company’s money, material and documents
          with utmost honesty and professional ethics. Your service may be
          dispensed with any time without any prior notice if you are found
          guilty of gross indiscipline, fraud misappropriation or acting against
          the interest of the company.
        </p>
        <p className="gene24a">v) </p>
        <p className="gene24">
          Upon your resignation or retirement from the Company or termination of
          your services, you are required to return all assets and property of
          the Company such as documents, laptop, phone, machines, data, files
          and books etc. (including but not limited to leased properties). Your
          final salary deposit will be released post receipt of the above
          assets.
        </p>
        <p className="gene25a"> vi) </p>
        <p className="gene25">
          Information pertaining to operations of{" "}
          <span className="bol">Genesis7 Solutions</span>. is the intellectual
          property and is confidential, and you will sign a non-disclosure
          agreement. You will not give anyone, by word of mouth, writing,
          facsimile, email any devices or otherwise any particulars or details,
          which you acquire during your employment of our working systems,
          technical knowhow, security arrangements, Administrative and or
          organization matters of our and our clients whether confidential,
          secret or otherwise, either during your employment with Company or
          afterwards. If you are bound by a confidentiality agreement with a
          previous employer, you must notify the Company and indemnify the
          Company against any breach thereof.
        </p>
        <p className="gene26a"> vii) </p>
        <p className="gene26">
          The Company shall have the right to claim damages from you if you
          don’t return the assets and property of the Company within 4 Working
          days from the day of Resignation/Termination from your services.
        </p>
        <p className="gene27a"> viii)</p>
        <p className="gene27">
          The Employee shall not indulge in “Cyber Crimes against Persons”,
          “Cyber Crimes against Persons Property”, “and Cyber Crimes against
          Government”, “Cyber Crimes against Society at large” and “Case Study
          Attacks on Cyberspace”. If an employee is found guilty under any of
          the above-mentioned crimes, the employee shall be prosecuted as per
          Information Technology Act 2000, IT Amendment Act 2008, and other Acts
          as and when amended by Government of India.
        </p>
        <p className="gene28a"> ix) </p>
        <p className="gene28">
          {" "}
          Information pertaining to operations of Genesis7 Solutions is the
          intellectual property and is confidential, and you will sign a
          non-disclosure agreement. You will not give anyone, by word of mouth,
          writing, facsimile, email any devices or otherwise any particulars or
          details, which you
        </p>

        <div className="ds2"></div>
        <img src="./images/geneis.png" alt="ewded" className="i3" />
        <p className="gegee28">
          acquire during the course of your employment of our working systems,
          technical knowhow, security arrangements, administrative and or
          organization matters of our and our clients whether confidential,
          secret or otherwise, either during your employment with Company or
          afterwards. If you are bound by a confidentiality agreement with a
          previous employer, you must notify the Company and indemnify the
          Company against any breach thereof.
        </p>
        <p className="jene1"> x) </p>
        <p className="jene2">
          You will abide by all the rules and regulations of the Company which
          are in force from time to time and the Company shall have the right to
          vary or modify any or all the above terms and conditions which shall
          be binding on you.
        </p>
        <p className="gene29">9. DOCUMENTS:</p>
        <p className="gene30">
          You are requested to fulfill below mentioned joining formalities. Sign
          and date this job offer geneter were indicated below. The following
          documents need to be submitted by you prior to your start date.
        </p>
        <p className="gene31">
          1. Photo copy of All marksheets and educational certificates
        </p>
        <p className="gene32">
          2. Photocopy of Passport/ Driving License/ Voter’s Identity Card
          (Anyone)
        </p>
        <p className="gene33">3. Photocopy of PanCard</p>
        <p className="gene34">
          4. Last Three (3) months’ Pay Slips/ Salary Slips from the previous
          employer.
        </p>
        <p className="gene35">
          5. Experience Certificate/ Relieving Orders of previous companies
        </p>
        <p className="gene36">6. Two (2) passport size photographs</p>
        <p className="gene37">
          Congratulations and we welcome you to our organization. Good Luck!
        </p>
        <p className="gene38">
          <span className="bol" style={{ fontSize: "15px" }}>
            Sincerely,
          </span>
        </p>
        <img src="./images/Genesisstamp.jpg" alt="stamp" className="gestamp" />
        <p className="gene39">
          <span className="bol" style={{ fontSize: "15px" }}>
            Sudheer Panyam
          </span>
        </p>
        <p className="gene40">
          <span className="bol" style={{ fontSize: "15px" }}>
            HR Manager
          </span>
        </p>
        <p className="gene41">
          <span className="bol" style={{ fontSize: "15px" }}>
            hr@genesis7solutions.com
          </span>
        </p>
        <p className="gene42">
          <span className="bol" style={{ fontSize: "15px" }}>
            +91- 9652 59 79 29
          </span>
        </p>
        <p className="gene43">
          <span className="bol" style={{ fontSize: "15px" }}>
            Candidate Declaration :
          </span>
        </p>
        <p className="gene44">
          I hereby declare and affirm that I have studied and understood the
          above terms and conditions of employment as described in this geneter
          and accept the offer.
        </p>
        <p className="gene45" style={{ fontWeight: "bold" }}>
          Sign:
        </p>
        <div className="gene46"></div>
        <p className="gene47" style={{ fontWeight: "bold" }}>
          Date: {Global.Offerform.date}
        </p>
        <div className="ds2"></div>
      </div>
    </div>
  );
});

const Genesisoffer = () => {
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

export default Genesisoffer;
