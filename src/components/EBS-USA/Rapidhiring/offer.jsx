import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";
import "./ra.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/rnew3.png" alt="ewded" className="i4" />
        <p className="us1">EMPLOYMENT AGREEMENT</p>
        <p className="us2 cm">
          This Employment Agreement ("Agreement") commences and becomes
          effective on <span className="bb">{Global.USOffer.date}</span>, by and
          between <span className="bb">Rapid Hiring Solutions Inc,</span>{" "}
          situated at{" "}
          <span className="bb">
            3000 Atrium Way Suite 200, Mt. Laurel, NJ 08054
          </span>{" "}
          (hereafter referred to as the "Employer"), and{" "}
          <span className="bb">{Global.USOffer.name}</span> (hereafter referred
          to as the "Employee"), identified by Social Security Number:{" "}
          <span className="bb">
            XXX-XX-{Global.USOffer.socialSecurityNumber}
          </span>
          .
        </p>
        <p className="us3 cm">
          In recognition of the mutual promises detailed herein, the Employer
          agrees to engage the Employee, and the Employee commits to performing
          their duties for the Employer in accordance with the terms outlined in
          this Agreement.
        </p>
        <p className="use4 cm">
          1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DUTY DESCRIPTION
        </p>
        <p className="us5 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Position Title
        </p>
        <p className="us6 cm">
          The Employee's Employment Title:{" "}
          <span className="bbn">{Global.USOffer.position}</span>
        </p>
        <p className="us7 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job Responsibilities
          and Duties
        </p>
        <p className="us8 cm">
          The essential responsibilities and tasks for this position are:
          <br />
          - Evaluating technical and business challenges in existing and
          prospective systems.
          <br />
          - Implementing and promoting specialized technologies to augment our
          company's ability to deliver more efficient and effective
          technological solutions to our clients.
          <br />- Collaborating with cross-functional teams to understand client
          needs and provide tailored solutions.
          <br />
          -Conducting regular system audits to ensure compliance with industry
          standards and maintaining security protocols.
        </p>
        <p className="us9 cm"></p>

        <p className="us10 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obligation of
          Loyalty and Maximum Effort
        </p>

        <p className="us11 cm">
          The Employee is obligated to commit their entire work time, focus,
          abilities, and efforts to promote the business interests of the
          Employer. This commitment must be made in good faith, with the highest
          level of diligence, and to the satisfaction of the Employer. The
          Employee accepts that their eligibility for salary, benefits, and
          profits is strictly as defined in this Agreement. Moreover, the
          Employee is to avoid any engagement, in any form, with any venture
          that is in competition with the Employer’s business. Additionally, the
          Employee agrees not to engage in any activities that could constitute
          a conflict of interest with the Employer, unless such activities are
          explicitly sanctioned in advance through a written agreement.
          <br />
          <br />
        </p>

        <div className="ds11"></div>
        <img src="./images/rnew3.png" alt="ewded" className="i4" />

        <p className="us12 cm">
          D.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Location and
          Working Hours
        </p>

        <p className="us13 cm">
          The Employee consents to perform their responsibilities predominantly
          at the Employer’s office or at alternate locations as deemed necessary
          by the Employer. The Employee is expected to work full-time, totaling
          at least 40 hours per week.
          <br />
          While working off-site, the terms of employment remain consistent,
          with the Employee continuing to fall under the Employer’s supervision
          and adhering to all company policies and procedures. Upon completion
          of off-site duties, the Employee must swiftly return to the Employer’s
          office to receive their subsequent assignment. Additionally, the
          Employee must promptly report any off-site issues or delays to
          maintain workflow and transparency.
        </p>

        <p className="us14 cm">
          E.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learning and
          Procedures
        </p>

        <p className="us15 cm">
          The Employee is required to adhere to all the Employer's established
          procedures and protocols. Prior to beginning any assignments or
          projects, they will be trained on the pertinent processes.
          Additionally, the Employer may mandate compliance with particular
          procedures or processes for specific assignments or projects.
        </p>

        <p className="us16 cm">
          F.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interaction with
          Employer
        </p>

        <p className="us17 cm">
          Should the Employee be directed to render services outside the
          Employer's premises, they are required to provide a weekly report that
          includes the hours worked and tasks accomplished. The Employee must
          keep accurate timesheets for all off-site work and submit these to the
          Employer weekly via email at timesheets@rpdhsinc.com or
          hr@rpdhsinc.com. For any questions related to this reporting
          procedure, the Employee can contact Amith Chidre at 567 703 6317 /
          amith@rpdhsinc.com
        </p>

        <p className="us18 cm">
          2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAYMENT CONDITIONS
        </p>

        <p className="us19 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Base Compensation
        </p>

        <p className="us20 cm">
          The Employee will be compensated an annual salary of{" "}
          <span className="bb">{Global.USOffer.salary}k/Annum</span> on a W2
          basis, distributed based on monthly working hours. The Employer will
          deduct or withhold from the salary any required amounts for federal
          income and social security taxes, along with any applicable state or
          local taxes, both now and in the future.
        </p>

        <p className="us21 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salary Modifications
        </p>

        <p className="us22 cm">
          Salary adjustments are influenced by the value the Employee
          contributes to the Employer. Primarily merit-based, these adjustments
          may also take into account the overall company performance and/or
          shifts in the cost of living, alongside comparisons to the salaries of
          similarly positioned Employees within the company or the industry.
          <br />
          <br />
        </p>

        <div className="ds11"></div>
        <img src="./images/rnew3.png" alt="ewded" className="i4" />

        <p className="us23 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Business Expense
          Reimbursement"
        </p>

        <p className="us24 cm">
          The Employer will reimburse the Employee for legitimate, pre-approved
          expenses upon submission of a detailed expense report with receipts,
          according to the Employer's reimbursement policy.
        </p>

        <p className="us25 cm">
          3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TERMINATION
        </p>

        <p className="us26 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employment at Will
        </p>

        <p className="us27 cm">
          The Employee's relationship with the Employer is "at will," which
          allows either party to end the employment at any time, for any legally
          permissible reason, with or without cause. Should you decide to resign
          from{" "}
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {Global.USOffer.clientCompany}
          </span>
          , you are required to provide a three-week notice to Rapid Hiring
          Solutions Inc. Failure to comply with this notice period may lead to
          Rapid Hiring Solutions Inc. withholding your salary for the entire
          month.Additionally, termination of employment by either party must be
          communicated in writing to ensure proper documentation.
        </p>

        <p className="us28 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Violation of
          Employment Terms
        </p>
        <p className="us29 cm">
          The Employee is required to commence work at{" "}
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {Global.USOffer.clientCompany}
          </span>{" "}
          by the designated start date of{" "}
          <span className="bb">{Global.USOffer.startDate}</span>. Failure to
          start on this date will obligate the Employee to pay the damages
          specified in the non-solicitation clause. Violations of the Employer's
          policies and procedures could lead to disciplinary actions, including
          the immediate termination of this Agreement. The consultant recognizes
          that such violations would result in significant and ongoing harm to
          Rapid Hiring Solutions' business relations with clients. The penalties
          for these breaches include a fee of 30% of the billing amount for the
          duration of the project if the consultant engages with another vendor
          for the same client, or $10,000 if the consultant withdraws prior to
          project confirmation or markets their resume to multiple Employers
          following an interview.Moreover, consistent adherence to these
          conditions is critical for maintaining trust and professionalism in
          the Employee's relationship with Rapid Hiring Solutions and its
          clients.
        </p>

        <p className="us30 cm">
          4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NON-SOLICITATION
        </p>
        <p className="us31 cm">
          The Employee agrees not to seek employment directly or indirectly with
          any of Rapid Hiring Solutions' clients, or through any other entity
          supplying Rapid Hiring Solutions' clients, for the duration of the
          contract and for one year following its termination. Should the
          Employee violate this non-solicitation clause, they will be required
          to pay a damage fee of $10,000 to Rapid Hiring Solutions Inc. as
          compensation for the hiring fee.
          <br />
          <br />
          Furthermore, if the consultant secures a position from another source
          within 90 days of signing this agreement, thereby causing harm to
          Rapid Hiring Solutions' invested time and services, they will be
          liable to pay a damage fee of $1000 to Rapid Hiring Solutions Inc. as
          compensation for the service fee.
          <br />
        </p>

        <div className="ds11"></div>
        <img src="./images/rnew3.png" alt="ewded" className="i4" />

        <p className="us32 cm">
          A consultant who solicits Rapid Hiring Solutions' client for an
          interviewed and confirmed project through another vendor will be
          responsible for paying 30% of the billing amount for the duration of
          that project.
        </p>

        <p className="us33 cm">
          5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGREEMENTS
        </p>

        <p className="us34">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confidentiality Agreement
          Regarding Trade Secrets and Customer Lists
        </p>

        <p className="us35 cm">
          The Employee agrees not to use, disclose, or communicate any
          proprietary information about the Employer, its operations, client
          base, or any other details deemed confidential related to the
          Employer's business. This includes, but is not limited to, the names
          of the Employer's clients, marketing strategies, and operational
          processes. The Employee recognizes that such information is crucial
          and confidential, significantly affecting the Employer’s
          profitability. Furthermore, the Employee understands that any breach
          of this confidentiality clause or any related non-disclosure agreement
          represents a substantial violation of this agreement.
          <br />
          <br />
          Violating this confidentiality agreement could lead to legal
          repercussions and damage the Employer’s competitive position in the
          industry. It is imperative that the Employee adheres strictly to these
          guidelines to safeguard the sensitive information that contributes to
          the strategic advantage of the Employer.
        </p>

        <p className="us37 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adherence to
          Employer's Policies, Procedures, Rules, and Regulations
        </p>

        <p className="us38 cm">
          The Employee agrees to comply with all policies, procedures, rules,
          and regulations set forth by the Employer. These include, but are not
          limited to, those detailed in the Employee Handbook, any benefit plan
          summaries, or any other personnel practices or policies implemented by
          the Employer. Should any discrepancies arise between the Employer’s
          policies, procedures, rules, and regulations and the terms of this
          agreement, the stipulations of this agreement will prevail. By signing
          this agreement, you confirm your commitment to undertake the project
          with Rapid Hiring Solutions' client solely through Rapid Hiring
          Solutions Inc., and agree not to join or engage with Rapid Hiring
          Solutions' client through any other staffing or consulting firm for
          the duration of the contract.
        </p>

        <p className="us39 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Safety
        </p>

        <p className="us40 cm">
          The Employee must consistently comply with the safety rules,
          regulations, and working conditions set by the Employer. Furthermore,
          they are expected to maintain the highest standards of professionalism
          and workmanship, as detailed in the Employer’s policies.
          <br />
          <br />
          This compliance not only ensures a safe and efficient workplace but
          also enhances the overall quality of work and reputation of the
          organization. Regular training and updates on these standards will be
          provided to ensure that all Employees remain informed and compliant.
        </p>

        <div className="ds11"></div>
        <img src="./images/rnew3.png" alt="ewded" className="i4" />

        <p className="us41 cm">
          D.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance
          Expectations
        </p>

        <p className="us42 cm">
          If the Employee fail to fulfill their responsibilities as outlined
          above, or if they do not meet the Employer's established requirements
          and standards, the Employer retains the right to terminate the
          contract immediately. In this event, the Employee will be compensated
          for the hours worked up to the termination.
        </p>

        <p className="us43 cm">
          6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROPERTY RIGHTS
        </p>

        <p className="us44 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Record-Keeping and
          Accounting
        </p>

        <p className="us45 cm">
          The Employee acknowledges that all records and accounts created during
          their employment are the property of the Employer. These records must
          be kept up-to-date and stored at the Employer's business premises.
        </p>

        <p className="us46 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return upon
          Termination
        </p>

        <p className="us47 cm">
          Upon termination, the Employee agrees to return all of the Employer’s
          property. This includes, but is not limited to, intellectual property,
          trade secrets, customer lists, operational manuals, the Employee
          handbook, equipment (such as laptops, software, cell phones), records
          and accounts, materials protected by copyright, trademark, or patent
          laws, customer and Employer information, credit cards, business
          documents, reports, company vehicles, keys, passes, and security
          devices.
        </p>

        <p className="us48 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyrights,
          Inventions and Patents
        </p>

        <p className="us49 cm">
          Employee understands that any copyrights, inventions or patents
          created or obtained, in part or whole, by Employee during the course
          of this Agreement are to be considered “works for hire” and the
          property of Employer. Employee assigns to Employer all rights and
          interest in any copyright, invention, patents or other property
          related to the business of the Employer.
        </p>

        <p className="us50 cm">
          7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDEMNIFICATION FOR
          THIRD PARTY CLAIMS
        </p>

        <p className="us51 cm">
          The Employee agrees to indemnify, defend, and hold harmless the
          Employer, its shareholders, officers, directors, and other agents
          (excluding the Employee) from and against all claims, liabilities,
          causes of action, damages, judgments, attorneys' fees, court costs,
          and expenses that arise from or are related to the Employee's
          performance of this agreement, failure to perform required job
          functions or duties, or result from conduct while engaging in
          activities outside the scope of this agreement, whether before,
          during, or after the termination of this agreement. The Employee
          understands that this obligation to indemnify survives the expiration
          or termination of this agreement.
        </p>

        <div className="ds11"></div>
        <img src="./images/rnew3.png" alt="ewded" className="i4" />
        <p className="us52 cm">
          8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXCLUSIVITY
        </p>

        <p className="us53 cm">
          The consultant agrees to grant exclusive rights to market their
          profile and will not have their profiles marketed through any other
          vendor during this term. If the consultant is found to be marketed by
          other vendors during this period, they agree to pay a $10,000 penalty
          to cover the expenses incurred by having a marketing team work on
          their profile.
        </p>

        <p className="us54 cm">
          9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MISCELLANEOUS
          PROVISIONS
        </p>

        <p className="us55 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entire Agreement
        </p>

        <p className="us56 cm">
          This Agreement constitutes the complete and exclusive statement of the
          employment relationship between the Employer and the Employee. There
          are no other agreements, covenants, representations, or warranties,
          either express or implied, oral or written, made by the parties
          regarding their employment relationship.
        </p>
        <p className="us57a cm">Sincerely,</p>
        <p className="us57 cm"> Amith Chidre </p>
        <p className="us58 cm">HR Manager</p>
        <p className="us59 cm"> hr@rpdhsinc.com</p>
        <p className="us60 cm">Ph : 567 703 6317</p>
        <p className="us61 cm"> Candidate Declaration :</p>
        <p className="us62 cm">
          {" "}
          I hereby declare and affirm that I have studied and understood the
          above terms and conditions of employment as described in this geneter
          and accept the offer.
        </p>
        <p className="us63 cm"> Sign:____________________</p>
        <p className="us64 cm"> Date: {Global.USOffer.date} </p>
        <div className="ds11"></div>
      </div>
    </div>
  );
});

const Rapidhiringoffer = () => {
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

export default Rapidhiringoffer;
