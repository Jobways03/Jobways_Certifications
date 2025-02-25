import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";
import "./ka.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/kacee.png" alt="ewded" className="i4" />
        <p className="usk1">EMPLOYMENT AGREEMENT</p>
        <p className="usk2 cm">
          This Employment Contract ("Contract"), effective as of A
          <span className="bb"> {Global.USOffer.date}</span>, is entered into by
          and between{" "}
          <span className="bb">Kacee Technologies services Inc</span>, with a
          principal office located at{" "}
          <span className="bb">17 Dillon Dr, Dix Hills, NY 11746</span> ("the
          Company"), and <span className="bb">{Global.USOffer.name}</span>("the
          Employee") with Social Security Number:{" "}
          <span className="bb">
            XXXX - XX - {Global.USOffer.socialSecurityNumber}
          </span>
          .Upon acknowledging the mutual commitments outlined herein, the
          Employer undertakes to engage the services of the Employee, who
          reciprocally commits to rendering their services to the Employer in
          accordance with the terms delineated in this Agreement.
        </p>

        <p className="usk3 cm">Article I : Engagement and Responsibilities</p>
        <p className="usk4 cm">1 . Engagement</p>
        <p className="usk5 cm">
          The Employee agrees to be employed on an at-will basis, which allows
          either party to terminate the relationship at any time without cause,
          subject to applicable laws and regulations.
        </p>
        <p className="usk6 cm">2 . Title</p>
        <p className="usk7 cm">
          The Employee will hold the title of{" "}
          <span className="bbn">{Global.USOffer.position}</span>, tasked with
          significant responsibilities that contribute to the Company’s goals.
        </p>
        <p className="usk8 cm">3 . Primary Duties</p>

        <p className="usk9 cm">
          The Employee will analyze, design, and enhance both business and
          technological processes, aiming to improve the Company’s efficiency
          and effectiveness. This role also includes performing tasks comparable
          to those of similar positions within the industry and any additional
          duties that may be assigned by the Company periodically.
        </p>

        <div className="ds11"></div>
        <img src="./images/kacee.png" alt="ewded" className="i4" />

        <p className="usk10 cm">4 . Dedication</p>

        <p className="usk11 cm">
          The Employee is expected to dedicate their professional skills and
          working hours entirely to the Company, ensuring all actions taken
          align with the Company’s strategic interests and ethical standards.
        </p>

        <p className="usk12 cm">
          Article II : Place of Performance and Work Hours
        </p>

        <p className="usk13 cm">1 . Location</p>

        <p className="usk14 cm">
          The primary location for performance of duties will be at the
          Company's premises, with occasional requirements to work offsite as
          directed by the Company.
        </p>

        <p className="usk15 cm">2 . Hours</p>

        <p className="usk16 cm">
          The Employee is expected to work a minimum of 40 hours per week. This
          schedule may be extended depending on project requirements and
          deadlines, which will be communicated in advance.
        </p>

        <p className="usk17 cm">3 . Remote Work Reporting</p>

        <p className="usk18 cm">
          If the Employee works remotely, they must adhere to strict reporting
          protocols by submitting detailed weekly reports to the designated
          company contacts outlining hours worked and tasks completed.
        </p>

        <p className="usk19 cm">Article III : Compensation and Benefits</p>

        <p className="usk20 cm">1 . Salary</p>

        <div className="ds11"></div>
        <img src="./images/kacee.png" alt="ewded" className="i4" />

        <p className="usk21 cm">
          The Employee shall receive a salary of{" "}
          <span className="bb">{Global.USOffer.salary}k/Annum on W2</span>,
          payable in monthly installments, subject to standard deductions for
          federal, state, and local taxes.
        </p>

        <p className="usk22 cm">2 . Merit Reviews</p>

        <p className="usk23 cm">
          The Company will conduct annual performance reviews which may lead to
          salary adjustments based on the Employee's contributions to the
          Company, prevailing financial conditions of the Company, and market
          trends.
        </p>

        <p className="usk24 cm">3 . Reimbursable Expenses</p>

        <p className="usk25 cm">
          The Employee will be entitled to reimbursement for reasonable,
          documented expenses incurred while performing duties, provided these
          expenses are pre-approved by the Company in accordance with its
          expense policy.
        </p>

        <p className="usk26 cm">Article IV : Violation of Employment Terms</p>

        <p className="usk27 cm">1 . Employment Commencement and Compliance</p>

        <p className="usk28 cm">
          The Employee must start work at{" "}
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {Global.USOffer.clientCompany}
          </span>{" "}
          by <span className="bb">{Global.USOffer.startDate}</span>, or pay
          specified damages. Violating policies may lead to immediate
          termination and harm Rapid Hiring Solutions’ client relations.
          Penalties include 30% of the billing amount if engaging with another
          vendor for the same client, and $10,000 if withdrawing before project
          confirmation or marketing the resume to multiple Employers
          post-interview. Adherence to these conditions is essential for
          maintaining trust and professionalism.
        </p>

        <p className="usk29 cm">2 . Notice Requirement</p>

        <div className="ds11"></div>
        <img src="./images/kacee.png" alt="ewded" className="i4" />

        <p className="usk30 cm">
          If the Employee decides to resign, a notice period of three weeks must
          be provided if engaged with a client from
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.USOffer.clientCompany}
          </span>
          . Failure to provide such notice could lead to forfeiture of a month's
          salary.
        </p>

        <p className="usk31 cm">3 . At-Will Termination</p>

        <p className="usk32 cm">
          Employment at the Company is at-will, permitting either the Employee
          or the Company to terminate the agreement at any time for any lawful
          reason, or for no reason, with or without prior notice.
        </p>

        {/* <p className="usk27 cm">1 . At-Will Termination</p>

        <p className="usk28 cm">
          Employment at the Company is at-will, permitting either the Employee
          or the Company to terminate the agreement at any time for any lawful
          reason, or for no reason, with or without prior notice.
        </p>

        <p className="usk29 cm">2 . Notice Requirement</p>

        <div className="ds11"></div>
        <img src="./images/kacee.png" alt="ewded" className="i4" />

        <p className="usk30 cm">
          If the Employee decides to resign, a notice period of three weeks must
          be provided if engaged with a client from
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.USOffer.clientCompany}
          </span>
          . Failure to provide such notice could lead to forfeiture of a month's
          salary.
        </p>

        <p className="usk31 cm">3 . Penalties for Contract Breach</p>

        <p className="usk32 cm">
          Any failure to comply with the start date or engaging in prohibited
          activities such as working with competitors or violating non-compete
          clauses will result in substantial financial penalties outlined in the
          subsequent sections.
        </p> */}

        <p className="usk33 cm">Article V : Non-Compete and Confidentiality</p>

        <p className="usk34 cm">1 . Non-Solicitation</p>

        <p className="usk35 cm">
          The Employee agrees not to engage in or initiate contact with the
          Company’s clients for the purpose of employment or service provision
          for a duration of one year following the termination of this Contract.
        </p>

        <p className="usk36 cm">2 . Protection of Confidential Information</p>

        <p className="usk37 cm">
          The Employee is entrusted with confidential and proprietary
          information and agrees not to disclose such information outside the
          Company. This includes, but is not limited to, business strategies,
          client information, operational practices, and marketing strategies.
        </p>

        <p className="usk38 cm">
          Article VI : Property Rights and Intellectual Property
        </p>

        <div className="ds11"></div>
        <img src="./images/kacee.png" alt="ewded" className="i4" />

        <p className="usk39 cm">1 . Company Property</p>

        <p className="usk40 cm">
          All materials, records, accounts, and physical property provided to
          the Employee during their tenure are the property of the Company and
          must be returned in good condition upon termination of employment.
        </p>

        <p className="usk41 cm">2 . Intellectual Property</p>

        <p className="usk42 cm">
          Innovations, inventions, copyrights, or patents developed by the
          Employee in connection with their employment are considered 'works
          made for hire' and remain the exclusive property of the Company.
        </p>

        <p className="usk43 cm">
          Article VII : Indemnification and Legal Obligations
        </p>

        <p className="usk44 cm">1 . Indemnification</p>

        <p className="usk45 cm">
          The Employee agrees to defend, indemnify, and hold harmless the
          Company from any claims, liabilities, or expenses arising from acts of
          misconduct or non-compliance with the terms of this Contract.
        </p>

        <p className="usk46 cm">2 . Safety and Compliance</p>

        <p className="usk47 cm">
          The Employee commits to following all safety guidelines and compliance
          regulations set forth by the Company to maintain a safe and healthy
          work environment.
        </p>

        <p className="usk46a cm">3 . Legal Compliance</p>

        <p className="usk47a cm">
          The Employee is expected to comply with all applicable laws and
          regulations in the performance of their duties. This includes
          adherence to data protection laws, confidentiality agreements, and
          industry regulations specific to the technology and business sectors.
        </p>

        <p className="usk48 cm">Article VIII : Exclusive Marketing Rights</p>

        <p className="usk49 cm">1 . Profile Marketing</p>
        <p className="usk50 cm">
          During the term of this Agreement, the Employee agrees to exclusive
          marketing of their professional profile through the Company. Violation
          of this term results in a penalty fee of $10,000.
        </p>

        <p className="usk49a cm">1 . Non-Compete Duration</p>
        <p className="usk50a cm">
          The exclusivity clause regarding the marketing of the Employee’s
          professional profile will remain in effect throughout the duration of
          the employment and for twelve months following the termination or
          conclusion of employment, to protect the Company’s business interests.
        </p>

        <p className="usk51 cm">Article IX : Miscellaneous</p>

        <p className="usk52 cm">1 . Full Agreement</p>

        <p className="usk53 cm">
          This document represents the complete and exclusive understanding
          between the Employee and the Employer regarding the terms of
          employment, superseding any prior discussions, agreements, or
          representations.
        </p>

        <p className="usk54 cm">2 . Amendment</p>
        <p className="usk55 cm">
          Any amendments to this Contract must be made in writing and signed by
          both parties, ensuring mutual agreement on any changes to the terms.
        </p>

        <p className="usk54a cm">3 . Read and Understood:</p>
        <p className="usk55a cm">
          By signing this Contract, the Employee acknowledges that they have
          read and understood all terms and conditions outlined herein. The
          Employee affirms their commitment to fulfilling their role according
          to the highest professional standards and in alignment with the
          Company’s strategic objectives.
        </p>
        <p className="usk57a cm">Sincerely,</p>
        <p className="usk57 cm">Akbar Khan</p>
        <p className="usk58 cm">HR Manager</p>
        <p className="usk59 cm">hr@kaceetek.com</p>
        <p className="usk60 cm">Ph : (530) 712-3815</p>

        <p className="usk61 cm"> Candidate Declaration :</p>
        <p className="usk62 cm">
          {" "}
          I hereby declare and affirm that I have studied and understood the
          above terms and conditions of employment as described in this geneter
          and accept the offer.
        </p>
        <p className="usk63 cm"> Sign:____________________</p>
        <p className="usk64 cm"> Date: {Global.USOffer.date} </p>

        <div className="ds11"></div>
      </div>
    </div>
  );
});

const Kaceeoffer = () => {
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

export default Kaceeoffer;
