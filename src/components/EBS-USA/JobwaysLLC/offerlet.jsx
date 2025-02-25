import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/job.png" alt="ewded" className="i4" />
        <p className="us1">EMPLOYMENT AGREEMENT</p>
        <p className="us2 cm">
          This Employment Agreement (“Agreement”) is made and entered into on
          <span className="bb"> {Global.USOffer.date}</span> between{" "}
          <span className="bb"> Jobways LLC </span>
          whose principal place of business is located at{" "}
          <span className="bb">38 The Green Ste R Dover, DE 19901 </span>
          hereinafter referred to as (“Employer”) and{" "}
          <span className="bb">{Global.USOffer.name}</span> (hereinafter
          referred to as “Employee”) with Social Security Number:{" "}
          <span className="bb">
            XXXX - XX - {Global.USOffer.socialSecurityNumber}.
          </span>
        </p>
        <p className="us3 cm">
          In consideration of the mutual covenants set forth below, Employer
          agrees to hire Employee and Employee agrees to work for Employer as
          set forth in this Agreement.
        </p>
        <p className="us4 cm">
          1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESCRIPTION OF
          DUTIES
        </p>
        <p className="us5 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Position
        </p>
        <p className="us6 cm">
          The Employee shall be employed in the capacity of:{" "}
          <span className="bbn">{Global.USOffer.position}</span>
        </p>
        <p className="us7 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Essential Job
          Functions and Duties
        </p>
        <p className="us8 cm">
          The essential job functions or duties of this position are as follows:
          <br />
          Analyze computer and business problems of existing and proposed
          systems as well as initiate and enable specific technologies that will
          maximize our company’s ability to deliver more efficient and effective
          technological and computer related solutions to our business clients
        </p>
        <p className="us9 cm">
          Employee shall also perform such other duties as are customarily
          performed by other persons in similar such positions, as well as such
          other duties as may be assigned from time to time by the Employer.
        </p>

        <p className="us10 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duty of Loyalty and
          Best Efforts
        </p>

        <p className="us11 cm">
          Employee shall devote all of his/her working time, attention,
          knowledge, and skills to Employer's business interests and shall do so
          in good faith, with best efforts, and to the reasonable satisfaction
          of the Employer. Employee understands that they shall only be entitled
          to the compensation, benefits, and profits as set forth in this
          Agreement. Employee agrees to refrain from any interest, of any kind
          whatsoever, in any business competitive to Employer’s business. The
          Employee further acknowledges they will not engage in any form of
          activity that produces a “conflict of interest” with those of the
          Employer unless agreed to in advance and in writing.
        </p>

        <div className="ds11"></div>
        <img src="./images/job.png" alt="ewded" className="i4" />

        <p className="us12 cm">
          D.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Place and Hours of
          Employment
        </p>

        <p className="us13 cm">
          Employee agrees that their duties shall be primarily rendered at
          Employer’s business premises or at such other places as the Employer
          shall in good faith require. Full time service for the Employee is
          expected which requires a minimum of 40 hours per week.
          <br />
          Duties rendered away from the Employer’s premises will not alter the
          nature of the employment relationship and Employee will remain under
          the supervision of Employer and subject to the Employer’s policies and
          procedures. Upon the completion of duties away from Employer’s
          premises, Employee shall report immediately back to Employer’s office
          for his subsequent assignment.
        </p>

        <p className="us14 cm">
          E.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Training and
          Processes
        </p>

        <p className="us15 cm">
          Employee shall conduct all work pursuant to Employer’s processes and
          procedures. Employee will be trained in all relevant processes prior
          to beginning assignments and projects. Employer may require adherence
          to particular procedures or processes that are specific to an
          assignment or project.
        </p>

        <p className="us16 cm">
          F.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Communication with
          Employer
        </p>

        <p className="us17 cm">
          If Employee is directed to render services away from Employer’s
          business premises, Employee shall send a report of hours and work
          performed back to Employer once per week. Employee will be required to
          maintain timesheets of worked performed at other premises and will
          provide the timesheets to Employer on weekly basis to
          timesheets@jobways.com / hr@jobways.com. Employer contact for such
          reporting is : Sudheer – 240-525-0547 / sudheer@jobways.com 
        </p>

        <p className="us18 cm">
          2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPENSATION TERMS
        </p>

        <p className="us19 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Base Compensation
        </p>

        <p className="us20 cm">
          Employee shall receive a salary of{" "}
          <span className="bb">{Global.USOffer.salary}k/Annum on W2</span>{" "}
          payable as per working hours in each month. Employer shall deduct or
          withhold from compensation any and all sums required for federal
          income and social security taxes, as well as all state or local taxes
          now applicable or that may become applicable to Employee or Employer
          in the future.
        </p>

        <p className="us21 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salary Adjustments
        </p>

        <p className="us22 cm">
          Salary adjustments are based on the value contributed by Employee to
          Employer. While salary adjustments are primarily based on merit,
          Employer may at times adjust salaries depending on overall company
          performance, and/or the cost-of-living changes to salaries of
          similarity started Employees in the company or industry.
        </p>

        <div className="ds11"></div>
        <img src="./images/job.png" alt="ewded" className="i4" />

        <p className="us23 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reimbursement of
          Business-Related Expenses
        </p>

        <p className="us24 cm">
          Employee may incur reasonable expenses while conducting the Employer’s
          business. The Employer shall reimburse the Employee for all
          pre-approved expenses upon submission of an itemized account with
          receipts, in accordance with the Employer's policy.
        </p>

        <p className="us25 cm">
          3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TERMINATION
        </p>

        <p className="us26 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“At Will” Employment
        </p>

        <p className="us27 cm">
          Employee’s employment with Employer is “at will.” “At will” is defined
          as allowing either Employee or Employer to terminate the Agreement at
          any time, for any reason permitted by law, with or without cause. In
          case you decide to resign with{" "}
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {Global.USOffer.clientCompany}
          </span>{" "}
          client and Company you will be required to give 3 weeks’ Notice to
          Jobways LLC. if not Jobways LLC. is not liable to pay the salary for a
          whole month.
        </p>

        <p className="us28 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Violation of
          Employment Terms
        </p>
        <p className="us29 cm">
          Employee should join{" "}
          <span className="bb" style={{ textTransform: "uppercase" }}>
            {Global.USOffer.clientCompany}
          </span>{" "}
          client and for a given start date{" "}
          <span className="bb">{Global.USOffer.startDate}</span>, if not agrees
          to pay the damage fee as mentioned in non-Solicitation clause. Should
          the Employee contravene the Employer's policies and procedures, then
          the Employee will be disciplined accordingly and this Agreement could
          be terminated immediately. Consultant acknowledges that the breach
          will result in irreparable harm and continuing damages to Jobways LLC
          Business relations with clients and remedy at law for any such breach
          or threatened breach would lead to a penalty of 30% of billing amount
          for the duration of project if consultant is taking the project with
          other vendor with same client or backing out after confirmation of
          project and $10,000 penalty if consultant backs out before
          confirmation or if marketing their resumes simultaneously with other
          Employers and after taking the interview
        </p>

        <p className="us30 cm">
          4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NON-SOLICITATION
        </p>
        <p className="us31 cm">
          Employee agree he/she shall not directly or indirectly solicit for
          employment with Jobways LLC client and or through any other supplier
          forJobways LLC client and for the duration of contract with client and
          for (1) year after the termination of this agreement, if Employee
          breaches non-Solicit clause, then he will have pay Damage fee of
          $10,000 as the hiring fee for Jobways LLC Solutions Inc.
          <br />
          Consultant accepts opportunity within 90 days of agreement signed
          through other source will cause damage to Jobways LLC time and
          services will have to pay damage fee of $1000 as the service fee for
          Jobways LLC.
          <br />
        </p>

        <div className="ds11"></div>
        <img src="./images/job.png" alt="ewded" className="i4" />

        <p className="us32 cm">
          Consultant soliciting Jobways LLC client for interviewed & confirmed
          project through other vendor will have to pay 30% of the billing
          amount for duration of that project
        </p>

        <p className="us33 cm">
          5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COVENANTS
        </p>

        <p className="us34">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non-Disclosure of Trade Secrets,
          Customer Lists and Other Proprietary Information
        </p>

        <p className="us35 cm">
          Employee agrees not to use, disclose or communicate, in any manner,
          proprietary information about Employer, its operations, clientele, or
          any other proprietary information, that relate to the business of
          Employer. This includes, but is not limited to, the names of
          Employer’s customers, its marketing strategies, operations, or any
          other information of any kind which would be deemed confidential or
          proprietary information of Employer. Employee acknowledges that the
          above information is material and confidential and that it affects the
          profitability of Employer. Employee understands and that any breach of
          this provision, or of any other Confidentiality and Non-Disclosure
          Agreement, is a material breach of this Agreement.
        </p>

        <p className="us36 cm">
          To the extent Employee feels that they need to disclose confidential
          information, they may do so only after being authorized to so do in
          writing by Employer.
        </p>

        <p className="us37 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adherence to
          Employer's Policies, Procedures, Rules and Regulations
        </p>

        <p className="us38 cm">
          Employee agrees to adhere by all of the policies, procedures, rules
          and regulations set forth by the Employer. These policies, procedures,
          rules and regulations include, but are not limited to, those set forth
          within the Employee Handbook, any summary benefit plan descriptions,
          or any other personnel practices or policies or Employer. To the
          extent that Employer’s policies, procedures, rules and regulations
          conflict with the terms of this Agreement, the specific terms of this
          Agreement will control. Singing this agreement will confirm that you
          will join the project with Jobways LLC client and through Jobways LLC.
          and will not go directly or join Jobways LLC client and with other
          staffing or consulting firm until the duration of the contract.
        </p>

        <p className="us39 cm">
          C.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Safety
        </p>

        <p className="us40 cm">
          Employee shall, at all times abide by the safety rules, regulations
          and working conditions of the Employer and maintain the highest
          standard of professionalism and workmanship in accordance with
          Employer’s policy.
        </p>

        <div className="ds11"></div>
        <img src="./images/job.png" alt="ewded" className="i4" />

        <p className="us41 cm">
          D.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance
          Standards
        </p>

        <p className="us42 cm">
          If the Employee not perform his/her duties as described above and/or
          not meet the requirements and standards of the Employer, the Employer
          may terminate the contract with immediate effect and the Employee will
          be remunerated for the hours that he/she has worked.
        </p>

        <p className="us43 cm">
          6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROPERTY RIGHTS
        </p>

        <p className="us44 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Records and Accounts
        </p>

        <p className="us45 cm">
          Employee agrees that all those records and accounts maintained during
          the course of employment are the property of Employer, shall remain
          current and be maintained at Employer’s place of business.
        </p>

        <p className="us46 cm">
          B.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return upon
          Termination
        </p>

        <p className="us47 cm">
          Employee agrees that upon termination they will return to Employer all
          of Employer’s property, including, but not limited to, intellectual
          property, trade secret information, customer lists, operation manuals,
          Employee handbook, equipment (laptop, software, cell phone), records
          and accounts, materials subject to copyright, trademark, or patent
          protection, customer and Employer information, credit cards, business
          documents, reports, automobiles, keys, passes, and security devices.{" "}
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
          Employee hereby agrees to indemnify, defend, save, and hold harmless
          Employer, its shareholders, officers, directors, and other agents
          (other than Employee) from and against all claims, liabilities, causes
          of action, damages, judgments, attorneys’ fees, court costs, and
          expenses which arise out of or are related to the Employee’s
          performance of this Agreement, failure to perform job functions or
          duties as required, or result form conduct while engaging in any
          activity outside the scope of this Agreement, before, during or after
          the termination of this Agreement. Employee understands that this
          obligation of indemnification survives the expiration or termination
          of this Agreement.
        </p>

        <div className="ds11"></div>
        <img src="./images/job.png" alt="ewded" className="i4" />
        <p className="us52 cm">
          8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXCLUSIVITY
        </p>

        <p className="us53 cm">
          Consultant agrees to give exclusivity to market their profile and will
          not have their profiles marketed through other vendor during this
          term, if consultant is found being marketing with other vendors during
          this period consultant agrees to pay $10,000 penalty for expenses for
          having a marketing team work on their profile.
        </p>

        <p className="us54 cm">
          9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MISCELLANEOUS
          PROVISIONS
        </p>

        <p className="us55 cm">
          A.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entire Agreement
        </p>

        <p className="us56 cm">
          This Agreement represents the complete and exclusive statement of the
          employment agreement between the Employer and Employee. No other
          agreements, covenants, representations or warranties, express or
          implied, oral or written, have been made by the parties concerning
          their employment agreement.
        </p>
        <p className="us57a cm">Sincerely,</p>
        <p className="us57 cm"> Sudheer Panyam </p>
        <p className="us58 cm">HR Manager</p>
        <p className="us59 cm"> hr@jobways.com</p>
        <p className="us60 cm">Ph : 240 525 0547</p>
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

const Jobwaysllcoffer = () => {
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

export default Jobwaysllcoffer;
