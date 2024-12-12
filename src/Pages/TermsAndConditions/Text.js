import { useEffect, useState } from "react";

function Text() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/conditions`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setData(res);
            console.log("save data:", res);
          });
      }, []);
    return (
        <div className="container">
            {data?.map((item)=>{
                return (
                    <div key={item._id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })}
			<h3>Article 1: Definitions</h3>
            <p>1.1 “Agreement”: an agreement between a Client and Flyinpectors that is reached after the acceptance of these Terms by the Client. For Justice as a Service the Agreement shall be considered reached, when the Client has signed the Assignment Form or an Authority Document in addition to accepting these Terms.</p>
            <p>1.2 “Flyinspectors”: Aviation + LLC, a company incorporated in Georgia with its registered at 34 Tornike Eristavi Str, Chiatura, Georgia, 5500</p>
            <p>1.3 ”Air Passenger Rights Regulation”: any law, regulation, directive or similar, whether issued on state, federal, EU, national or regional level, that establishes rules on monetary compensation, damages or refund to passengers in the event of overbooked, delayed, cancelled or otherwise disrupted flights or luggage claims.</p>
            <p>1.4 “Assignment Form”: the document, whereby the Client, subject to the terms and conditions therein, assigns ownership of the Claim to Flyinspectors.</p>
            <p>1.5 “Authority Document”: a document provided by Flyinspectors to the Client, which authorizes Flyinspectors or one of Flyinspectors’s affiliates or partners to act on behalf of the Client. The document may be in many shapes and forms, due to various jurisdictional requirements, including, but not limited to, a Power of Attorney or a Client Care Agreement.</p>
            <p>1.6 “Claim”: any claim against an airline for monetary compensation, damages or refund pursuant to Air Passenger Rights Regulation.</p>
            <p>1.7 “Client(s)”: person(s) that has accepted these Terms.</p>
            <p>1.8 “Flight Compensation”: total amount of money paid by an airline in relation to a Claim as compensation, settlement, gesture of goodwill or otherwise, to the Client or Flyinspectors after the Client has accepted these Terms. For the avoidance of doubt, Flight Compensation do not include any payments or reimbursements of attorney’s fees, cost of legal advice, court fees, collection cost, interest or similar, which payments shall belong solely to Flyinspectors.</p>
            <p>1.9 “Information Service”: is Flyinspectors’s provision of flight information, airline information, airport information, other travel related information, information about air passenger rights and consumer protection laws. The information will both be specifically relevant to the Client’s travels and be of more a generic context, or news about changes in air passenger rights. The information will be delivered through electronic communication, including e-mail.</p>
            <p>1.10 “Justice as a Service”: is Flyinspectors’s pursuit of a Claim, including, if necessary, by Legal Action.</p>
            <p>1.11 “Legal Action”: filing a Claim with a court or government body, such as a national enforcement body (NEB), or handing over a Claim to a contracted legal representative, such as an attorney or law firm.</p>
            <p>1.12 “Legal Fast Track”: is a procedure for airlines that usually do not pay Flight Compensation, unless Legal Action is taken. If Flyinspectors provides Justice as a Service by provision of Legal Fast Track, Flyinspectors will charge both its Service Fee and Legal Action fee due to the increased risk and cost for Flyinspectors.</p>
            <p>1.13”Price List”: appendix attached to this Terms specifying accepted currencies, methods of payment and all fees charged by Flyinspectors.</p>
            <p>1.14 ”Regulation 261/04”: Regulation (EC) No. 261/2004 of the European Parliament and of the Council dated 11 February 2004, establishing common rules on compensation and assistance to passengers in the event of denied boarding and of cancellation or long delays of flights.</p>
            <h3>Article 2: Conclusion of Contract, Specifications</h3>
            <p>2.1 After the Client has accepted these Terms, Flyinspectors agrees to deliver and the Client agrees to receive Eligibility Service and Information Service.</p>
            <p>2.2 After the Client has accepted these Terms and signed either the Assignment Form or Authority Document, the Client agrees to receive Justice as a Service and Flyinspectors agrees to deliver Justice as a Service, unless Flyinspectors notify the Client without unreasonable delay that Flyinspectors cannot deliver Justice as a Service for such Claim.</p>
            <p>2.3 By entering into an Agreement with Flyinspectors, the Client warrants that he/she is authorized and has legal capacity to enter into the Agreement on his/her own behalf and, where applicable, on behalf of his/her fellow passengers. By signing the Assignment Form or an Authority Document, the Client warrants that he/she is authorized and has legal capacity to sign the Assignment Form or an Authority Document on his/her own behalf and, where applicable, on behalf of his/her minor fellow passengers.</p>
            <p>2.4 The Client acknowledges that Flyinspectors only seeks Flight Compensation. The Client agrees that Flyinspectors will not accept travel vouchers and/or other services as Flight Compensation and that such offer from airlines will be considered as refusal of payment, unless Flyinspectors determines that the likelihood of a more favorable outcome for the Client is low and it under the circumstances would be the best choice to accept such offer.</p>
            <p>2.5 The Client warrants that the Claim has not been assigned to third parties and no legal dispute is pending or expected between the Client and the airline in the same matter.</p>
            <p>2.6 After signing the Assignment Form, the Client may not assign the Claim to any other party as the legal title to the claim has been assigned to Flyinspectors. Any existing engagements or assignments, if any, must be cancelled before signing the Assignment Form or an Authority Document. For the avoidance of doubt, in the event that the Client has signed an Authority Document, the Client can withdraw the authority given in the Authority Document by giving written notice to Flyinspectors.</p>
            <p>2.7 If the Client receives any direct payments or any other compensation from the airline concerned after entering into the Agreement, the Client shall be obliged to advise Flyinspectors without delay. Such payments shall be considered Flight Compensation and entitle Flyinspectors to its Service Fee and Legal Action Fee, if Legal Action was taken by Flyinspectors prior to the Client receiving payment from the airline concerned. For the avoidance of doubt, Flight Compensation do not include any payments or reimbursements of attorney’s fees, cost of legal advice, court fees, collection cost, interest or similar, which payments shall belong solely to Flyinspectors.</p>
            <p>2.8 After signing the Assignment Form or an Authority Document, the Client shall be obliged to cease negotiations with the airline concerned and direct any contact made by the airline to Flyinspectors in order to ensure that Flyinspectors achieves the best result possible.</p>
            <p>2.9 The contract concluded between you and Flyinspectors shall expire once the Claim has been settled or if Flyinspectors considers recovery unpromising after due assessment and has notified you of this fact.</p>
            <h3>Article 3: Fees and Payments</h3>
            <p>3.1 Flyinspectors provides Eligibility Service, Information Service free of charge.</p>
            <p>3.2 Flyinspectors provides Justice as a Service free of charge, unless Flyinspectors is successful in collecting Flight Compensation. If Flyinspectors is successful it will transfer the agreed part of the Flight Compensation to the Client, subject only to fees that may apply pursuant to the Price List. If Flyinspectors is successful, but the Flight Compensation and/or attorney’s fees, court fees, interest or similar has been transferred directly from the airline to the Client, the Client will without unreasonable delay transfer Flyinspectors’s fees pursuant to the Price List and the received attorney’s fees, court fees, interest or similar, if any, to Flyinspectors.</p>
            <p>3.3 Payment of the agreed part of the Flight Compensation to the Client will be done pursuant to the options in the Price List.</p>
            <p>3.4 If the Client has provided wrong or insufficient information needed to pay the Flight Compensation and it is returned to Flyinspectors and the Client, after several reminders and reasonable endeavors from Flyinspectors to contact the Client by other means than the email provided by the Client to Flyinspectors, does not respond to correct or provide information needed to pay the agreed part of the Flight Compensation, Flyinspectors shall be entitled to keep the part of the Flight Compensation that otherwise should have been transferred to the Client.</p>
            <p>3.5 Client will pay fees to Flyinspectors in the amount of the agreed percentage of the enforced Claim plus statutory VAT. The calculation of the Fees is based on all payments made by the airline after Flyinspectors has sent its payment request, with the exception of any accrued interest on default on the claim, which is owed in full to Flyinspectors. The percentage applicable for the calculation of the Fees shall be specified in the Order Process. If, with your consent, the claim is settled in kind rather than in cash (e.g. flight vouchers), unless agreed otherwise, we shall be entitled to a corresponding commission in cash based on the value of the payment in kind. We shall also be entitled to Fees once the airline has made payments to you (e.g. in the form of a cheque).</p>
            <p>3.6 When Flyinspectors has paid the agreed Flight Compensation pursuant to the instruction of and method selection by the Client, Flyinspectors shall not be liable for:</p>
            <ul>
            <li>Checks, prepaid debit cards, credit cards and similar lost in transit to the Client;</li>
            <li>Any effect of the Client giving wrong bank account information, wrong address or similar, including, but not limited to, the Flight Compensation being paid to the wrong receiver. If Flight Compensation at the fault of the Client has been paid to a wrong receiver, Flyinspectors shall not be obligated to actively reclaim it.</li>
            </ul>
            <p>3.7 No interest may be claimed for the period between the incoming and outgoing payments. Flyinspectors reserves the right to retain any interest that has been recovered from the airline.</p>
            <p>3.8 Flyinspectors shall not be liable for any amount of compensation, damages or similar, if Flyinspectors is prevented to transfer the payment to the Client by an event beyond its reasonable control, including without limitation, strike, lock-out, labor dispute, act of God, war, riot, civil commotion, malicious damage, compliance with a law or governmental order, rule, regulation or direction, accident, breakdown of plant or machinery, fire, flood and storm.</p>
            <h3>Article 4: Description of Justice as a Service</h3>
            <p>4.1 Flyinspectors asserts the Client’s Claim for Flight Compensation from the operating airline on the basis of Regulation 261/2004 or any other Air Passenger Rights Regulation in force applicable to the Client’s particular air travel.</p>
            <p>4.2 Flight data and information may be submitted to Flyinspectors via website, email, other electronic or software solutions supported by Flyinspectors.</p>
            <p>4.3 To pursue the Claim successfully, Flyinspectors needs the Client’s signed Assignment Form or Authority Document, which he/she can send to Flyinspectors via the email or postal service. On receiving a Client’s signed Assignment Form or Authority Document, Flyinspectors prepares a request for payment and sends it to the operating airline without unreasonable delay and handles all further correspondence. For this part of Justice as a Service, if Flight Compensation is paid, Flyinspectors charges its Service Fee.</p>
            <p>4.4 If the operating airline fails to pay Flight Compensation within a reasonable period after being notified by Flyinspectors and provided the case may be asserted with adequate certainty, Flyinspectors may initiate Legal Action to pursue the Claim. In the event that Legal Action is undertaken and Flight Compensation is paid, Flyinspectors charges the Legal Action Fee in addition to the Service Fee, to cover the additional costs of Legal Action.</p>
            <p>4.5 In the event that a contracted legal representative is used for Legal Action, the Client will allow Flyinspectors to grant the contracted legal representative access to all of the data communicated to Flyinspectors and allow the legal representative to transfer information concerning the proceedings to Flyinspectors. Where a separate COA, Power of Attorney, Statement of Truth, Assignment Form or other additional documents are required by the relevant court, the Client undertakes to sign such additional documents. In case the Client has already signed an Assignment Form and signs a COA, Power of Attorney, Client Care Agreement or similar, the Client and Flyinspectors agree that such Claim is automatically assigned back to the Client immediately prior to the Client signing the COA, Power of Attorney, Client Care Agreement or similar.</p>
            <p>4.6 If the contracted legal representative comes to the conclusion that there are insufficient prospects of success, the Client will be advised about this and neither Flyinspectors nor the contracted legal representative will take further action.</p>
            <p>4.7 If Flyinspectors or the contracted legal representative institute’s legal proceedings to pursue a Claim, Flyinspectors will cover any costs incurred in the event the lawsuit is lost. In the event the lawsuit is won, or a settlement has been reached between the airline and Flyinspectors, Flyinspectors will cover any costs incurred that are not covered by the airline.</p>
            <p>4.8 The Client acknowledges that it is the sole decision of Flyinspectors to accept any settlement offer, since the Client has assigned the Claim to Flyinspectors. In case Flyinspectors acts on behalf of the Client pursuant to an Authority Document, the Client authorizes Flyinspectors to accept or reject settlement offers based on Flyinspectors’s experience with the airline and the advice from external legal representatives.</p>
            <h3>Article 5: Data Protection</h3>
            <p>5.1 Flyinspectors will primarily use the personal data provided by the Client for the purpose of delivering Eligibility Service, Information Service and Justice as a Service accordance with the Agreement. Flyinspectors may also collect personal data for other purposes such as statistics, administration and communication, IT and security administration, physical security, authentication and authorization systems, support systems, collaboration of internal projects and organizational teams and activities. All personal data is collected in accordance with the General Data Protection Regulation, Regulation (EU) 2016/679 (see Privacy Statement).</p>
            <p>5.2 The Client provides Flyinspectors with personal data under the General Data Protection Regulation or other data protection laws that may be applicable, with the explicit permission to process the personal data given and for the use thereof in the context of the Agreement. Flyinspectors will only transfer the personal data to third parties under the conditions as listed below:</p>
            <ul>
            <li>if the Client has given consent;</li>
            <li>if it is for a purpose directly related to the original purpose for which the personal data was collected;</li>
            <li>if it is necessary for the preparation, negotiation and fulfilling the Agreement with the Client;</li>
            <li>if it is required due to legal obligation, administrative or court order;</li>
            <li>if it is required for the establishment or protection of legal claims or in defense of court actions;</li>
            <li>if it serves the prevention of misuse or other illegal activities, such as deliberate attacks, to ensure data security</li>
            </ul>
            <h3>Article 6: Consumers’ Cancellation Right and Cancellation Policy</h3>
            <p>6.1 If you qualify as a consumer pursuant to EU-consumer regulations i.e. you are a natural person who enters into a legal transaction for a purpose that is neither your commercial nor your independent vocational activity, you have a statutory right of withdrawal.</p>
            <p>6.2 You can withdraw your acceptance of our Agreement within 14 days from the conclusion of the Agreement (e.g., letter, email) without the need to specify any reasons. To exercise your right to withdrawal, the withdrawal must be communicated within the 14-day period mentioned above and it must clearly state that you wish to withdraw from the Agreement. Due to the nature of the service provided to you, you cannot withdraw from our Agreement, if we have informed you that the airline has accepted the Claim, as we in such event have completed the service you requested. The withdrawal can be sent to:</p>
            <p>
                <small>
                    Flyinspectors LP<br />
                    10/12 Aleksidze street<br />
                    0194, Tbilisi, Georgia<br />
                    <strong>Or</strong><br/>
                    E-mail:info@flyinspectors.com
                </small>
                </p>
</div>
    )
}

export default Text;
