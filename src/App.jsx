import Header from "./components/Header/Header";
import WelcomeMain from "./components/WelcomePay2/WelcomeMain";
import PaymentEvolution from "./components/PaymentEvolution/PaymentEvolution";
import Application from "./components/Application/Application";
import Onboarding from "./components/Onborading/Onboarding";
import PaymentType from "./components/PaymentType/PaymentType";
import TerminalType from "./components/TerminalType/TerminalType";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Request from "./components/Request/Request";
import IdentificationType from "./components/IdentificationType/IdentificationType";

const App = () => {
 

  return (
    <>
    <Header />
    <WelcomeMain />
    <PaymentEvolution /> 
    <Application />
    <Onboarding />
    <PaymentType />
    <TerminalType />
    <IdentificationType /> 
    <FAQ />
    <Request />
    <Footer />
    </>
  )
}

export default App