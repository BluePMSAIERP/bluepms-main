<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Marketing Automation Command Deck</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Marketing Automation Command Deck</h1>
        <p>Design multi-channel campaigns with A/B testing, personalization tokens, and ROI analytics in a drag-and-drop experience that keeps marketers ahead.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="AnalyticsReportingDashboard.aspx">Open Analytics Dashboard</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Campaign Blueprint</h2>
            <div class="form-grid">
                <div>
                    <label for="CampaignName">Campaign Name</label>
                    <input id="CampaignName" type="text" placeholder="VIP Summer Relaunch" />
                </div>
                <div>
                    <label for="CampaignType">Type</label>
                    <select id="CampaignType">
                        <option>Email</option>
                        <option>SMS</option>
                        <option>Social</option>
                        <option>Ads</option>
                    </select>
                </div>
                <div>
                    <label for="Schedule">Launch Schedule</label>
                    <input id="Schedule" type="datetime-local" />
                </div>
                <div>
                    <label for="Budget">Budget (USD)</label>
                    <input id="Budget" type="number" placeholder="15000" />
                </div>
            </div>
            <label for="TargetSegments">Target Segments</label>
            <textarea id="TargetSegments" placeholder="VIPTag = true, Country = Singapore, LastContactDate &lt; 45 days"></textarea>
            <div class="button-row">
                <button type="button">Build Segment</button>
                <button type="button">Configure A/B Test</button>
                <button type="button">Preview Personalization</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Drip Journey Builder</h2>
            <div class="grid">
                <div class="card">
                    <h2>Step 1: Welcome Email</h2>
                    <p>Dynamic hero image based on industry and localized intro copy.</p>
                </div>
                <div class="card">
                    <h2>Step 2: AI Recommendation</h2>
                    <p>Suggests best-fit module based on engagement score &amp; interaction history.</p>
                </div>
                <div class="card">
                    <h2>Step 3: SMS Reminder</h2>
                    <p>Time-zone aware reminder triggered two days after email open.</p>
                </div>
                <div class="card">
                    <h2>Step 4: Sales Handoff</h2>
                    <p>Automatically creates opportunity when score exceeds 75.</p>
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Performance Analytics</h2>
            <div class="grid">
                <div class="metric">
                    <span>62%</span>
                    Open Rate
                </div>
                <div class="metric">
                    <span>29%</span>
                    Click Through Rate
                </div>
                <div class="metric">
                    <span>$410k</span>
                    Influenced Pipeline Value
                </div>
            </div>
            <div class="button-row">
                <button type="button">Export Report</button>
                <button type="button">Launch Campaign</button>
            </div>
        </section>
    </main>
    <footer>
        <div>Ad platform connectors synchronize segments with Meta, Google, and LinkedIn.</div>
    </footer>
</div>
</body>
</html>
