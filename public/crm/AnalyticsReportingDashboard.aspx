<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Analytics &amp; Reporting Dashboard</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Analytics &amp; Reporting Dashboard</h1>
        <p>Monitor churn, customer lifetime value, engagement, and predictive signals with interactive visualizations and export-ready insights.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="MarketingAutomation.aspx">Switch to Campaign Analytics</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Filters</h2>
            <div class="form-grid">
                <div>
                    <label for="DateRange">Date Range</label>
                    <input id="DateRange" type="text" placeholder="Last 90 Days" />
                </div>
                <div>
                    <label for="Segment">Segment</label>
                    <input id="Segment" type="text" placeholder="VIP Customers" />
                </div>
                <div>
                    <label for="Region">Region</label>
                    <select id="Region">
                        <option>Global</option>
                        <option>Americas</option>
                        <option>EMEA</option>
                        <option>APAC</option>
                    </select>
                </div>
                <div>
                    <label for="ReportType">Report Type</label>
                    <select id="ReportType">
                        <option>Churn</option>
                        <option>Engagement</option>
                        <option>Revenue</option>
                        <option>Pipeline</option>
                    </select>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Refresh Data</button>
                <button type="button">Save Report</button>
                <button type="button">Export to Excel</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Key Metrics</h2>
            <div class="grid">
                <div class="metric">
                    <span>4.2%</span>
                    Churn (Rolling 90 days)
                </div>
                <div class="metric">
                    <span>$18.6k</span>
                    Avg Customer Lifetime Value
                </div>
                <div class="metric">
                    <span>78%</span>
                    Active Engagement Rate
                </div>
                <div class="metric">
                    <span>+12%</span>
                    Predicted Upsell Likelihood
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Visual Insights</h2>
            <div class="grid">
                <div class="chart-placeholder">Churn Trend Chart</div>
                <div class="chart-placeholder">Engagement Heatmap</div>
                <div class="chart-placeholder">Revenue Forecast</div>
                <div class="chart-placeholder">AI Insights Narrative</div>
            </div>
        </section>
    </main>
    <footer>
        <div>Role-based dashboards deliver tailored KPI collections to sales, marketing, and service leaders.</div>
    </footer>
</div>
</body>
</html>
