import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../../context/AuthContext";
import "./offer.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i4" />

        <p className="let1" style={{ fontWeight: "bolder", color: "black" }}>
          OFFER OF EMPLOYMENT
        </p>

        <p className="let2">{Global.Offerform.name}</p>
        <p className="let3">Date: {Global.Offerform.date}</p>

        <p className="let4">
          Following your application and the recent interview with us, we are
          glad to extend an offer for the role of "
          <span
            className="bol"
            style={{ fontSize: "15px", textTransform: "capitalize" }}
          >
            {Global.Offerform.position}
          </span>
          ” at
          <span className="bol"> PROTATHLITIS SPORTSMART LLP</span> Your
          appointment is governed by the terms and conditions outlined below.
        </p>
        <p className="let5">
          <span className="bol">1. JOB OFFER :</span> We are delighted to
          appoint you to the role of{" "}
          <span
            className="bol"
            style={{ fontSize: "15px", textTransform: "capitalize" }}
          >
            {Global.Offerform.position}
          </span>{" "}
          with effect from{" "}
          <span className="bol" style={{ fontSize: "15px" }}>
            {Global.Offerform.startDate}
          </span>
          , reporting directly to
          <span className="bol" style={{ fontSize: "15px" }}>
            {" "}
            Panyam Sudheer
          </span>{" "}
          – Director. Your place of work will be
          <span className="bol"> PROTATHLITIS SPORTSMART LLP</span>, situated at{" "}
          <span className="bol" style={{ fontSize: "15px" }}>
            Plot no: 106, Jana Chaithanya colony, Turkayamjal, Abdullapurmet
            Mandal, Ranga Reddy District, Telangana – 501510
          </span>
          . With our consulting services growing at a fast pace, we’re confident
          that your journey with us will be both enriching and successful. We
          believe your skills, expertise, and background will be among our most
          valued strengths.
        </p>

        <p className="let6">
          <span className="bol">2. PROBATION AND EMPLOYMENT :</span> During the
          probationary period, the employee will not be entitled to a salary as
          the company is dedicating time and resources towards the candidate
          without immediate output. Upon successful completion of probation, the
          candidate will be eligible for the salary outlined in the remuneration
          section.
        </p>
        <p className="let7">
          <span className="bol">3. REMUNERATION :</span> In the period of
          employment, your initial annual salary will be{" "}
          <span className="bol" style={{ fontSize: "15px" }}>
            INR {Global.Offerform.salaryPackage}/-
          </span>{" "}
          along with applicable incentives, bonuses, and rewards programs
          (subject to standard payroll deductions and statutory withholdings).
          TDS will be applied, and the net amount will be credited directly to
          your bank account. You may file your income tax returns at the end of
          the financial year. You will also be entitled to take part in our
          applicable benefits and rewards offerings.
        </p>

        <p className="let8">
          <span className="bol">4. WORK TIMING :</span> Your work time is Monday
          to Friday between{" "}
          <span className="bol" style={{ fontSize: "15px" }}>
            {Global.Offerform.workTime} IST
          </span>
          .
        </p>
        <p className="let9">
          <span className="bol">5. LEAVES :</span>
          You are entitled to 12 days of paid leave annually, which covers both
          casual and sick leave. A minimum notice of 2 days must be provided to
          management or your reporting manager via email before availing any
          casual leave. To maintain workflow, please ensure appropriate backup
          is arranged for ongoing responsibilities and interview scheduling
          during your absence. Paid leave will begin accruing upon successful
          completion of the probation period.
        </p>

        <p className="let10">
          <span className="bol">6. APPRAISAL :</span> In line with company
          policies, appraisals will be carried out at the discretion of
          management and based on your performance. You will receive at least
          one appraisal annually. Your career advancement will depend solely on
          your performance and professional behavior.
        </p>

        <div className="ds11"></div>
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i4" />
        <p className="let12">
          <span className="bol">7. TERMINATION OF EMPLOYMENT : </span>If you
          don’t abide by the rules and regulations that are mentioned in the
          code of conduct; then you can be terminated from the company. You
          cannot resign without the Resignation acceptance of the Company Head.
          Upon termination of your employment with Company, you must return all
          such notes/memoranda and every copy thereof to the company. You cannot
          leave the company without completing your notice period of 30 days, if
          you do so then, company can hold your 1-month salary upon absconding.
        </p>
        <p className="let13">
          <span className="bol" style={{ fontSize: "16px" }}>
            Terms of Termination :
          </span>
        </p>
        <p className="let14">
          i) In the event information furnished by you in your application for
          employment or during the selection process is found at any time during
          your employment to be incorrect or false, and/or if you have
          suppressed material information regarding.
        </p>
        <p className="let15">
          Your qualifications and experience, the Company reserves the right to
          terminate your services without notice or compensation.
        </p>
        <p className="let16">
          ii) In the event of leave of absence from work for a continuous period
          of 3 days without obtaining your manager’s approval, you will be
          deemed to have voluntarily terminated your service without notice.
        </p>
        <p className="let17">
          iii) You are required to provide 30 days’ notice prior to voluntary
          termination of employment. You agree to make best efforts to
          transition the responsibilities and client relationships in an orderly
          manner.
        </p>
        <p className="let18">
          iv) The company at any time during the employment/probation period may
          terminate the employment if the services rendered by you are not
          satisfactory to our management with or without prior notice.
        </p>
        <p className="let19">
          <span className="bol">8. POLICIES & GUIDELINES :</span> Your
          association and employment will be governed by the various Associate
          related policies and guidelines of the organization.
        </p>
        <p className="let20">
          i) As per the requirement of the organization there would be reference
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
        <p className="let21">
          ii) Your posting at present is at{" "}
          <span className="bol">PROTATHLITIS SPORTSMART LLP</span>. Hyderabad,
          India during your employment with this company, you may be posted or
          transferred to the other companies or else if you attached to any
          other Group Company or to any of the offices/ subsidiaries/units/
          associate offices of the company, to any town or city in India or
          abroad, at the sole discretion of the Management. While working in
          another company on transferred/ attached, you shall be entitled to
          emoluments and perks as applicable in transferred/ attached company
          and for all purposes you shall be deemed to be employed in the company
          transferred/ attached.
        </p>

        <div className="ds11"></div>
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i4" />
        <p className="let22">
          iii) During your service with the Company, you are expected to devote
          your whole time and Attention to the Company’s affairs and refrain
          from directly or indirectly engaging in any other business.
        </p>
        <p className="let23">
          iv) You are expected to deal with company’s money, material and
          documents with utmost honesty and professional ethics. Your service
          may be dispensed with any time without any prior notice if you are
          found guilty of gross indiscipline, fraud misappropriation or acting
          against the interest of the company.
        </p>
        <p className="let24">
          v) Upon your resignation or retirement from the Company or termination
          of your services, you are required to return all assets and property
          of the Company such as documents, laptop, phone, machines, data, files
          and books etc. (including but not limited to leased properties). Your
          final salary deposit will be released post receipt of the above
          assets.
        </p>
        <p className="let25">
          vi) Information pertaining to operations of{" "}
          <span className="bol">PROTATHLITIS SPORTSMART LLP</span>. is the
          intellectual property and is confidential, and you will sign a
          non-disclosure agreement. You will not give anyone, by word of mouth,
          writing, facsimile, email any devices or otherwise any particulars or
          details, which you acquire during your employment of our working
          systems, technical knowhow, security arrangements, Administrative and
          or organization matters of our and our clients whether confidential,
          secret or otherwise, either during your employment with Company or
          afterwards. If you are bound by a confidentiality agreement with a
          previous employer, you must notify the Company and indemnify the
          Company against any breach thereof.
        </p>
        <p className="let26">
          vii) The Company shall have the right to claim damages from you if you
          don’t return the assets and property of the Company within 4 Working
          days from the day of Resignation/Termination from your services.
        </p>
        <p className="let27">
          viii) The Employee shall not indulge in “Cyber Crimes against
          Persons”, “Cyber Crimes against Persons Property”, “and Cyber Crimes
          against Government”, “Cyber Crimes against Society at large” and “Case
          Study Attacks on Cyberspace”. If an employee is found guilty under any
          of the above-mentioned crimes, the employee shall be prosecuted as per
          Information Technology Act 2000, IT Amendment Act 2008, and other Acts
          as and when amended by Government of India.
        </p>
        <p className="let28">
          ix) You will abide by all the rules and regulations of the Company
          which are in force from time to time and the Company shall have the
          right to vary or modify any or all the above terms and conditions
          which shall be binding on you.
        </p>

        <div className="ds11"></div>
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i4" />
        <p className="let29">9. DOCUMENTS:</p>
        <p className="let30">
          You are requested to fulfill below mentioned joining formalities. Sign
          and date this job offer letter were indicated below. The following
          documents need to be submitted by you prior to your start date.
        </p>
        <p className="let31">
          1. Photo copy of All marksheets and educational certificates
        </p>
        <p className="let32">
          2. Photocopy of Passport/ Driving License/ Voter’s Identity Card
          (Anyone)
        </p>
        <p className="let33">3. Photocopy of PanCard</p>
        <p className="let34">
          4. Last Three (3) months’ Pay Slips/ Salary Slips from the previous
          employer.
        </p>
        <p className="let35">
          5. Experience Certificate/ Relieving Orders of previous companies
        </p>
        <p className="let36">6. Two (2) passport size photographs</p>
        <p className="let37">
          Congratulations and we welcome you to our organization. Good Luck!
        </p>
        <p className="let38">
          <span className="bol" style={{ fontSize: "15px" }}>
            Sincerely,
          </span>
        </p>
        <img src="./images/SM_image.png" alt="stamp" className="lett38" />
        <p className="let39">
          <span className="bol" style={{ fontSize: "15px" }}>
            Fatima Farooqui Firdous
          </span>
        </p>
        <p className="let40">
          <span className="bol" style={{ fontSize: "15px" }}>
            HR Manager
          </span>
        </p>
        <p className="let41">
          <span className="bol" style={{ fontSize: "15px" }}>
            hr@sportsmart.com
          </span>
        </p>
        <p className="let42">
          <span className="bol" style={{ fontSize: "15px" }}>
            +91- 9059445503
          </span>
        </p>
        <p className="let43">
          <span className="bol" style={{ fontSize: "15px" }}>
            Candidate Declaration :
          </span>
        </p>
        <p className="let44">
          I hereby declare and affirm that I have studied and understood the
          above terms and conditions of employment as described in this letter
          and accept the offer.
        </p>

        <p className="let45" style={{ fontWeight: "bold" }}>
          Sign:
        </p>
        <div className="let46"></div>
        <p className="let47" style={{ fontWeight: "bold" }}>
          Date: {Global.Offerform.date}
        </p>

        <div className="ds11"></div>
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
