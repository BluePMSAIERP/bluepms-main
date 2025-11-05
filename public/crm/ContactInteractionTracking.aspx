<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Contact &amp; Interaction Tracking</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Contact &amp; Interaction Tracking</h1>
        <p>Capture every engagement with contextual intelligence. Timeline views, AI sentiment scoring, reminder orchestration, and transcription handling make follow-ups effortless.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="CustomerProfileManagement.aspx">View Customer Profile</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Log Interaction</h2>
            <div class="form-grid">
                <div>
                    <label for="LinkedCustomerID">Customer ID</label>
                    <input id="LinkedCustomerID" type="number" placeholder="12345" />
                </div>
                <div>
                    <label for="InteractionType">Interaction Type</label>
                    <select id="InteractionType">
                        <option>Call</option>
                        <option>Email</option>
                        <option>Meeting</option>
                        <option>Task</option>
                    </select>
                </div>
                <div>
                    <label for="InteractionDate">Date &amp; Time</label>
                    <input id="InteractionDate" type="datetime-local" />
                </div>
                <div>
                    <label for="Duration">Duration (minutes)</label>
                    <input id="Duration" type="number" min="0" step="5" />
                </div>
                <div>
                    <label for="SentimentScore">AI Sentiment</label>
                    <input id="SentimentScore" type="text" placeholder="Positive / 0.82" />
                </div>
                <div>
                    <label for="Reminder">Reminder</label>
                    <input id="Reminder" type="datetime-local" />
                </div>
            </div>
            <label for="Notes">Notes &amp; Transcript</label>
            <textarea id="Notes" placeholder="Paste meeting summary or AI transcript..."></textarea>
            <div class="button-row">
                <button type="button">Attach Recording</button>
                <button type="button">Run Sentiment Analysis</button>
                <button type="button">Schedule Reminder</button>
                <button type="button">Save Interaction</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Engagement Timeline</h2>
            <div class="timeline">
                <div class="timeline-entry">
                    <strong>2024-06-01 | Meeting</strong>
                    <p>Strategy workshop hosted via Teams. Action items captured and follow-up reminder scheduled.</p>
                </div>
                <div class="timeline-entry">
                    <strong>2024-05-25 | Email</strong>
                    <p>Campaign summary sent automatically through nurture sequence. Opened and link clicked.</p>
                </div>
                <div class="timeline-entry">
                    <strong>2024-05-18 | Call</strong>
                    <p>Support conversation resolved Tier 2 incident. Transcript available with positive sentiment 0.74.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Automated reminders sync to Outlook and Google Calendar with one click.</div>
    </footer>
</div>
</body>
</html>
