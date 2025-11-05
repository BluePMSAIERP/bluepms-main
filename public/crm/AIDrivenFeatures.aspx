<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>AI Driven Features Control</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>AI Driven Features Control</h1>
        <p>Configure intelligent services across recommendations, chatbots, anomaly detection, and personalization with transparent governance.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="SecurityCompliance.aspx">Review Governance Policies</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Module Activation</h2>
            <div class="form-grid">
                <div>
                    <label for="RecommendationEngine">Recommendations</label>
                    <select id="RecommendationEngine">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="Chatbot">Chatbot</label>
                    <select id="Chatbot">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="AnomalyDetection">Anomaly Detection</label>
                    <select id="AnomalyDetection">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="Personalization">Email Personalization</label>
                    <select id="Personalization">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
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
            <label for="Thresholds">Config Thresholds</label>
            <textarea id="Thresholds" placeholder="Recommendation confidence &gt; 0.7 triggers next best action"></textarea>
        </section>
        <section class="form-section">
            <h2 class="section-title">Training Data</h2>
            <div class="button-row">
                <button type="button">Upload Dataset</button>
                <button type="button">Review Data Health</button>
                <button type="button">Schedule Retraining</button>
            </div>
            <div class="timeline">
                <div class="timeline-entry">
                    <strong>2024-05-30</strong>
                    <p>Chatbot intents retrained with 2,400 new conversations. Accuracy +6%.</p>
                </div>
                <div class="timeline-entry">
                    <strong>2024-05-15</strong>
                    <p>Recommendation model tuned with latest usage metrics and opportunity outcomes.</p>
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Performance &amp; Ethics</h2>
            <div class="grid">
                <div class="metric">
                    <span>0.89</span>
                    Recommendation Precision
                </div>
                <div class="metric">
                    <span>2.1%</span>
                    Bias Drift (Last 30 days)
                </div>
                <div class="metric">
                    <span>98%</span>
                    Chatbot Resolution Rate
                </div>
            </div>
            <div class="button-row">
                <button type="button">View Audit Logs</button>
                <button type="button">Publish Transparency Report</button>
            </div>
        </section>
    </main>
    <footer>
        <div>AI safeguards ensure explainability, opt-out controls, and privacy compliance.</div>
    </footer>
</div>
</body>
</html>
