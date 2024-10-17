import "./PaymentType.scss";
import PaymentTypeImg from "../../assets/payment-type.png";

const PaymentType = () => {
  return (
    <section className="payment_type ">
        <div className="wrapper payment_type_container">
            <div className="payment_type_left ">
                <p>СПОСОБ ОПЛАТЫ</p>
                <h2>Подойдет любая карта</h2>
            </div>
            <div className="payment_type_right">
            <img src={PaymentTypeImg} alt="" />
            </div>

        </div>
        
    </section>
  )
}

export default PaymentType