import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./w2.css";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const Emp = localStorage.getItem("w2company");
  return (
    <div ref={ref}>
      <div className="pdf-pag">
        {/* BOX 111111111111111111111111111111111 */}

        <div id="box1">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
          <p className="line5">
            --------------------------------------------------------------------------------------------------------------------------
          </p>
          <div className="line6"></div>
          <div className="line7"></div>
          <div className="line8"></div>
          <div className="line9"></div>
          <div className="line10"></div>
          <div className="line11"></div>
          <div className="line12"></div>
          <div className="line13"></div>
          <div className="line14"></div>
          <div className="line15"></div>
          <div className="line16"></div>
          <div className="line17"></div>
          <div className="line19"></div>
          <div className="line20"></div>
          <div className="boxa"></div>
          <div className="boxb"></div>
          <div className="boxc"></div>
          <p className="a1">1</p>
          <p className="a2">2</p>
          <p className="a3">3</p>
          <p className="a4">4</p>
          <p className="a5">5</p>
          <p className="a6">6</p>
          <p className="a7">7</p>
          <p className="a8">8</p>
          <p className="a9">9</p>
          <p className="a10">10</p>
          <p className="a11">11</p>
          <p className="a12a">12a</p>
          <p className="a12b">12b</p>
          <p className="a12c">12c</p>
          <p className="a12d">12d</p>
          <p className="a13">13</p>
          <p className="a14">14</p>
          <p className="a15">15</p>
          <p className="a16">16</p>
          <p className="a17">17</p>
          <p className="a18">18</p>
          <p className="a19">19</p>
          <p className="a20">20</p>
          <p className="a">a</p>
          <p className="b">b</p>
          <p className="c">c</p>
          <p className="d">d</p>
          <p className="e">e</p>
          <p className="r11">Employee's SSN</p>
          <p className="r12">Employer identification number (EIN) </p>
          <p className="r13">
            OMB No. <span>1545-0008</span>
          </p>
          <p className="r21">Employer’s name, address and ZIP code</p>
          <p className="r22">Wages, tips, other compn </p>
          <p className="r23">Fed inc tax withheld</p>
          <p className="r24">Social security wages</p>
          <p className="r31">SS tax withheld </p>
          <p className="r32">Medicare wages & tips </p>
          <p className="r33">Medicare tax withheld </p>
          <p className="r41">Social security tips</p>
          <p className="r42">Allocated tips</p>
          <p className="r51">Control number</p>
          <p className="r52">Depdnt care benefits</p>
          <p className="r53">Nonqualified plans</p>
          <p className="r61">Employee’s name, address, and ZIP code</p>
          <p className="r62">Suff.</p>
          <p className="r63">Other</p>
          <p className="r71">State</p>
          <p className="r72">Employer’s state ID No.</p>
          <p className="r73">State wages, tips, etc</p>
          <p className="r74">State income tax</p>
          <p className="r75">Local wages, tips, etc</p>
          <p className="r76">Local income tax</p>
          <p className="r77">Locality name</p>
          <p className="SE">Statutory employee</p>
          <p className="RP">Retirement plan</p>
          <p className="TP">Third-party sick pay</p>
          <p className="form">Form</p>
          <p className="w">W-2</p>
          <p className="wage">Wage and</p>
          <p className="tax">Tax</p>
          <p className="sas">Statement</p>
          <p className="year">{Global.w2form.year}</p>
          <p className="d1">
            Copy B To Be Filed with Employee's FEDERAL Tax Return{" "}
          </p>
          <p className="d4">This information is being</p>
          <p className="d5">furnished to the Internal</p>
          <p className="d6">Revenue service.</p>
          <p className="font1">***-**-{Global.w2form.ssn}</p>
          <p className="font2">
            {" "}
            {Emp === "rapid" ? (
              <>32- 0479208</>
            ) : Emp === "kacee" ? (
              <>46-3918010</>
            ) : Emp === "jobways" ? (
              <>36-5033197</>
            ) : (
              <></>
            )}
          </p>

          <p className="font3" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>Rapid Hiring Solutions Inc</>
            ) : Emp === "kacee" ? (
              <>Kacee Technologies services Inc</>
            ) : Emp === "jobways" ? (
              <>Jobways LLC </>
            ) : (
              <></>
            )}
          </p>
          <p className="font4" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>3000 Atrium Way Suite 200 </>
            ) : Emp === "kacee" ? (
              <>17 Dillon Dr </>
            ) : Emp === "jobways" ? (
              <>8 The Green Suite R </>
            ) : (
              <></>
            )}
          </p>
          <p className="font5" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>Mt Laurel Township, NJ 08054</>
            ) : Emp === "kacee" ? (
              <>Dix Hills, NY 11746</>
            ) : Emp === "jobways" ? (
              <>Dover, DE 19901</>
            ) : (
              <></>
            )}
          </p>
          <p className="font6">{Global.w2form.wages}</p>
          <p className="font7">{Global.w2form.federalIncomeTax}</p>
          <p className="font8">{Global.w2form.socialSecurityWages}</p>
          <p className="font9">{Global.w2form.socialSecurityTax}</p>
          <p className="font10">{Global.w2form.medicareWages}</p>
          <p className="font11">{Global.w2form.medicareTax}</p>
          <p className="TX">{Global.w2form.state}</p>
          <p className="font12">
            {" "}
            {Emp === "rapid" ? (
              <>32- 0479208</>
            ) : Emp === "kacee" ? (
              <>46-3918010</>
            ) : Emp === "jobways" ? (
              <>36-5033197</>
            ) : (
              <></>
            )}
          </p>
          <p className="font13">{Global.w2form.stateWages}</p>
          <p className="font14">{Global.w2form.stateIncomeTax}</p>
          <p className="font13-l">{Global.w2form.localWages}</p>
          <p className="font14-l">{Global.w2form.localIncomeTax}</p>
          <div className="font15-l">
            <p> {Global.w2form.localityName}</p>
          </div>

          <p className="font15" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine1}
          </p>
          <p className="font16" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine2}
          </p>
          <p className="font17" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine3}
          </p>
          <div className="v1"></div>
          <div className="v2"></div>
          <div className="v3"></div>
          <div className="v4"></div>
        </div>
        <div className="span">
          <p id="p11">REV {Global.w2form.date} QBDT</p>
          <p id="p12">Department of the Treasury ’ IRS</p>
        </div>

        <p className="line">
          ---------------------------------------------------------------------------------------------------------------------------
        </p>

        {/* BOX 22222222222222222222222222222222222 */}

        <div id="box2">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
          <p className="line5">
            --------------------------------------------------------------------------------------------------------------------------
          </p>
          <div className="line6"></div>
          <div className="line7"></div>
          <div className="line8"></div>
          <div className="line9"></div>
          <div className="line10"></div>
          <div className="line11"></div>
          <div className="line12"></div>
          <div className="line13"></div>
          <div className="line14"></div>
          <div className="line15"></div>
          <div className="line16"></div>
          <div className="line17"></div>
          <div className="line19"></div>
          <div className="line20"></div>
          <div className="boxa"></div>
          <div className="boxb"></div>
          <div className="boxc"></div>
          <p className="a1">1</p>
          <p className="a2">2</p>
          <p className="a3">3</p>
          <p className="a4">4</p>
          <p className="a5">5</p>
          <p className="a6">6</p>
          <p className="a7">7</p>
          <p className="a8">8</p>
          <p className="a9">9</p>
          <p className="a10">10</p>
          <p className="a11">11</p>
          <p className="a12a">12a</p>
          <p className="a12b">12b</p>
          <p className="a12c">12c</p>
          <p className="a12d">12d</p>
          <p className="a13">13</p>
          <p className="a14">14</p>
          <p className="a15">15</p>
          <p className="a16">16</p>
          <p className="a17">17</p>
          <p className="a18">18</p>
          <p className="a19">19</p>
          <p className="a20">20</p>
          <p className="a">a</p>
          <p className="b">b</p>
          <p className="c">c</p>
          <p className="d">d</p>
          <p className="e">e</p>
          <p className="r11">Employee's SSN</p>
          <p className="r12">Employer identification number (EIN) </p>
          <p className="r13">
            OMB No. <span>1545-0008</span>
          </p>
          <p className="r21">Employer’s name, address and ZIP code</p>
          <p className="r22">Wages, tips, other compn </p>
          <p className="r23">Fed inc tax withheld</p>
          <p className="r24">Social security wages</p>
          <p className="r31">SS tax withheld </p>
          <p className="r32">Medicare wages & tips </p>
          <p className="r33">Medicare tax withheld </p>
          <p className="r41">Social security tips</p>
          <p className="r42">Allocated tips</p>
          <p className="r51">Control number</p>
          <p className="r52">Depdnt care benefits</p>
          <p className="r53">Nonqualified plans</p>
          <p className="r61">Employee’s name, address, and ZIP code</p>
          <p className="r62">Suff.</p>
          <p className="r63">Other</p>
          <p className="r71">State</p>
          <p className="r72">Employer’s state ID No.</p>
          <p className="r73">State wages, tips, etc</p>
          <p className="r74">State income tax</p>
          <p className="r75">Local wages, tips, etc</p>
          <p className="r76">Local income tax</p>
          <p className="r77">Locality name</p>
          <p className="SE">Statutory employee</p>
          <p className="RP">Retirement plan</p>
          <p className="TP">Third-party sick pay</p>
          <p className="form">Form</p>
          <p className="w">W-2</p>
          <p className="wage">Wage and</p>
          <p className="tax">Tax</p>
          <p className="sas">Statement</p>
          <p className="year">{Global.w2form.year}</p>
          <p className="t1">
            Copy 2 To Be Filed with Employee's State, City or Local Income Tax
            Return.
          </p>
          <p className="font1">***-**-{Global.w2form.ssn}</p>
          <p className="font2">
            {" "}
            {Emp === "rapid" ? (
              <>32- 0479208</>
            ) : Emp === "kacee" ? (
              <>46-3918010</>
            ) : Emp === "jobways" ? (
              <>36-5033197</>
            ) : (
              <></>
            )}
          </p>
          <p className="font3" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>Rapid Hiring Solutions Inc</>
            ) : Emp === "kacee" ? (
              <>Kacee Technologies services Inc</>
            ) : Emp === "jobways" ? (
              <>Jobways LLC </>
            ) : (
              <></>
            )}
          </p>
          <p className="font4" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>3000 Atrium Way Suite 200 </>
            ) : Emp === "kacee" ? (
              <>17 Dillon Dr </>
            ) : Emp === "jobways" ? (
              <>8 The Green Suite R </>
            ) : (
              <></>
            )}
          </p>
          <p className="font5" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>Mt Laurel Township, NJ 08054</>
            ) : Emp === "kacee" ? (
              <>Dix Hills, NY 11746</>
            ) : Emp === "jobways" ? (
              <>Dover, DE 19901</>
            ) : (
              <></>
            )}
          </p>
          <p className="font6">{Global.w2form.wages}</p>
          <p className="font7">{Global.w2form.federalIncomeTax}</p>
          <p className="font8">{Global.w2form.socialSecurityWages}</p>
          <p className="font9">{Global.w2form.socialSecurityTax}</p>
          <p className="font10">{Global.w2form.medicareWages}</p>
          <p className="font11">{Global.w2form.medicareTax}</p>
          <p className="TX">{Global.w2form.state}</p>
          <p className="font12">
            {" "}
            {Emp === "rapid" ? (
              <>32- 0479208</>
            ) : Emp === "kacee" ? (
              <>46-3918010</>
            ) : Emp === "jobways" ? (
              <>36-5033197</>
            ) : (
              <></>
            )}
          </p>
          <p className="font13">{Global.w2form.stateWages}</p>
          <p className="font14">{Global.w2form.stateIncomeTax}</p>
          <p className="font13-l">{Global.w2form.localWages}</p>
          <p className="font14-l">{Global.w2form.localIncomeTax}</p>
          <div className="font15-l">
            <p> {Global.w2form.localityName}</p>
          </div>
          <p className="font15" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine1}
          </p>
          <p className="font16" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine2}
          </p>
          <p className="font17" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine3}
          </p>
          <div className="v1"></div>
          <div className="v2"></div>
          <div className="v3"></div>
          <div className="v4"></div>
        </div>
        <div className="span">
          <p id="p11">REV {Global.w2form.date} QBDT</p>
          <p id="p12">Department of the Treasury ’ IRS</p>
        </div>
        <p className="line">
          ---------------------------------------------------------------------------------------------------------------------------
        </p>

        {/* BOX 3333333333333333333333333333333333333 */}

        <div id="box3">
          <div className="line1"></div>
          <div className="line1n"></div>
          <div className="line2n"></div>
          <div className="line22n"></div>
          <div className="line3"></div>
          <div className="line4"></div>
          <p className="line5">
            --------------------------------------------------------------------------------------------------------------------------
          </p>
          <div className="line6n"></div>
          <div className="line6nn"></div>
          <div className="line7n"></div>
          <div className="line8n"></div>
          <div className="line9"></div>
          <div className="line10"></div>
          <div className="line11"></div>
          <div className="line12"></div>
          <div className="line13"></div>
          <div className="line14"></div>
          <div className="line15"></div>
          <div className="line16n"></div>
          <div className="line17n"></div>
          <div className="line19"></div>
          <div className="line20"></div>
          <div className="boxa"></div>
          <div className="boxb"></div>
          <div className="boxc"></div>
          <p className="a1n">1</p>
          <p className="a2n">2</p>
          <p className="a3n">3</p>
          <p className="a4n">4</p>
          <p className="a5n">5</p>
          <p className="a6n">6</p>
          <p className="a7n">7</p>
          <p className="a8n">8</p>
          <p className="a9n">9</p>
          <p className="a10">10</p>
          <p className="a11">11</p>
          <p className="a12a">12a</p>
          <p className="a12b">12b</p>
          <p className="a12c">12c</p>
          <p className="a12d">12d</p>
          <p className="a13">13</p>
          <p className="a14">14</p>
          <p className="a15">15</p>
          <p className="a16">16</p>
          <p className="a17">17</p>
          <p className="a18">18</p>
          <p className="a19">19</p>
          <p className="a20">20</p>
          <p className="a">a</p>
          <p className="b">b</p>
          <p className="c">c</p>
          <p className="d">d</p>
          <p className="e">e</p>
          <p className="r11">Employee's SSN</p>
          <p className="r12">Employer identification number (EIN) </p>
          <p className="r13">
            OMB No. <span>1545-0008</span>
          </p>
          <p className="nn">
            This information is being furnished to the IRS. If you are required
            to file a tax return, a negligence penalty or
          </p>
          <p className="nn1">
            other sanction may be imposed on you if this income is taxable and
            you fail to report it.
          </p>
          <p className="r21">Employer’s name, address and ZIP code</p>
          <p className="r22n">Wages, tips, other compn </p>
          <p className="r23n">Fed inc tax withheld</p>
          <p className="r24n">Social security wages</p>
          <p className="r31n">SS tax withheld </p>
          <p className="r32n">Medicare wages & tips </p>
          <p className="r33n">Medicare tax withheld </p>
          <p className="r41n">Social security tips</p>
          <p className="r42n">Allocated tips</p>
          <p className="r51">Control number</p>
          <p className="r52">Depdnt care benefits</p>
          <p className="r53">Nonqualified plans</p>
          <p className="r61">Employee’s name, address, and ZIP code</p>
          <p className="r62">Suff.</p>
          <p className="r63">Other</p>
          <p className="r71">State</p>
          <p className="r72">Employer’s state ID No.</p>
          <p className="r73">State wages, tips, etc</p>
          <p className="r74">State income tax</p>
          <p className="r75">Local wages, tips, etc</p>
          <p className="r76">Local income tax</p>
          <p className="r77">Locality name</p>
          <p className="SE">Statutory employee</p>
          <p className="RP">Retirement plan</p>
          <p className="TP">Third-party sick pay</p>
          <p className="form" style={{ top: "18%" }}>
            Form
          </p>
          <p className="w" style={{ top: "13.8%" }}>
            W-2
          </p>
          <p className="wage" style={{ top: "24%" }}>
            Wage and
          </p>
          <p className="tax" style={{ top: "32%" }}>
            Tax
          </p>
          <p className="sas" style={{ top: "39%" }}>
            Statement
          </p>
          <p className="yearn">{Global.w2form.year}</p>
          <p className="t2">
            Copy C for EMPLOYEE'S RECORDs.(See Notice to Employee)
          </p>
          <p className="font1">***-**-{Global.w2form.ssn}</p>
          <p className="font2">
            {" "}
            {Emp === "rapid" ? (
              <>32- 0479208</>
            ) : Emp === "kacee" ? (
              <>46-3918010</>
            ) : Emp === "jobways" ? (
              <>36-5033197</>
            ) : (
              <></>
            )}
          </p>
          <p className="font3" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>Rapid Hiring Solutions Inc</>
            ) : Emp === "kacee" ? (
              <>Kacee Technologies services Inc</>
            ) : Emp === "jobways" ? (
              <>Jobways LLC </>
            ) : (
              <></>
            )}
          </p>
          <p className="font4" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>3000 Atrium Way Suite 200 </>
            ) : Emp === "kacee" ? (
              <>17 Dillon Dr </>
            ) : Emp === "jobways" ? (
              <>8 The Green Suite R </>
            ) : (
              <></>
            )}
          </p>
          <p className="font5" style={{ textTransform: "uppercase" }}>
            {" "}
            {Emp === "rapid" ? (
              <>Mt Laurel Township, NJ 08054</>
            ) : Emp === "kacee" ? (
              <>Dix Hills, NY 11746</>
            ) : Emp === "jobways" ? (
              <>Dover, DE 19901</>
            ) : (
              <></>
            )}
          </p>
          <p className="font6n">{Global.w2form.wages}</p>
          <p className="font7n">{Global.w2form.federalIncomeTax}</p>
          <p className="font8n">{Global.w2form.socialSecurityWages}</p>
          <p className="font9n">{Global.w2form.socialSecurityTax}</p>
          <p className="font10n">{Global.w2form.medicareWages}</p>
          <p className="font11n">{Global.w2form.medicareTax}</p>
          <p className="TX">{Global.w2form.state}</p>
          <p className="font12">
            {" "}
            {Emp === "rapid" ? (
              <>32- 0479208</>
            ) : Emp === "kacee" ? (
              <>46-3918010</>
            ) : Emp === "jobways" ? (
              <>36-5033197</>
            ) : (
              <></>
            )}
          </p>
          <p className="font13">{Global.w2form.stateWages}</p>
          <p className="font14">{Global.w2form.stateIncomeTax}</p>
          <p className="font13-l">{Global.w2form.localWages}</p>
          <p className="font14-l">{Global.w2form.localIncomeTax}</p>
          <div className="font15-l">
            <p> {Global.w2form.localityName}</p>
          </div>
          <p className="font15" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine1}
          </p>
          <p className="font16" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine2}
          </p>
          <p className="font17" style={{ textTransform: "uppercase" }}>
            {Global.w2form.employeeNameAddressLine3}
          </p>
          <div className="v1"></div>
          <div className="v2"></div>
          <div className="v3"></div>
          <div className="v4"></div>
        </div>
        <div className="span">
          <p id="p11">REV {Global.w2form.date} QBDT</p>
          <p id="p12">Department of the Treasury ’ IRS</p>
        </div>
      </div>
    </div>
  );
});

const W2 = () => {
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

export default W2;
