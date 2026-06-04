// src/pages/Terms.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Terms = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Effective from <span className="font-medium">01/07/2025</span> –{" "}
              <span className="font-medium">01/07/2026</span>
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              These terms and conditions govern the provision of goods and services by{" "}
              <span className="font-semibold">All Building &amp; Property Services Pty Ltd (ABPS)</span>
              . By accepting a quotation, placing an order, or instructing ABPS to proceed, the Customer
              agrees to be bound by these terms.
            </p>
          </header>

          {/* 1. Quotes */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Quotes</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                All quotes are valid for thirty (30) days from the date of the quotation. If acceptance
                is received after this period has lapsed, the job may be required to be requoted.
              </li>
              <li>
                Unless specifically stated otherwise, all quotations are based on costs of labour and
                materials at the date of the quotation and are subject to price variation.
              </li>
              <li>
                Unless specifically stated otherwise, all quotations are based on the following
                assumptions:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    that supplier items and major material items can be ordered, and stored either on
                    site or off site;
                  </li>
                  <li>that free and unrestricted access to all required work areas will be provided;</li>
                  <li>
                    that the work will be conducted during regular business hours Monday to Friday 8am
                    to 5pm;
                  </li>
                  <li>
                    that the work for which this quotation is submitted will be executed in an
                    environment free of hazardous material.
                  </li>
                </ul>
              </li>
              <li>
                The break-up of prices quoted is submitted for the purpose of a guide only. Should any
                of the quoted figures deviate from the actual figures, we reserve the right to revise the
                amount tendered.
              </li>
              <li>
                The Customer must communicate acceptance of the quotation before Works will be scheduled.
              </li>
            </ol>
          </section>

          {/* Agreement + Definitions */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Agreement</h2>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">Definitions</h3>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-700 space-y-3">
              <p>
                <span className="font-semibold">“ABPS”</span> means All Building and Property Services Pty Ltd (ABN 49 645 563 597).
              </p>
              <p>
                <span className="font-semibold">“Customer”</span> shall mean the customer (or any person acting on behalf of and with the
                authority of the customer) as described on any quotation, work authorisation or other
                form as provided by ABPS to the customer.
              </p>
              <p>
                <span className="font-semibold">“Goods”</span> shall mean goods supplied by ABPS to the Customer (and where the context so
                permits shall include any supply of services) and are as described on the invoices,
                quotation, work authorisation or any other forms as provided by ABPS.
              </p>
              <p>
                <span className="font-semibold">“Works”</span> shall mean all Goods supplied and work performed by ABPS to the Customer and
                includes any advice or recommendations (and where the context so permits shall include
                any supply of Goods as defined above).
              </p>
              <p>
                <span className="font-semibold">“Price”</span> shall mean the price payable for the Goods and/or Works as agreed between ABPS
                and the Customer.
              </p>
            </div>
          </section>

          {/* 1. Acceptance */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Acceptance</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                Any instructions from the Customer placing an order or accepting a quote shall
                constitute acceptance of these terms and conditions.
              </li>
              <li>These terms and conditions may only be altered by agreement between the parties, in writing.</li>
            </ol>
          </section>

          {/* 2. The Works */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">2. The Works</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>ABPS will provide the Works to the Customer and the Customer will pay the Price to ABPS for performing those Works.</li>
              <li>
                All descriptive specifications, illustrations, drawings, dimensions etc, furnished by
                ABPS are approximate only and are intended to be by way of general description of the
                Goods and do not necessarily form part of the contract unless specifically identified as
                such in writing.
              </li>
              <li>
                Where it is practical, ABPS reserves the right to deliver the Goods and/or carry out the
                works in stages. In such instances, progress payments and billings for each instalment
                shall be due in accordance with clause 5 below.
              </li>
              <li>Any additional work not covered in quoted costs will attract additional time charges at the current rate.</li>
            </ol>
          </section>

          {/* 3. Exclusions */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">3. Exclusions</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li className="list-none">
                3.2 Unless specifically agreed by the parties, ABPS will not:
                <span className="block mt-2">a) Be liable for the existing damages</span>
              </li>
            </ol>
          </section>

          {/* 4. Work Site Access */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Work Site Access</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>The Customer will provide free unrestricted access to all required work areas.</li>
              <li>ABPS will conduct the Works between regular business hours being 8am to 5pm Monday to Friday, unless otherwise agreed.</li>
            </ol>
          </section>

          {/* 5. Payment */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Payment</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                ABPS will render an invoice to the Customer which is to be paid within 14 days under
                Building and Construction Industry Security of Payment Act 1999, unless otherwise stated
                on the invoice.
              </li>
              <li>
                Invoices that are not paid by the Customer within 14 days (or the period specified on
                the invoice) will be deemed a Payment Default.
              </li>
              <li>Payment Defaults will be charged interest at a rate of 2.5% per 30 days until the date of payment.</li>
              <li>Payment defaults that are 30 days or more overdue may be handed over to a debt collection agency or solicitor.</li>
              <li>
                Any costs incurred by ABPS in obtaining payment of outstanding invoices including legal
                costs and/or collection agency fees will be the sole responsibility of the Customer.
              </li>
            </ol>
          </section>

          {/* 6. Compliance */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Compliance</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>ABPS will perform all work in compliance with applicable Australian Standards in force at the time of the work.</li>
              <li>
                Where required, the Customer shall obtain (at their own expense) all licenses and
                approval that may be required for the Works.
              </li>
            </ol>
          </section>

          {/* 7. Risk and Title */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Risk and Title of Property</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>The risk in all goods supplied shall pass to the Customer upon delivery.</li>
              <li>All goods supplied shall remain the property of ABPS until all sums due have been paid in full.</li>
              <li>
                Should full payment remain outstanding for more than 60 days, the Customer authorises
                ABPS to enter the premises where the Goods have been delivered or installed and regain
                possession of the Goods.
              </li>
            </ol>
          </section>

          {/* 8. Hazardous Materials / Safety */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              8. Hazardous Materials / Worksite Safety
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                The Customer shall inform ABPS of:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>general and specific safety requirements as and when they arise, in relation to the site; and</li>
                  <li>any incident or potential hazard that may cause harm to ABPS personnel</li>
                </ul>
              </li>
              <li>
                The Customer agrees that the site will comply with any occupational health and safety
                laws relating to building/construction sites and any other relevant safety standards or
                legislation.
              </li>
              <li>
                The Customer accepts full responsibility for the resolution of any problems and for
                delays and additional costs which may result from the presence of hazardous materials in
                or about the site on which the Works (or any part thereof) are being performed.
              </li>
              <li>
                If during the course of work where Works are being conducted within and around the work
                zone that it is found to be unsafe by ABPS, the Customer will be immediately notified.
              </li>
            </ol>
          </section>

          {/* 9. Cancellation */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">9. Cancellation</h2>
            <p className="text-gray-700">
              The Customer may at its option cancel the Works, or any part thereof, at any time. The
              Customer will be liable to pay for materials and services provided to the date of
              cancellation.
            </p>
          </section>

          {/* 10. Insurance and Warranty (note original numbering typo keeps “9.1”) */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              10. Insurance and Warranty
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li className="list-none">
                9.1 ABPS maintains adequate insurance that protects their property, their employees and
                the interest of third parties resulting from the negligence of ABPS.
              </li>
              <li className="list-none">
                9.2 ABPS warrants its work to be defect free for a period of twelve (12) months from
                invoice date. Work completed under the Home Building Act 1998 will be covered under the
                statutory warranties.
              </li>
              <li className="list-none">
                9.3 ABPS shall have the first option to remedy any defect within the warranty period
                (Warranty Work).
              </li>
              <li className="list-none">9.4 All Warranty Work shall be conducted during regular business hours.</li>
            </ol>
          </section>

          {/* 10. Limitation of Liability and Excepted Risks */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              10. Limitation of Liability and Excepted Risks
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                The Customer acknowledges that they have made their own assessment as to the condition
                quality, value, suitability, and fitness for the purpose of ABPS.
              </li>
              <li>
                ABPS shall not be liable or be deemed to be in breach of contract by reason of any
                delay in performing, or any failure to perform any of the Works if the delay or failure
                was due to any cause beyond ABPS control, including but not limited to an act of God,
                government act, fire explosion, accident, discovery of hazardous material, civil
                commotion or industrial dispute.
              </li>
              <li>
                ABPS shall be under no liability whatsoever to the Customer for any indirect and/or
                consequential loss and/or expense (including loss of profit) suffered by the Customer
                arising out of a breach of these Terms and Conditions.
              </li>
              <li>
                In the event of any breach of this contract by ABPS the remedies of the Customer shall
                be limited to damages which under no circumstances shall exceed the Price.
              </li>
              <li>
                The Customer shall not be entitled to set off against, or deduct from the Price, sums
                owed or claimed to be owed to the Customer by ABPS nor to withhold payment of any
                invoice because part of that invoice is in dispute.
              </li>
            </ol>
          </section>

          {/* 11. General */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">11. General</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                In the event of conflict between these conditions and those which may be included in, or
                implied by any document forming part of an enquiry, specification, quotation, order or
                contract, then these conditions prevail except in as far as they are expressly varied by
                us in writing or by law.
              </li>
              <li>
                This agreement is governed by, and is to be construed in accordance with the law for the
                time being of Western Australia. The Parties hereby agree to submit to the non-exclusive
                jurisdiction of the Courts of the State.
              </li>
            </ol>
          </section>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Terms;
