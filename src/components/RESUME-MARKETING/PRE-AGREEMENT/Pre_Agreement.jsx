import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";
import "./JobwaysAgreement.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const f = Global.ServiceFeeForm || {};

  const dateText = f.date || "[Date]";
  const nameText = f.name || "[Name]";
  const ssnText = f.ssnLast4 ? `XXX-XX-${f.ssnLast4}` : "XXX-XX-[XXXX]";
  const roleText = f.role || "[Title]";

  const totalFeeText = f.totalServiceFee || "15,000";
  const totalAdvanceText = f.totalAdvancePayment || "1,000";
  const firstAdvanceText = f.firstAdvancePayment || "500";
  const secondAdvanceText = f.secondAdvancePayment || "500";
  const dueText = f.duePayments || "14,000";
  const refundText = (Number(f.totalAdvancePayment || 1000) * 0.5).toFixed(0);

  return (
    <div ref={ref}>
      <div className="jwrmsp_pdf">
        {/* ================= PAGE 1 ================= */}
        <div className="jwrmsp_page">
          <img
            src="./images/Jobways_RMS.jpg"
            alt="Jobways"
            className="jwrmsp_bg"
          />

          <p className="jwrmsp_t2">
            JOBWAYS RESUME MARKETING SERVICE AGREEMENT
          </p>

          <p className="jwrmsp_t3">
            This Resume Marketing Service Agreement (“Agreement”) is made and
            entered into on <span className="jwrmsp_bold">{dateText}</span>,
            between Jobways LLC, having its principal place of business at 8 The
            Green, STE R, Dover, DE 19901 (hereinafter referred to as the
            “Service Provider” or “Employer”), and{" "}
            <span className="jwrmsp_bold">{nameText}</span> with Social
            Insurance Number: <span className="jwrmsp_bold">{ssnText}</span>.
          </p>

          <p className="jwrmsp_t4">
            In consideration of the mutual covenants set forth herein, the
            Service Provider agrees to provide Resume Marketing Services along
            with post-placement training and job support, and the Candidate
            agrees to avail the same and fulfill the payment and participation
            obligations as specified in this Agreement.
          </p>

          <p className="jwrmsp_t5">
            <span className="jwrmsp_bold">1. DESCRIPTION OF SERVICES</span>
          </p>
          <p className="jwrmsp_t6">
            <span className="jwrmsp_bold">A. Service Category</span>
          </p>

          <p className="jwrmsp_t7">
            The Candidate is enrolling for Resume Marketing Services for the
            role of <span className="jwrmsp_bold">{roleText}</span> (or as
            mutually agreed based on the Candidate’s profile and goals). Jobways
            will market the Candidate&apos;s resume to potential employers and
            staffing partners. Upon placement, the Candidate will receive
            structured post-placement training and job support for smooth
            onboarding and performance.
          </p>

          <p className="jwrmsp_t8">
            <span className="jwrmsp_bold">
              B. Scope of Training and Job Support Services
            </span>
          </p>
          <p className="jwrmsp_t9">
            1. Training will commence after placement, tailored to the job role.
          </p>
          <p className="jwrmsp_t10">
            2. Includes real-time tasks, tools, and workflows.
          </p>
          <p className="jwrmsp_t11">
            3. Two (2) months of job support, up to two hours daily on working
            days only.
          </p>
          <p className="jwrmsp_t12">
            4. Support includes guidance, technical assistance, and performance
            coaching.
          </p>

          {/* moved part of section 2 to page 1 to reduce gaps */}
          <p className="jwrmsp_t13">
            <span className="jwrmsp_bold">
              2. SERVICE FEE AND PAYMENT TERMS
            </span>
          </p>
          <p className="jwrmsp_t14">
            <span className="jwrmsp_bold">A. Total Service Fee</span>
          </p>
          <p className="jwrmsp_t15">
            Total service fee for Resume Marketing Placement Services:
            <span className="jwrmsp_bold"> ${totalFeeText} USD</span>.
          </p>

          <p className="jwrmsp_t16">
            <span className="jwrmsp_bold">B. Advance Payment Structure</span>
          </p>
          <p className="jwrmsp_t17">
            An advance payment of{" "}
            <span className="jwrmsp_bold">${totalAdvanceText} USD</span> is
            required and will be paid in two stages:
          </p>
          <p className="jwrmsp_t18">
            1. <span className="jwrmsp_bold">${firstAdvanceText} USD</span>{" "}
            before starting practice sessions.
          </p>
          <p className="jwrmsp_t19">
            2. <span className="jwrmsp_bold">${secondAdvanceText} USD</span>{" "}
            after successful completion of one week of practice sessions.
          </p>
        </div>

        <div className="jwrmsp_gap"></div>

        {/* ================= PAGE 2 ================= */}
        <div className="jwrmsp_page">
          <img
            src="./images/Jobways_RMS.jpg"
            alt="Jobways"
            className="jwrmsp_bg"
          />

          <p className="jwrmsp_t20">
            <span className="jwrmsp_bold">
              C. Non-Refundable Advance Policy
            </span>
          </p>
          <p className="jwrmsp_t21">
            The first advance payment of{" "}
            <span className="jwrmsp_bold">${firstAdvanceText} USD</span> paid
            before starting practice sessions is strictly non-refundable under
            any circumstances.
          </p>

          <p className="jwrmsp_t22">
            <span className="jwrmsp_bold">
              D. Process After Advance Payment
            </span>
          </p>
          <p className="jwrmsp_t23">
            After the initial{" "}
            <span className="jwrmsp_bold">${firstAdvanceText}</span> payment,
            the Candidate will undergo one week of practice sessions. Based on
            performance, the second{" "}
            <span className="jwrmsp_bold">${secondAdvanceText}</span> will be
            requested. Once the full{" "}
            <span className="jwrmsp_bold">${totalAdvanceText}</span> is
            received, resume preparation and marketing will begin.
          </p>

          <p className="jwrmsp_t24">
            <span className="jwrmsp_bold">E. Remaining Payment Terms</span>
          </p>
          <p className="jwrmsp_t25">
            The remaining balance of{" "}
            <span className="jwrmsp_bold">${dueText} USD</span> will be payable
            after successful placement within six (6) months. A revised
            agreement may be issued after placement based on salary and payment
            capability.
          </p>

          <p className="jwrmsp_t26">
            <span className="jwrmsp_bold">3. CANDIDATE RESPONSIBILITIES</span>
          </p>
          <p className="jwrmsp_t27">
            <span className="jwrmsp_bold">A. Candidate Availability</span>
          </p>
          <p className="jwrmsp_t28">
            The Candidate must remain available for practice sessions and
            interviews. Prior notice of at least one day is required for any
            unavailability.
          </p>

          <p className="jwrmsp_t29">
            <span className="jwrmsp_bold">B. Warning Policy</span>
          </p>
          <p className="jwrmsp_t30">
            If the Candidate is unresponsive without prior notice, warning
            emails will be issued. After three warning emails, services will be
            terminated and the advance payment will remain non-refundable.
          </p>

          <p className="jwrmsp_t31">
            <span className="jwrmsp_bold">C. Refund Policy</span>
          </p>
          <p className="jwrmsp_t32">
            If Jobways is unable to secure placement within ninety (90) days,
            fifty percent (50%) of the advance payment (
            <span className="jwrmsp_bold">${refundText}</span>) will be
            refunded.
          </p>

          <p className="jwrmsp_t33">
            <span className="jwrmsp_bold">D. Post Placement Support</span>
          </p>
          <p className="jwrmsp_t34">
            Two months of support will be provided after placement, which may be
            used for training or job support as required.
          </p>

          <p className="jwrmsp_t35">
            <span className="jwrmsp_bold">4. COVENANTS</span>
          </p>
          <p className="jwrmsp_t36">
            <span className="jwrmsp_bold">A. Confidentiality</span>
          </p>
          <p className="jwrmsp_t37">
            Candidate shall not share or misuse any confidential information,
            including client details, project data, training material, or
            communication content.
          </p>

          <p className="jwrmsp_t38">
            <span className="jwrmsp_bold">B. Exclusivity</span>
          </p>
          <p className="jwrmsp_t39">
            The Candidate agrees that their profile will be exclusively marketed
            by Jobways during the agreement term. If found marketing through
            another vendor simultaneously, a penalty of
            <span className="jwrmsp_bold"> $1,000 USD</span> is applicable to
            cover team efforts and resources.
          </p>
        </div>

        <div className="jwrmsp_gap"></div>

        {/* ================= PAGE 3 ================= */}
        <div className="jwrmsp_page">
          <img
            src="./images/Jobways_RMS.jpg"
            alt="Jobways"
            className="jwrmsp_bg"
          />

          <p className="jwrmsp_t40">
            <span className="jwrmsp_bold">5. MISCELLANEOUS PROVISIONS</span>
          </p>
          <p className="jwrmsp_t41">
            <span className="jwrmsp_bold">A. Entire Agreement</span>
          </p>
          <p className="jwrmsp_t42">
            This Agreement represents the complete and exclusive statement
            between the Employer and Employee. No other agreements, covenants,
            representations, or warranties, express or implied, oral or written,
            have been made by the parties concerning the services herein.
          </p>

          <p className="jwrmsp_t43">
            <span className="jwrmsp_bold">6. SIGNATURES</span>
          </p>

          {/* LEFT */}
          <p className="jwrmsp_t44">
            <span className="jwrmsp_bold">Employee’s Signature</span>
          </p>
          <div className="jwrmsp_l45"></div>

          <p className="jwrmsp_t46">
            <span className="jwrmsp_bold">Employee’s Name</span>
          </p>
          <div className="jwrmsp_l47"></div>
          <p className="jwrmsp_t48">{nameText}</p>

          <p className="jwrmsp_t49">
            <span className="jwrmsp_bold">Date</span>
          </p>
          <div className="jwrmsp_l50"></div>
          <p className="jwrmsp_t51">{dateText}</p>

          {/* RIGHT */}
          <p className="jwrmsp_t52">
            <span className="jwrmsp_bold">Employer Signature</span>
          </p>
          <div className="jwrmsp_l53"></div>

          <p className="jwrmsp_t54">
            <span className="jwrmsp_bold">President</span>
          </p>
          <div className="jwrmsp_l55"></div>
          <p className="jwrmsp_t56">Sudheer Panyam</p>

          <p className="jwrmsp_t57">
            <span className="jwrmsp_bold">Date</span>
          </p>
          <div className="jwrmsp_l58"></div>
          <p className="jwrmsp_t59">{dateText}</p>
        </div>

        <div className="jwrmsp_gap"></div>
      </div>
    </div>
  );
});

const Pre_Agreement = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Jobways_Resume_Marketing_Service_Agreement",
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="jwrmsp_print_btn">
        Print this out!
      </button>
    </div>
  );
};

export default Pre_Agreement;
