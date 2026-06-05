"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const intro = [
  "These Terms and Conditions (“Terms”) govern all quotations, work orders, goods and services supplied by All Building and Property Services Pty Ltd ABN 49 645 563 597 (“the Company”, “we”, “us”, “our”) to the customer for whom the work is carried out (“the Client”, “you”). Where the Client is an owners corporation, the Client includes the owners corporation and any strata managing agent acting on its behalf.",
  "Nothing in these Terms excludes, restricts or modifies any guarantee, warranty, right or remedy that cannot lawfully be excluded under the Australian Consumer Law, the Home Building Act 1989 (NSW), the Building and Construction Industry Security of Payment Act 1999 (NSW) or any other applicable law. Where any clause is inconsistent with such a law, that law prevails and the clause is read down to the extent necessary to comply.",
];

const sections = [
  {
    title: "1. Definitions",
    clauses: [
      "1.1 “Works” means the building, remedial, repair, maintenance, installation or handyman work, and any goods or materials supplied, described in our quotation, work order or invoice.",
      "1.2 “Quotation” means a written estimate or quote issued by the Company for the Works.",
      "1.3 “Contract” means the agreement between the Company and the Client comprising the Quotation or work order, these Terms, and any variation agreed under clause 4.",
      "1.4 “ACL” means the Australian Consumer Law set out in Schedule 2 to the Competition and Consumer Act 2010 (Cth). “SOP Act” means the Building and Construction Industry Security of Payment Act 1999 (NSW).",
    ],
  },
  {
    title: "2. Quotations and pricing",
    clauses: [
      "2.1 Unless stated otherwise, a Quotation is valid for 30 days from its date and may be withdrawn or revised by the Company before acceptance.",
      "2.2 A Quotation is based on the Works being carried out during normal business hours and on the conditions reasonably visible and known at the date of quoting. It excludes work, materials or access not expressly described.",
      "2.3 Prices are in Australian dollars. Where a Quotation is expressed as an estimate, allowance or “provisional sum”, the final price is calculated on the actual labour, materials and disbursements reasonably incurred.",
    ],
  },
  {
    title: "3. Acceptance and formation of contract",
    clauses: [
      "3.1 A binding Contract is formed when the Client accepts a Quotation in writing, issues a work order or instruction to proceed, or otherwise authorises the Company to commence the Works. Acceptance of the Quotation or commencement of the Works constitutes acceptance of these Terms.",
      "3.2 These Terms apply to the Contract and to all future dealings between the parties, and prevail over any inconsistent terms put forward by the Client unless varied in writing signed by the Company.",
    ],
  },
  {
    title: "4. Variations",
    clauses: [
      "4.1 Any change to the scope, specification, materials or program of the Works is a variation. Variations are to be agreed in writing where practicable, but where the Client requests or directs work outside the agreed scope, that work is chargeable at the Company’s applicable rates.",
      "4.2 The Company is not obliged to commence a variation until it is agreed, and a variation may affect the price and the completion time.",
    ],
  },
  {
    title: "5. Payment",
    clauses: [
      "5.1 Unless the invoice or Quotation states otherwise, payment is due within 14 days of the date of invoice. The Company may issue progress claims for staged or ongoing Works.",
      "5.2 Payment is to be made by the methods shown on the invoice (direct deposit, BPAY or as otherwise stated), quoting the invoice number as the payment reference.",
      "5.3 The Client must pay the full invoiced amount without set-off, deduction or withholding, except to the extent permitted by law (including the SOP Act) or otherwise agreed in writing.",
      "5.4 Where a deposit or progress payment is required, the Company may decline to commence or continue the Works until that payment is received.",
    ],
  },
  {
    title: "6. Security of Payment Act 1999 (NSW)",
    clauses: [
      "6.1 Each invoice or progress claim issued for construction work or related goods and services is, and may be stated to be, a payment claim made under the SOP Act.",
      "6.2 If the Client disputes any amount claimed, the Client must provide a payment schedule within the time required by the SOP Act, failing which the Client becomes liable for the full claimed amount and the Company may exercise its rights under that Act, including adjudication and suspension of work.",
      "6.3 Nothing in these Terms limits or excludes either party’s rights under the SOP Act, and any “pay when paid” arrangement is of no effect.",
    ],
  },
  {
    title: "7. Overdue accounts, interest and recovery costs",
    clauses: [
      "7.1 Interest accrues on overdue amounts at 10% per annum calculated daily from the due date until paid, or at the rate payable under section 11 of the SOP Act, whichever is the greater.",
      "7.2 The Client is liable for all reasonable costs incurred by the Company in recovering overdue amounts, including debt collection fees, dishonour fees and legal costs on a full indemnity basis.",
    ],
  },
  {
    title: "8. GST",
    clauses: [
      "8.1 Unless stated as inclusive, prices are exclusive of GST. Where GST applies to a supply, the Client must pay the GST in addition to the price upon issue of a valid tax invoice.",
    ],
  },
  {
    title: "9. Client-supplied materials and equipment",
    clauses: [
      "9.1 Where the Client supplies any unit, fitting, fixture, appliance or material for installation by the Company, the Company is responsible only for its workmanship in installing the item.",
      "9.2 Any manufacturing defect, product fault, fitness-for-purpose issue or warranty claim relating to a Client-supplied item is the responsibility of the Client and its supplier or manufacturer, not the Company. The Company is not liable for delays, rework or consequences arising from a defective, unsuitable or incomplete Client-supplied item.",
    ],
  },
  {
    title: "10. Materials, title and security interest (PPSA)",
    clauses: [
      "10.1 Title in goods and materials supplied by the Company does not pass to the Client until the Company has received payment in full for those goods and for all other amounts owing by the Client, except where the goods have become fixtures.",
      "10.2 Until title passes, the Client holds the goods as bailee, and the Company may recover or remove unfixed goods for which payment has not been made.",
      "10.3 These Terms constitute a security agreement and create a security interest in favour of the Company under the Personal Property Securities Act 2009 (Cth) (“PPSA”). The Client consents to the Company registering its security interest on the Personal Property Securities Register and agrees to do anything reasonably required to enable registration. To the extent permitted, the Client waives its right to receive notices under the PPSA and agrees that Part 4 Chapter 4 of the PPSA does not apply.",
    ],
  },
  {
    title: "11. Site access and Client obligations",
    clauses: [
      "11.1 The Client must provide safe, clear and timely access to the site and to the work areas, including any keys, building access, parking and a nominated site contact, and must ensure the site is safe to work in.",
      "11.2 The Client must provide accurate information about the site, including the location of services, prior works and any known defects or hazards, and is responsible for obtaining any owners corporation, by-law or neighbour consents required for the Works.",
      "11.3 Delay or additional cost caused by inadequate access, incorrect information or unavailability of the site is to the Client’s account.",
    ],
  },
  {
    title: "12. Latent conditions and hazardous materials",
    clauses: [
      "12.1 The Company is not responsible for conditions that were not reasonably visible or disclosed at the time of quoting, including hidden defects, concealed services, structural or waterproofing failures, and substrate conditions revealed only once work has commenced (“latent conditions”).",
      "12.2 If asbestos, lead, mould, contaminated material or other hazardous material is suspected or encountered, the Company will stop work in the affected area and notify the Client. Identification, testing, removal and disposal of hazardous material is to be carried out by an appropriately licensed party at the Client’s cost.",
      "12.3 Latent conditions and hazardous materials may give rise to a variation under clause 4 affecting the price and program.",
    ],
  },
  {
    title: "13. Statutory warranties and consumer guarantees",
    clauses: [
      "13.1 Where the Works are residential building work within the meaning of the Home Building Act 1989 (NSW), the statutory warranties in section 18B of that Act apply and cannot be excluded or restricted by these Terms.",
      "13.2 Where the Client is a “consumer” under the ACL, the consumer guarantees in the ACL apply to the goods and services supplied. Nothing in these Terms excludes, restricts or modifies those guarantees where to do so would contravene the ACL or render a term void.",
      "13.3 For residential building work where the contract price exceeds the threshold prescribed under the Home Building Act 1989 (NSW), the Company will provide home building compensation (insurance) cover and a written contract as required by that Act.",
    ],
  },
  {
    title: "14. Workmanship warranty",
    clauses: [
      "14.1 In addition to any rights the Client has under clause 13, the Company warrants its workmanship against defects arising from faulty workmanship for a period of 12 months from completion of the Works, or such longer period as is required by law.",
      "14.2 This warranty does not cover fair wear and tear, misuse, lack of maintenance, works or alterations by others, Client-supplied items (see clause 9), or conditions outside the Company’s control. The Client must notify the Company of any defect promptly and allow the Company a reasonable opportunity to inspect and rectify it.",
    ],
  },
  {
    title: "15. Licensing and compliance certificates",
    clauses: [
      "15.1 The Company holds Builder Licence 364306C and carries out electrical work under licence 373688C. Where electrical work is performed, a Certificate of Compliance for Electrical Work (CCEW) is issued as required.",
      "15.2 Compliance and completion certificates are provided where required by law. The Company’s scope is limited to the licensed trades and work described in the Quotation.",
    ],
  },
  {
    title: "16. Insurance",
    clauses: [
      "16.1 The Company maintains public liability insurance and, where required for residential building work, home building compensation cover. Insurance of the Client’s own property, contents and existing building elements remains the Client’s responsibility.",
    ],
  },
  {
    title: "17. Limitation of liability",
    clauses: [
      "17.1 Subject to clause 13 and to the maximum extent permitted by law, the Company’s liability for a failure to comply with a consumer guarantee in respect of services not of a kind ordinarily acquired for personal, domestic or household use is limited, at the Company’s option, to supplying the services again or paying the cost of having them supplied again.",
      "17.2 To the maximum extent permitted by law, the Company is not liable for indirect or consequential loss, loss of rent, loss of profit, or loss arising from latent conditions, Client-supplied items, pre-existing defects, or acts or omissions of the Client or third parties.",
    ],
  },
  {
    title: "18. Delays and force majeure",
    clauses: [
      "18.1 Timeframes are estimates only. The Company is not liable for delay or failure to perform caused by events beyond its reasonable control, including weather, supply shortages, industrial action, access restrictions, or the act or default of the Client or a third party.",
    ],
  },
  {
    title: "19. Cancellation and suspension",
    clauses: [
      "19.1 If the Client cancels accepted Works, the Client must pay for all work performed and materials ordered or supplied up to the date of cancellation, plus any non-recoverable costs reasonably incurred.",
      "19.2 The Company may suspend or terminate the Works if the Client fails to pay a due amount, fails to provide access, or breaches the Contract, without limiting the Company’s other rights including under the SOP Act.",
    ],
  },
  {
    title: "20. Privacy",
    clauses: [
      "20.1 The Company collects and handles personal information in accordance with its Privacy Policy, available at allbuildingservices.com.au/privacy-policy.",
    ],
  },
  {
    title: "21. Dispute resolution",
    clauses: [
      "21.1 If a dispute arises, the parties will first attempt to resolve it by good-faith negotiation between senior representatives. This clause does not prevent either party from seeking urgent relief, exercising rights under the SOP Act, or applying to NSW Fair Trading or the NSW Civil and Administrative Tribunal (NCAT).",
    ],
  },
  {
    title: "22. General",
    clauses: [
      "22.1 These Terms are governed by the laws of New South Wales, and the parties submit to the jurisdiction of its courts and tribunals.",
      "22.2 If any clause is void, illegal or unenforceable, it is severed and the remaining clauses continue in force.",
      "22.3 A failure or delay by the Company to exercise a right does not waive that right. The Client may not assign the Contract without the Company’s written consent.",
      "22.4 The Company may update these Terms from time to time. The Terms in force at the date the relevant Quotation or work order is accepted apply to that Contract.",
    ],
  },
];

const InvoiceTerms = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <header className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Terms &amp; Conditions
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              Terms &amp; Conditions – Invoice
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Effective from <span className="font-medium">01/07/2025</span> –{" "}
              <span className="font-medium">30/06/2026</span>
            </p>
          </header>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  {section.clauses.map((clause) => (
                    <p key={clause}>{clause}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </section>
  );
};

export default InvoiceTerms;
