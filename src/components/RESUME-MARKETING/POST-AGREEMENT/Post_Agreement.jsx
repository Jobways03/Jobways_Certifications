import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";
import "./JobwayspostAgreement.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const f = Global.PaymentPlanForm || {};

  const dateText = f.date || "[Date]";
  const nameText = f.name || "[Name]";
  const locationText = f.location || "[Location]";

  const advancePaid = f.totalAdvancePayments || "1,000";
  const dueAmount = f.duePayments || "14,000";
  const monthsText = f.months || "ten (10)";
  const monthlyPay = f.monthlyPayment || "1,400";
  const dueDate = f.dueDate || "[Due Date]";

  return (
    <div ref={ref}>
      <div className="jwrpps3_pdf">
        {/* ================= PAGE 1 ================= */}
        <div className="jwrpps3_page">
          <img
            src="./images/Jobways_RMS.jpg"
            alt="Jobways"
            className="jwrpps3_bg"
          />

         
          <p className="jwrpps3_t2">
            JOBWAYS RESUME MARKETING SERVICE AGREEMENT
          </p>
          <p className="jwrpps3_t3">(REVISED POST-PLACEMENT)</p>

          <p className="jwrpps3_t4">
            This Revised Resume Marketing Service Agreement (“Revised
            Agreement”) is made and entered into on{" "}
            <span className="jwrpps3_bold">{dateText}</span>, between Jobways
            LLC, having its principal place of business at 8 The Green, STE R,
            Dover, DE 19901 (hereinafter referred to as the “Service Provider”
            or “Employer”), and <span className="jwrpps3_bold">{nameText}</span>{" "}
            residing at <span className="jwrpps3_bold">{locationText}</span>{" "}
            (hereinafter referred to as the “Candidate” or “Employee”).
          </p>

          <p className="jwrpps3_t5">
            This Revised Agreement is executed pursuant to the earlier Resume
            Marketing Service Agreement between the parties. As per the previous
            agreement, the Service Provider confirms receipt of an advance
            payment of <span className="jwrpps3_bold">${advancePaid} USD</span>{" "}
            from the Candidate. This document sets forth the remaining payment
            obligations and post-placement support terms after successful
            placement.
          </p>

          <p className="jwrpps3_t6">
            <span className="jwrpps3_bold">
              1. PAYMENT TERMS (POST-PLACEMENT)
            </span>
          </p>

          <p className="jwrpps3_t7">
            <span className="jwrpps3_bold">
              A. Acknowledgement of Advance Payment
            </span>
          </p>
          <p className="jwrpps3_t8">
            The parties acknowledge that an advance payment of{" "}
            <span className="jwrpps3_bold">${advancePaid} USD</span> has already
            been received by the Service Provider under the previous agreement.
            This amount is non-refundable and forms part of the total service
            fee.
          </p>

          <p className="jwrpps3_t9">
            <span className="jwrpps3_bold">B. Remaining Service Fee</span>
          </p>
          <p className="jwrpps3_t10">
            The remaining balance payable is{" "}
            <span className="jwrpps3_bold">${dueAmount} USD</span>, which shall
            be paid by the Candidate in{" "}
            <span className="jwrpps3_bold">{monthsText}</span> equal monthly
            installments.
          </p>

          <p className="jwrpps3_t11">
            <span className="jwrpps3_bold">
              C. Monthly Installment Schedule
            </span>
          </p>
          <p className="jwrpps3_t12">
            The remaining balance of{" "}
            <span className="jwrpps3_bold">${dueAmount} USD</span> will be paid
            as follows:
          </p>

          <p className="jwrpps3_t13">
            • Monthly installment amount:{" "}
            <span className="jwrpps3_bold">${monthlyPay} USD</span> per month.
          </p>
          <p className="jwrpps3_t14">
            • Installments are due every month on or before the{" "}
            <span className="jwrpps3_bold">{dueDate}</span> of each month.
          </p>
          <p className="jwrpps3_t15">
            • The first installment is due one month from the Candidate’s
            official start date with the client or employer.
          </p>

          <p className="jwrpps3_t16">
            <span className="jwrpps3_bold">D. Method of Payment</span>
          </p>
          <p className="jwrpps3_t17">
            Payments shall be made through the payment method instructed by
            Jobways LLC (bank transfer, online payment link, or approved payment
            platform). All transfer or processing fees, if any, shall be borne
            by the Candidate unless otherwise agreed in writing.
          </p>
        </div>

        <div className="jwrpps3_gap"></div>

        {/* ================= PAGE 2 ================= */}
        <div className="jwrpps3_page">
          <img
            src="./images/Jobways_RMS.jpg"
            alt="Jobways"
            className="jwrpps3_bg"
          />

          <p className="jwrpps3_t18">
            <span className="jwrpps3_bold">
              2. POST-PLACEMENT SUPPORT AND TRAINING
            </span>
          </p>

          <p className="jwrpps3_t19">
            <span className="jwrpps3_bold">A. Duration and Scope</span>
          </p>
          <p className="jwrpps3_t20">
            Two (2) months of job support and/or training will be provided after
            placement, according to the Candidate’s project requirements and
            role expectations.
          </p>

          <p className="jwrpps3_t21">
            • Support may include onboarding guidance, workflow assistance and performance support.
          </p>
          <p className="jwrpps3_t22">
            • Training or support allocation will be based on the Candidate’s
            requirement and project demands.
          </p>
          <p className="jwrpps3_t23">
            • Support is provided only during working days and reasonable
            business hours unless otherwise agreed.
          </p>

          <p className="jwrpps3_t24">
            <span className="jwrpps3_bold">
              B. Candidate Responsibilities During Support
            </span>
          </p>
          <p className="jwrpps3_t25">
            • The Candidate must attend scheduled sessions and remain responsive
            to communication.
          </p>
          <p className="jwrpps3_t26">
            • Failure to participate consistently may result in reduced or
            withdrawn support without affecting payment obligations.
          </p>

          <p className="jwrpps3_t27">
            <span className="jwrpps3_bold">3. CANDIDATE OBLIGATIONS</span>
          </p>
          <p className="jwrpps3_t28">
            • The Candidate agrees to maintain professional conduct and
            cooperate with Jobways throughout the installment period.
          </p>
          <p className="jwrpps3_t29">
            • The Candidate shall promptly notify Jobways of any job changes,
            termination, or project transition during the payment term.
          </p>
          <p className="jwrpps3_t30">
            • Payment obligations remain valid regardless of project changes,
            resignation, or employer decisions after placement.
          </p>

          <p className="jwrpps3_t31">
            <span className="jwrpps3_bold">4. ENTIRE AGREEMENT</span>
          </p>
          <p className="jwrpps3_t32">
            This Revised Agreement supplements and updates the previous Resume
            Marketing Service Agreement only with respect to post-placement
            payment terms and support obligations. All other terms from the
            previous agreement remain in full force unless specifically modified
            herein.
          </p>
        </div>

        <div className="jwrpps3_gap"></div>

        {/* ================= PAGE 3 ================= */}
        <div className="jwrpps3_page">
          <img
            src="./images/Jobways_RMS.jpg"
            alt="Jobways"
            className="jwrpps3_bg"
          />

          <p className="jwrpps3_t33">
            <span className="jwrpps3_bold">5. SIGNATURES</span>
          </p>

          {/* LEFT - Employee */}
          <p className="jwrpps3_t34">
            <span className="jwrpps3_bold">Employee’s Signature</span>
          </p>
          <div className="jwrpps3_l35" />

          <p className="jwrpps3_t36">
            <span className="jwrpps3_bold">Employee’s Name</span>
          </p>
          <div className="jwrpps3_l37" />
          <p className="jwrpps3_t38">{nameText}</p>

          <p className="jwrpps3_t39">
            <span className="jwrpps3_bold">Date</span>
          </p>
          <div className="jwrpps3_l40" />
          <p className="jwrpps3_t41">{dateText}</p>

          {/* RIGHT - Employer */}
          <p className="jwrpps3_t42">
            <span className="jwrpps3_bold">Employer Signature</span>
          </p>
          <div className="jwrpps3_l43" />

          <p className="jwrpps3_t44">
            <span className="jwrpps3_bold">Authorized Signatory</span>
          </p>
          <div className="jwrpps3_l45" />
          <p className="jwrpps3_t46">Jobways LLC</p>

          <p className="jwrpps3_t47">
            <span className="jwrpps3_bold">Date</span>
          </p>
          <div className="jwrpps3_l48" />
          <p className="jwrpps3_t49">{dateText}</p>
        </div>

        <div className="jwrpps3_gap"></div>
      </div>
    </div>
  );
});

const Post_Agreement = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "JOBWAYS_Revised_Post_Placement_Agreement",
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="jwrpps3_print_btn">
        Print this out!
      </button>
    </div>
  );
};

export default Post_Agreement;
