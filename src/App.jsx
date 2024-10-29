import Navbar from "./components/navbar/Navbar";
import WelcomeMain from "./components/WelcomeMain/WelcomeMain";
import PaymentEvolution from "./components/PaymentEvolution/PaymentEvolution";
import Application from "./components/Application/Application";
import Onboarding from "./components/Onborading/Onboarding";
import PaymentType from "./components/PaymentType/PaymentType";
import TerminalType from "./components/TerminalType/TerminalType";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Feadback from "./components/Feadback/Feadback";
import IdentificationType from "./components/IdentificationType/IdentificationType";

const App = () => {
 

  return (
    <>
    <Navbar />  
    <WelcomeMain />
   
    <PaymentEvolution />
    <Application />
    <Onboarding />
    <PaymentType />
    <TerminalType />
    {/* <IdentificationType /> */}
    <FAQ />
    {/* <Feadback /> */}
    
    <Footer />
    </>
  )
}

export default App