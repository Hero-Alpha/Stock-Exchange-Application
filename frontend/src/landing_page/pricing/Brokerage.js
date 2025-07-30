import React, { useState } from "react";

const tabs = [
  { id: "equities", label: "Equity" },
  { id: "currency", label: "Currency" },
  { id: "commodities", label: "Commodity" },
];

export default function Brokerage() {
  const [activeTab, setActiveTab] = useState("equities");

  return (
    <section className="charges-sections">
      <div className="container">
        <nav className="tabs">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`tab${activeTab === tab.id ? " sel" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id);
              }}
              data-id={tab.id}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {activeTab === "equities" && (
          <div className="section" id="equities">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th className="hide-on-mobile">F&amp;O - Futures</th>
                    <th className="hide-on-mobile">F&amp;O - Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="charges-heads">Brokerage</td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td className="hide-on-mobile">
                      0.03% or Rs. 20/executed order whichever is lower
                    </td>
                    <td className="hide-on-mobile">Flat Rs. 20 per executed order</td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">STT/CTT</td>
                    <td>0.1% on buy &amp; sell</td>
                    <td>0.025% on the sell side</td>
                    <td className="hide-on-mobile">0.02% on the sell side</td>
                    <td className="hide-on-mobile">
                      <ul className="list-items">
                        <li>
                          0.125% of the intrinsic value on options that are bought and
                          exercised
                        </li>
                        <li>0.1% on sell side (on premium)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="charges-heads">Transaction charges</td>
                    <td>
                      NSE: 0.00297%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00297%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td className="hide-on-mobile">
                      NSE: 0.00173%
                      <br />
                      BSE: 0
                    </td>
                    <td className="hide-on-mobile">
                      NSE: 0.03503% (on premium)
                      <br />
                      BSE: 0.0325% (on premium)
                    </td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">GST</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td className="hide-on-mobile">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td className="hide-on-mobile">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td className="charges-heads">SEBI charges</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td className="hide-on-mobile">₹10 / crore</td>
                    <td className="hide-on-mobile">₹10 / crore</td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">Stamp charges</td>
                    <td>0.015% or ₹1500 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                    <td className="hide-on-mobile">0.002% or ₹200 / crore on buy side</td>
                    <td className="hide-on-mobile">0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "currency" && (
          <div className="section" id="currency">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Currency futures</th>
                    <th>Currency options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="charges-heads">Brokerage</td>
                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                    <td>₹ 20/executed order</td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">STT/CTT</td>
                    <td>No STT</td>
                    <td>No STT</td>
                  </tr>
                  <tr>
                    <td className="charges-heads">Transaction charges</td>
                    <td>
                      NSE: 0.00035%
                      <br />
                      BSE: 0.00045%
                    </td>
                    <td>
                      NSE: 0.0311%
                      <br />
                      BSE: 0.001%
                    </td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">GST</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  </tr>
                  <tr>
                    <td className="charges-heads">SEBI charges</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">Stamp charges</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "commodities" && (
          <div className="section" id="commodities">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Commodity futures</th>
                    <th>Commodity options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="charges-heads">Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>₹ 20/executed order</td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">STT/CTT</td>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>0.05% on sell side</td>
                  </tr>
                  <tr>
                    <td className="charges-heads">Transaction charges</td>
                    <td>
                      MCX: 0.0021%
                      <br />
                      NSE: 0.0001%
                    </td>
                    <td>
                      MCX: 0.0418%
                      <br />
                      NSE: 0.001%
                    </td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">GST</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  </tr>
                  <tr>
                    <td className="charges-heads">SEBI charges</td>
                    <td>
                      <strong>Agri:</strong>
                      <br />
                      ₹1 / crore
                      <br />
                      <strong>Non-agri:</strong>
                      <br />
                      ₹10 / crore
                    </td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr className="grey-back">
                    <td className="charges-heads">Stamp charges</td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
