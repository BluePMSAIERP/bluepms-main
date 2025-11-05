<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Opportunity &amp; Sales Pipeline</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Opportunity &amp; Sales Pipeline</h1>
        <p>Visualize and accelerate deals through predictive insights, Kanban progression, and quote automation that keeps teams aligned.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="CollaborationTeamManagement.aspx">Collaborate with Team</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Opportunity Details</h2>
            <div class="form-grid">
                <div>
                    <label for="OpportunityName">Opportunity Name</label>
                    <input id="OpportunityName" type="text" placeholder="Global Rollout Program" />
                </div>
                <div>
                    <label for="LinkedCustomer">Customer ID</label>
                    <input id="LinkedCustomer" type="number" placeholder="1289" />
                </div>
                <div>
                    <label for="Stage">Stage</label>
                    <select id="Stage">
                        <option>Prospect</option>
                        <option>Quote</option>
                        <option>Negotiate</option>
                        <option>Closed Won</option>
                        <option>Closed Lost</option>
                    </select>
                </div>
                <div>
                    <label for="Amount">Amount (USD)</label>
                    <input id="Amount" type="number" placeholder="250000" />
                </div>
                <div>
                    <label for="Probability">Probability %</label>
                    <input id="Probability" type="number" min="0" max="100" value="65" />
                </div>
                <div>
                    <label for="CloseDate">Expected Close Date</label>
                    <input id="CloseDate" type="date" />
                </div>
            </div>
            <label for="Products">Products / Services</label>
            <textarea id="Products" placeholder="Enterprise CX Suite, AI Insights Module, Premium Support"></textarea>
            <div class="button-row">
                <button type="button">Generate Quote PDF</button>
                <button type="button">Predict Win Likelihood</button>
                <button type="button">Create Forecast Entry</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Pipeline View</h2>
            <div class="grid">
                <div class="card">
                    <h2>Prospect</h2>
                    <div class="badge-grid">
                        <span class="badge">Acme Renewal</span>
                        <span class="badge">Northwind Upgrade</span>
                    </div>
                </div>
                <div class="card">
                    <h2>Quote</h2>
                    <div class="badge-grid">
                        <span class="badge warning">Globex Pilot</span>
                        <span class="badge">Fabrikam CX</span>
                    </div>
                </div>
                <div class="card">
                    <h2>Negotiation</h2>
                    <div class="badge-grid">
                        <span class="badge">Initech Expansion</span>
                    </div>
                </div>
                <div class="card">
                    <h2>Closed</h2>
                    <div class="badge-grid">
                        <span class="badge success">Contoso Omni</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Forecast &amp; Alerts</h2>
            <div class="grid">
                <div class="metric">
                    <span>$1.8M</span>
                    Forecasted for Quarter
                </div>
                <div class="metric">
                    <span>4</span>
                    Deals Stalled &gt; 14 days
                </div>
                <div class="metric">
                    <span>92%</span>
                    AI Win Prediction (Top Deal)
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Pipeline alerts notify owners via Teams, Slack, and email.</div>
    </footer>
</div>
</body>
</html>
