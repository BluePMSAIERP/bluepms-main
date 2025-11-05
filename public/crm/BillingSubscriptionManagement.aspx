<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Billing &amp; Subscription Management</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Billing &amp; Subscription Management</h1>
        <p>Handle subscription lifecycles, payment processing, and invoicing with proactive alerts and revenue analytics.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="AnalyticsReportingDashboard.aspx">View Revenue Analytics</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Subscription Details</h2>
            <div class="form-grid">
                <div>
                    <label for="SubscriptionCustomerID">Customer ID</label>
                    <input id="SubscriptionCustomerID" type="number" placeholder="1289" />
                </div>
                <div>
                    <label for="SubscriptionType">Subscription Type</label>
                    <select id="SubscriptionType">
                        <option>Premium</option>
                        <option>Standard</option>
                        <option>Lite</option>
                    </select>
                </div>
                <div>
                    <label for="PaymentGateway">Payment Gateway</label>
                    <select id="PaymentGateway">
                        <option>Stripe</option>
                        <option>PayPal</option>
                        <option>Manual</option>
                    </select>
                </div>
                <div>
                    <label for="RenewalDate">Renewal Date</label>
                    <input id="RenewalDate" type="date" />
                </div>
                <div>
                    <label for="UsageMetrics">Usage Metrics</label>
                    <input id="UsageMetrics" type="text" placeholder="API Calls: 12,450" />
                </div>
                <div>
                    <label for="CompanyID">Company ID</label>
                    <input id="CompanyID" type="text" placeholder="COMP-1001" />
                </div>
                <div>
                    <label for="GroupCompanyID">Group Company ID</label>
                    <input id="GroupCompanyID" type="text" placeholder="GC-45" />
                </div>
            </div>
            <div class="button-row">
                <button type="button">Process Payment</button>
                <button type="button">Upgrade Plan</button>
                <button type="button">Generate Invoice</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Invoice History</h2>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Invoice #</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-10421</td>
                            <td>2024-05-01</td>
                            <td>$12,400</td>
                            <td><span class="status-pill success">Paid</span></td>
                        </tr>
                        <tr>
                            <td>INV-10387</td>
                            <td>2024-04-01</td>
                            <td>$12,400</td>
                            <td><span class="status-pill success">Paid</span></td>
                        </tr>
                        <tr>
                            <td>INV-10352</td>
                            <td>2024-03-01</td>
                            <td>$12,400</td>
                            <td><span class="status-pill warning">Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Alerts &amp; Automations</h2>
            <div class="checklist">
                <div class="checklist-item">Send renewal reminders 30/7/1 days prior.</div>
                <div class="checklist-item">Trigger downgrade workflow when usage &lt; 30% for two months.</div>
                <div class="checklist-item">Notify finance for failed payments &gt; 2 attempts.</div>
            </div>
        </section>
    </main>
    <footer>
        <div>Billing actions integrate with finance systems for accurate revenue recognition.</div>
    </footer>
</div>
</body>
</html>
