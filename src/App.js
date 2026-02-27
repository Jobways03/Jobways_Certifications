import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthState from "./context/AuthState";
import Paystub from "./components/EBS-USA/Paystub/Paystub/Paystub";
import Stubform from "./components/EBS-USA/Paystub/Paystub/stubform";
import W2Form from "./components/EBS-USA/W2/w2form";
import W2 from "./components/EBS-USA/W2/w2";
import Invoice from "./components/CAREER-SERVICES/Invoice/Invoice";
import Invoiceform from "./components/CAREER-SERVICES/Invoice/Invoiceform";
import Outform from "./components/CAREER-SERVICES/Outsourcing/Form/Outform";
import Select from "./components/CAREER-SERVICES/Outsourcing/select/Select";
import Jobways from "./components/CAREER-SERVICES/Outsourcing/Jobways/jobways";
import Genie from "./components/CAREER-SERVICES/Outsourcing/Genie/genie";
import Genesispayslip from "./components/EBS-INDIA/Genesis/payslips/Payslip";
import Genielamppayslip from "./components/EBS-INDIA/Genielamp/Payslip/Payslip";
import Genesisoffer from "./components/EBS-INDIA/Genesis/Offerletter/Offer";
import Jobwaysoffer from "./components/EBS-INDIA/JobwaysLLP/Offerletter/jobwaysoffer";
import Jobwayspayslip from "./components/EBS-INDIA/JobwaysLLP/Payslip/jobwayspayslip";
import JobwaysOfferform from "./components/EBS-INDIA/JobwaysLLP/Offerletter/OfferForm/form";
import GenesisOfferform from "./components/EBS-INDIA/Genesis/Offerletter/Offerfrom";
import GenesisBoxes from "./components/EBS-INDIA/Genesis/Boxes/Boxes";
import GenielampBoxes from "./components/EBS-INDIA/Genielamp/Boxes/Boxes";
import JobwaysBoxes from "./components/EBS-INDIA/JobwaysLLP/Boxes/Boxes";
import GeshurinfraBoxes from "./components/EBS-INDIA/Geshurinfra/Boxes/Boxes";
import JobwaysPayslipform from "./components/EBS-INDIA/JobwaysLLP/Payslip/Payslipform";
import Geshurinfraoffer from "./components/EBS-INDIA/Geshurinfra/Offerletter/Offer";
import GeshurOfferform from "./components/EBS-INDIA/Geshurinfra/Offerletter/Gesofferform";
import Genielampoffer from "./components/EBS-INDIA/Genielamp/Offerletter/Offer";
import GenieOfferform from "./components/EBS-INDIA/Genielamp/Offerletter/Offerfrom";
import GenesisHike from "./components/EBS-INDIA/Genesis/Hikeletter/Hike";
import GenesisHikeform from "./components/EBS-INDIA/Genesis/Hikeletter/Hikeform";
import GenielampHike from "./components/EBS-INDIA/Genielamp/Hikeletter/Hike";
import GeshurHike from "./components/EBS-INDIA/Geshurinfra/Hikeletter/Hike";
import JobwaysHike from "./components/EBS-INDIA/JobwaysLLP/Hikeletter/Hike";
import GenielampPayslipform from "./components/EBS-INDIA/Genielamp/Payslip/Payslipform";
import GenesisPayslipform from "./components/EBS-INDIA/Genesis/payslips/Payslipform";
import Geshurpayslip from "./components/EBS-INDIA/Geshurinfra/payslips/Payslip";
import GeshurPayslipform from "./components/EBS-INDIA/Geshurinfra/payslips/Payslipform";
import GenesisRelieving from "./components/EBS-INDIA/Genesis/Relievingletter/relieving";
import JobwaysRelieving from "./components/EBS-INDIA/JobwaysLLP/Relievingletter/relieving";
import GeshurRelieving from "./components/EBS-INDIA/Geshurinfra/Relievingletter/relieving";
import GenielampRelieving from "./components/EBS-INDIA/Genielamp/Relievingletter/relieving";
import Relievingform from "./components/EBS-INDIA/Geshurinfra/Relievingletter/relievingform";
import JobwaysExperience from "./components/EBS-INDIA/JobwaysLLP/Experience/Experience";
import GenielampExperience from "./components/EBS-INDIA/Genielamp/Experience/Experience";
import GeshurExperience from "./components/EBS-INDIA/Geshurinfra/Experience/Experience";
import GenesisExperience from "./components/EBS-INDIA/Genesis/Experience/Experience";
import Experienceform from "./components/EBS-INDIA/Geshurinfra/Experience/Expform";
import SportsmartBoxes from "./components/EBS-INDIA/Sportsmart/Boxes/Boxes";
import SportsOfferform from "./components/EBS-INDIA/Sportsmart/Offerletter/offerform";
import Sportsoffer from "./components/EBS-INDIA/Sportsmart/Offerletter/Offer";
import SportsPayslipform from "./components/EBS-INDIA/Sportsmart/payslips/Payslipform";
import Sportspayslip from "./components/EBS-INDIA/Sportsmart/payslips/Payslip";
import SportsHike from "./components/EBS-INDIA/Sportsmart/Hikeletter/Hike";
import SportsExperience from "./components/EBS-INDIA/Sportsmart/Experience/Experience";
import SportsRelieving from "./components/EBS-INDIA/Sportsmart/Relievingletter/relieving";
import Jelly from "./components/CAREER-SERVICES/Outsourcing/JellyGit/jelly";
import Main from "./components/Main/Main";
import Services from "./components/CAREER-SERVICES/servicesbox";
import Uspayroll from "./components/EBS-USA/Main/payrollbox";
import Invoicebox from "./components/CAREER-SERVICES/Invoice/Invoicebox";
import Paystubbox from "./components/EBS-USA/Paystub/paystubbox";
import W2box from "./components/EBS-USA/W2/w2box";
import USBox from "./components/EBS-USA/BOX/USbox";
import JobwaysLLCExperience from "./components/EBS-USA/JobwaysLLC/experience";
import Jobwaysllcoffer from "./components/EBS-USA/JobwaysLLC/offerlet";
import KaceeExperience from "./components/EBS-USA/KACEE/experience";
import RapidExperience from "./components/EBS-USA/Rapidhiring/experience";
import USOfferForm from "./components/EBS-USA/JobwaysLLC/offerform";
import Kaceeoffer from "./components/EBS-USA/KACEE/offer";
import JobllcRelieving from "./components/EBS-USA/JobwaysLLC/relieving";
import KaceeRelieving from "./components/EBS-USA/KACEE/relieving";
import Rapidhiringoffer from "./components/EBS-USA/Rapidhiring/offer";
import RapidRelieving from "./components/EBS-USA/Rapidhiring/relieving";
import Coi from "./components/COI/Coi";
import Coiform from "./components/COI/Coiform";
import GenieEditform from "./components/EBS-INDIA/Genielamp/Editable/Editform";
import GenieEdit from "./components/EBS-INDIA/Genielamp/Editable/GenieEdit";
import GenesisEdit from "./components/EBS-INDIA/Genesis/Editable/GeneisEdit";
import GeshurEdit from "./components/EBS-INDIA/Geshurinfra/Editable/GeshurEdit";
import JobwaysLLPEdit from "./components/EBS-INDIA/JobwaysLLP/Editable/JobwaysLLPEdit";
import JobwaysLLCEdit from "./components/EBS-USA/JobwaysLLC/Editable";
import KACEEEdit from "./components/EBS-USA/KACEE/Ediatble";
import RapidEdit from "./components/EBS-USA/Rapidhiring/Editable";
import MercuryInvoice from "./components/CAREER-SERVICES/Invoice/MercuryInvoice";
import MercuryInvoiceform from "./components/CAREER-SERVICES/Invoice/MercuryInvoiceForm";
import Paystubsubbox from "./components/EBS-USA/Paystub/paystubsubbox";
import SdiStubform from "./components/EBS-USA/Paystub/Paystub/paystubsdiform";
import Paystubsdi from "./components/EBS-USA/Paystub/Paystub/paystubsdi";
import T4form from "./components/EBS-CANADA/T4/T4form";
import T4 from "./components/EBS-CANADA/T4/T4";
import Canada_Main from "./components/EBS-CANADA/Main/Canada_Main";
import IndianMain from "./components/EBS-INDIA/Main/IndiaMain";
import SM_Invoice from "./components/SportsMart_Inovice/SM_Invoice";
import SM_Invoiceform from "./components/SportsMart_Inovice/SM_Invoice_form";
import SportsmartLLPEdit from "./components/EBS-INDIA/Sportsmart/Editable/SportsEdit";
import Login from "./Auth/Login/Login";
import ProtectedRoute from "./Auth/ProtectedRoute/ProtectedRoute";
import Invoiceform_Paypal from "./components/CAREER-SERVICES/Invoice/Invoiceform_paypal";
import Invoice_paypal from "./components/CAREER-SERVICES/Invoice/Invoice_paypal";
import Invoiceform_Genie_Paypal from "./components/CAREER-SERVICES/Invoice/Invoiceform_genie_paypal";
import Invoice_Genie_paypal from "./components/CAREER-SERVICES/Invoice/Invoice_genie_paypal";
import Paystubfli from "./components/EBS-USA/Paystub/Paystub/paystubfli";
import Paystubsdifli from "./components/EBS-USA/Paystub/Paystub/paystubSDIFLI";
import RESUME_MAIN from "./components/RESUME-MARKETING/Main/Resumebox";
import Pre_Agreement_form from "./components/RESUME-MARKETING/PRE-AGREEMENT/Pre_Agreement_form";
import Post_Agreement_form from "./components/RESUME-MARKETING/POST-AGREEMENT/Post_Agreement_form";
import Pre_Agreement from "./components/RESUME-MARKETING/PRE-AGREEMENT/Pre_Agreement";
import Post_Agreement from "./components/RESUME-MARKETING/POST-AGREEMENT/Post_Agreement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthState>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Uspayroll"
              element={
                <ProtectedRoute>
                  <Uspayroll />
                </ProtectedRoute>
              }
            />
            <Route
              path="/IndianMain"
              element={
                <ProtectedRoute>
                  <IndianMain />
                </ProtectedRoute>
              }
            />
            <Route
              path="/canada_Main"
              element={
                <ProtectedRoute>
                  <Canada_Main />
                </ProtectedRoute>
              }
            />
            <Route
              path="/COIform"
              element={
                <ProtectedRoute>
                  <Coiform />
                </ProtectedRoute>
              }
            />
            <Route
              path="/SM_Invoiceform"
              element={
                <ProtectedRoute>
                  <SM_Invoiceform />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/Uspayroll" element={<Uspayroll />} />
                    <Route path="/IndianMain" element={<IndianMain />} />
                    <Route path="/canada_Main" element={<Canada_Main />} />
                    <Route path="/COIform" element={<Coiform />} />
                    <Route
                      path="/SM_Invoiceform"
                      element={<SM_Invoiceform />}
                    />
                  </Routes>
                </ProtectedRoute>
              }
            /> */}
            {/* Fallback: redirect unknown paths back to login or main */}
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Main />} />
            <Route path="/paystub" element={<Paystub />} />
            <Route path="/w2" element={<W2 />} />
            <Route path="/paystubform" element={<Stubform />} />
            <Route path="/w2form" element={<W2Form />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/invoiceform" element={<Invoiceform />} />
            <Route
              path="/Invoiceform_Paypal"
              element={<Invoiceform_Paypal />}
            />
            <Route path="/Invoice_paypal" element={<Invoice_paypal />} />
            <Route path="/outform" element={<Outform />} />
            <Route path="/select" element={<Select />} />
            <Route path="/jobways" element={<Jobways />} />
            <Route path="/genielamp" element={<Genie />} />
            <Route path="/genesisPayslip" element={<Genesispayslip />} />
            <Route path="/genielamppayslip" element={<Genielamppayslip />} />
            <Route path="/genesisoffer" element={<Genesisoffer />} />
            <Route path="/jobwaysoffer" element={<Jobwaysoffer />} />
            <Route path="/jobwayspayslip" element={<Jobwayspayslip />} />
            <Route path="/jobwaysofferform" element={<JobwaysOfferform />} />
            <Route path="/genesisOfferform" element={<GenesisOfferform />} />
            <Route path="/genesisBoxes" element={<GenesisBoxes />} />
            <Route path="/genielampBoxes" element={<GenielampBoxes />} />
            <Route path="/jobwaysBoxes" element={<JobwaysBoxes />} />
            <Route path="/geshurinfraBoxes" element={<GeshurinfraBoxes />} />
            <Route path="/sportsmartBoxes" element={<SportsmartBoxes />} />
            <Route path="/geshurinfraoffer" element={<Geshurinfraoffer />} />
            <Route
              path="/jobwaysPayslipform"
              element={<JobwaysPayslipform />}
            />
            <Route path="/geshurOfferform" element={<GeshurOfferform />} />
            <Route path="/genielampoffer" element={<Genielampoffer />} />
            <Route path="/genieOfferform" element={<GenieOfferform />} />
            <Route path="/genesisHike" element={<GenesisHike />} />
            <Route path="/hikeform" element={<GenesisHikeform />} />
            <Route path="/genielampHike" element={<GenielampHike />} />
            <Route path="/geshurHike" element={<GeshurHike />} />
            <Route path="/jobwaysHike" element={<JobwaysHike />} />
            <Route
              path="/genielampPayslipform"
              element={<GenielampPayslipform />}
            />
            <Route
              path="/genesisPayslipform"
              element={<GenesisPayslipform />}
            />
            <Route path="/geshurpayslip" element={<Geshurpayslip />} />
            <Route path="/geshurPayslipform" element={<GeshurPayslipform />} />
            <Route path="/genesisRelieving" element={<GenesisRelieving />} />
            <Route path="/jobwaysRelieving" element={<JobwaysRelieving />} />
            <Route path="/geshurRelieving" element={<GeshurRelieving />} />
            <Route
              path="/genielampRelieving"
              element={<GenielampRelieving />}
            />
            <Route path="/relievingform" element={<Relievingform />} />
            <Route path="/jobwaysExperience" element={<JobwaysExperience />} />
            <Route
              path="/genielampExperience"
              element={<GenielampExperience />}
            />
            <Route path="/geshurExperience" element={<GeshurExperience />} />
            <Route path="/genesisExperience" element={<GenesisExperience />} />
            <Route path="/experienceform" element={<Experienceform />} />
            <Route path="/sportsOfferform" element={<SportsOfferform />} />
            <Route path="/sportsoffer" element={<Sportsoffer />} />
            <Route path="/sportsPayslipform" element={<SportsPayslipform />} />
            <Route path="/sportspayslip" element={<Sportspayslip />} />
            <Route path="/sportsHike" element={<SportsHike />} />
            <Route path="/sportsExperience" element={<SportsExperience />} />
            <Route path="/sportsRelieving" element={<SportsRelieving />} />
            <Route path="/jellygit" element={<Jelly />} />
            <Route path="/invoicebox" element={<Invoicebox />} />
            <Route path="/paystubbox" element={<Paystubbox />} />
            <Route path="/W2box" element={<W2box />} />
            {/* US PAYROLLS */}
            <Route path="/JBox" element={<USBox />} />
            <Route
              path="/JobwaysLLCExperience"
              element={<JobwaysLLCExperience />}
            />
            <Route path="/KaceeExperience" element={<KaceeExperience />} />
            <Route path="/RapidExperience" element={<RapidExperience />} />
            <Route path="/USOfferForm" element={<USOfferForm />} />
            <Route path="/Jobwaysllcoffer" element={<Jobwaysllcoffer />} />
            <Route path="/Kaceeoffer" element={<Kaceeoffer />} />
            <Route path="/Rapidhiringoffer" element={<Rapidhiringoffer />} />
            <Route path="/JobllcRelieving" element={<JobllcRelieving />} />
            <Route path="/KaceeRelieving" element={<KaceeRelieving />} />
            <Route path="/RapidRelieving" element={<RapidRelieving />} />
            <Route path="/COI" element={<Coi />} />
            <Route path="/GenieEditform" element={<GenieEditform />} />
            <Route path="/GenieEdit" element={<GenieEdit />} />
            <Route path="/GenesisEdit" element={<GenesisEdit />} />
            <Route path="/GeshurEdit" element={<GeshurEdit />} />
            <Route path="/JobwaysLLPEdit" element={<JobwaysLLPEdit />} />
            <Route path="/JobwaysLLCEdit" element={<JobwaysLLCEdit />} />
            <Route path="/KACEEEdit" element={<KACEEEdit />} />
            <Route path="/RapidEdit" element={<RapidEdit />} />
            <Route path="/MercuryInvoice" element={<MercuryInvoice />} />
            <Route
              path="/MercuryInvoiceform"
              element={<MercuryInvoiceform />}
            />
            <Route path="/Paystubsubbox" element={<Paystubsubbox />} />
            <Route path="/SdiStubform" element={<SdiStubform />} />
            <Route path="/Paystubsdi" element={<Paystubsdi />} />
            <Route path="/Paystubfli" element={<Paystubfli />} />
            <Route path="/Paystubsdifli" element={<Paystubsdifli />} />
            <Route path="/t4" element={<T4 />} />
            <Route path="/t4form" element={<T4form />} />
            <Route path="/SM_Invoice" element={<SM_Invoice />} />
            <Route path="/SportsmartLLPEdit" element={<SportsmartLLPEdit />} />
            <Route
              path="/Invoiceform_Genie_Paypal"
              element={<Invoiceform_Genie_Paypal />}
            />
            <Route
              path="/Invoice_Genie_paypal"
              element={<Invoice_Genie_paypal />}
            />

            <Route path="/Resume_services" element={<RESUME_MAIN />} />
            <Route
              path="/Pre_Agreement_form"
              element={<Pre_Agreement_form />}
            />
            <Route
              path="/Post_Agreement_form"
              element={<Post_Agreement_form />}
            />

            <Route path="/Pre_Agreement" element={<Pre_Agreement />} />

            <Route path="/Post_Agreement" element={<Post_Agreement/>} />
          </Routes>
        </AuthState>
      </BrowserRouter>
    </div>
  );
}

export default App;
