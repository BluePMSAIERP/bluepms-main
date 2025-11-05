<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Collaboration &amp; Team Management</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Collaboration &amp; Team Management</h1>
        <p>Coordinate teams with contextual tasks, threaded discussions, and performance insights linked to each customer record.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="OpportunitySalesPipeline.aspx">Review Deals</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Task Assignment</h2>
            <div class="form-grid">
                <div>
                    <label for="TaskCustomerID">Customer ID</label>
                    <input id="TaskCustomerID" type="number" placeholder="1289" />
                </div>
                <div>
                    <label for="TaskDescription">Task Description</label>
                    <input id="TaskDescription" type="text" placeholder="Prepare QBR presentation" />
                </div>
                <div>
                    <label for="Assignee">Assignee</label>
                    <input id="Assignee" type="text" placeholder="Sophia Lee" />
                </div>
                <div>
                    <label for="DueDate">Due Date</label>
                    <input id="DueDate" type="date" />
                </div>
                <div>
                    <label for="Priority">Priority</label>
                    <select id="Priority">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Assign Task</button>
                <button type="button">Notify Assignee</button>
                <button type="button">Create Recurrence</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Collaboration Threads</h2>
            <div class="timeline">
                <div class="timeline-entry">
                    <strong>@jordan (Sales)</strong>
                    <p>Shared proposal deck and requested pricing approvals.</p>
                </div>
                <div class="timeline-entry">
                    <strong>@emily (Marketing)</strong>
                    <p>Uploaded nurture email drafts for review, awaiting feedback.</p>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Add Comment</button>
                <button type="button">Start Huddle</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Performance Metrics</h2>
            <div class="grid">
                <div class="metric">
                    <span>42</span>
                    Tasks Completed (This Month)
                </div>
                <div class="metric">
                    <span>6</span>
                    Pending Approvals
                </div>
                <div class="metric">
                    <span>96%</span>
                    SLA Adherence
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Mentions trigger Slack, Teams, and email notifications for seamless collaboration.</div>
    </footer>
</div>
</body>
</html>
