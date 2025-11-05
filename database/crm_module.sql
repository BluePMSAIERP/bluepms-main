SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/* =======================================================================
   CRM & Customer Experience Module Schema
   ======================================================================= */

-- Customer table provided externally (not recreated here)

/* -----------------------------------------------------------------------
   Customer Profile Stored Procedures
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.UpsertCustomer', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCustomer;
GO
CREATE PROCEDURE dbo.UpsertCustomer
    @CustomerID           INT = NULL,
    @FirstName            NVARCHAR(100),
    @LastName             NVARCHAR(100),
    @Email                NVARCHAR(320),
    @PhoneNumber          NVARCHAR(50) = NULL,
    @AlternatePhoneNumber NVARCHAR(50) = NULL,
    @MobilePhoneNumber    NVARCHAR(50) = NULL,
    @Address              NVARCHAR(400) = NULL,
    @City                 NVARCHAR(120) = NULL,
    @State                NVARCHAR(120) = NULL,
    @ZipCode              NVARCHAR(20) = NULL,
    @Country              NVARCHAR(120) = NULL,
    @DateOfBirth          DATE = NULL,
    @Gender               NVARCHAR(50) = NULL,
    @MaritalStatus        NVARCHAR(50) = NULL,
    @VIPTag               BIT = NULL,
    @Occupation           NVARCHAR(120) = NULL,
    @Company              NVARCHAR(200) = NULL,
    @CompanyID            NVARCHAR(100),
    @GroupCompanyID       NVARCHAR(100),
    @LeadSource           NVARCHAR(100) = NULL,
    @PreferredContactMethod NVARCHAR(50) = NULL,
    @Notes                NVARCHAR(MAX) = NULL,
    @AccountStatus        NVARCHAR(50) = NULL,
    @SubscriptionType     NVARCHAR(100) = NULL,
    @LastContactDate      DATETIME2 = NULL,
    @CreatedBy            NVARCHAR(100),
    @UpdatedBy            NVARCHAR(100),
    @Nationality          NVARCHAR(120) = NULL,
    @CountryOfResidence   NVARCHAR(120) = NULL,
    @PassportID           NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    IF @CustomerID IS NULL
    BEGIN
        INSERT INTO dbo.Customer
        (
            FirstName, LastName, Email, PhoneNumber, AlternatePhoneNumber, MobilePhoneNumber,
            Address, City, State, ZipCode, Country, DateOfBirth, Gender, MaritalStatus,
            VIPTag, Occupation, Company, CompanyID, GroupCompanyID, LeadSource, PreferredContactMethod,
            Notes, AccountStatus, SubscriptionType, LastContactDate, CreatedBy, UpdatedBy,
            Nationality, CountryOfResidence, PassportID
        )
        VALUES
        (
            @FirstName, @LastName, @Email, @PhoneNumber, @AlternatePhoneNumber, @MobilePhoneNumber,
            @Address, @City, @State, @ZipCode, @Country, @DateOfBirth, @Gender, @MaritalStatus,
            ISNULL(@VIPTag, 0), @Occupation, @Company, @CompanyID, @GroupCompanyID, @LeadSource, @PreferredContactMethod,
            @Notes, @AccountStatus, @SubscriptionType, @LastContactDate, @CreatedBy, @UpdatedBy,
            @Nationality, @CountryOfResidence, @PassportID
        );
        SELECT SCOPE_IDENTITY() AS CustomerID;
    END
    ELSE
    BEGIN
        UPDATE dbo.Customer
           SET FirstName = @FirstName,
               LastName = @LastName,
               Email = @Email,
               PhoneNumber = @PhoneNumber,
               AlternatePhoneNumber = @AlternatePhoneNumber,
               MobilePhoneNumber = @MobilePhoneNumber,
               Address = @Address,
               City = @City,
               State = @State,
               ZipCode = @ZipCode,
               Country = @Country,
               DateOfBirth = @DateOfBirth,
               Gender = @Gender,
               MaritalStatus = @MaritalStatus,
               VIPTag = ISNULL(@VIPTag, VIPTag),
               Occupation = @Occupation,
               Company = @Company,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               LeadSource = @LeadSource,
               PreferredContactMethod = @PreferredContactMethod,
               Notes = @Notes,
               AccountStatus = @AccountStatus,
               SubscriptionType = @SubscriptionType,
               LastContactDate = @LastContactDate,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @UpdatedBy,
               Nationality = @Nationality,
               CountryOfResidence = @CountryOfResidence,
               PassportID = @PassportID
         WHERE CustomerID = @CustomerID;
        SELECT @CustomerID AS CustomerID;
    END
END
GO

IF OBJECT_ID('dbo.SearchCustomers', 'P') IS NOT NULL
    DROP PROCEDURE dbo.SearchCustomers;
GO
CREATE PROCEDURE dbo.SearchCustomers
    @Keyword NVARCHAR(200) = NULL,
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.Customer
    WHERE CompanyID = @CompanyID
      AND (
            @Keyword IS NULL
            OR FirstName LIKE '%' + @Keyword + '%'
            OR LastName LIKE '%' + @Keyword + '%'
            OR Email LIKE '%' + @Keyword + '%'
            OR PhoneNumber LIKE '%' + @Keyword + '%'
        )
    ORDER BY UpdatedAt DESC;
END
GO

/* -----------------------------------------------------------------------
   Interactions
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CustomerInteraction', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CustomerInteraction
    (
        InteractionID       INT IDENTITY(1,1) PRIMARY KEY,
        CustomerID          INT            NOT NULL,
        InteractionType     NVARCHAR(50)   NOT NULL,
        InteractionDate     DATETIME2      NOT NULL,
        DurationMinutes     INT            NULL,
        Notes               NVARCHAR(MAX)  NULL,
        SentimentScore      DECIMAL(5,2)   NULL,
        ReminderAt          DATETIME2      NULL,
        AttachmentUrl       NVARCHAR(400)  NULL,
        CompanyID           NVARCHAR(100)  NOT NULL,
        GroupCompanyID      NVARCHAR(100)  NOT NULL,
        CreatedAt           DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy           NVARCHAR(100)  NOT NULL,
        UpdatedAt           DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy           NVARCHAR(100)  NOT NULL
    );
    CREATE INDEX IX_CustomerInteraction_Customer ON dbo.CustomerInteraction(CustomerID, InteractionDate DESC);
END
GO

/* Stored Procedures */
IF OBJECT_ID('dbo.UpsertCustomerInteraction', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCustomerInteraction;
GO
CREATE PROCEDURE dbo.UpsertCustomerInteraction
    @InteractionID   INT = NULL,
    @CustomerID      INT,
    @InteractionType NVARCHAR(50),
    @InteractionDate DATETIME2,
    @DurationMinutes INT = NULL,
    @Notes           NVARCHAR(MAX) = NULL,
    @SentimentScore  DECIMAL(5,2) = NULL,
    @ReminderAt      DATETIME2 = NULL,
    @AttachmentUrl   NVARCHAR(400) = NULL,
    @CompanyID       NVARCHAR(100),
    @GroupCompanyID  NVARCHAR(100),
    @Actor           NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @InteractionID IS NULL
    BEGIN
        INSERT INTO dbo.CustomerInteraction
            (CustomerID, InteractionType, InteractionDate, DurationMinutes, Notes, SentimentScore, ReminderAt, AttachmentUrl, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@CustomerID, @InteractionType, @InteractionDate, @DurationMinutes, @Notes, @SentimentScore, @ReminderAt, @AttachmentUrl, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS InteractionID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CustomerInteraction
           SET InteractionType = @InteractionType,
               InteractionDate = @InteractionDate,
               DurationMinutes = @DurationMinutes,
               Notes = @Notes,
               SentimentScore = @SentimentScore,
               ReminderAt = @ReminderAt,
               AttachmentUrl = @AttachmentUrl,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE InteractionID = @InteractionID;
        SELECT @InteractionID AS InteractionID;
    END
END
GO

IF OBJECT_ID('dbo.GetCustomerInteractions', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetCustomerInteractions;
GO
CREATE PROCEDURE dbo.GetCustomerInteractions
    @CustomerID INT,
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.CustomerInteraction
    WHERE CustomerID = @CustomerID
      AND CompanyID = @CompanyID
    ORDER BY InteractionDate DESC;
END
GO

/* -----------------------------------------------------------------------
   Lead Management
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CRMLead', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMLead
    (
        LeadID            INT IDENTITY(1,1) PRIMARY KEY,
        LeadName          NVARCHAR(200) NOT NULL,
        Email             NVARCHAR(320) NULL,
        Phone             NVARCHAR(50)  NULL,
        LeadSource        NVARCHAR(100) NULL,
        Score             INT           NULL,
        Status            NVARCHAR(50)  NOT NULL,
        QualificationStage NVARCHAR(50) NULL,
        CompanyID         NVARCHAR(100) NOT NULL,
        GroupCompanyID    NVARCHAR(100) NOT NULL,
        CreatedAt         DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy         NVARCHAR(100)  NOT NULL,
        UpdatedAt         DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy         NVARCHAR(100)  NOT NULL
    );
END
GO

IF OBJECT_ID('dbo.UpsertCRMLead', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCRMLead;
GO
CREATE PROCEDURE dbo.UpsertCRMLead
    @LeadID            INT = NULL,
    @LeadName          NVARCHAR(200),
    @Email             NVARCHAR(320) = NULL,
    @Phone             NVARCHAR(50) = NULL,
    @LeadSource        NVARCHAR(100) = NULL,
    @Score             INT = NULL,
    @Status            NVARCHAR(50),
    @QualificationStage NVARCHAR(50) = NULL,
    @CompanyID         NVARCHAR(100),
    @GroupCompanyID    NVARCHAR(100),
    @Actor             NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @LeadID IS NULL
    BEGIN
        INSERT INTO dbo.CRMLead
            (LeadName, Email, Phone, LeadSource, Score, Status, QualificationStage, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@LeadName, @Email, @Phone, @LeadSource, @Score, @Status, @QualificationStage, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS LeadID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CRMLead
           SET LeadName = @LeadName,
               Email = @Email,
               Phone = @Phone,
               LeadSource = @LeadSource,
               Score = @Score,
               Status = @Status,
               QualificationStage = @QualificationStage,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE LeadID = @LeadID;
        SELECT @LeadID AS LeadID;
    END
END
GO

IF OBJECT_ID('dbo.GetCRMLeads', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetCRMLeads;
GO
CREATE PROCEDURE dbo.GetCRMLeads
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.CRMLead
    WHERE CompanyID = @CompanyID
    ORDER BY CreatedAt DESC;
END
GO

/* -----------------------------------------------------------------------
   Opportunities
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CRMOpportunity', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMOpportunity
    (
        OpportunityID   INT IDENTITY(1,1) PRIMARY KEY,
        CustomerID      INT            NULL,
        OpportunityName NVARCHAR(200) NOT NULL,
        Stage           NVARCHAR(50)  NOT NULL,
        Amount          DECIMAL(18,2) NOT NULL,
        Probability     INT           NULL,
        CloseDate       DATE          NULL,
        Products        NVARCHAR(MAX) NULL,
        CompanyID       NVARCHAR(100) NOT NULL,
        GroupCompanyID  NVARCHAR(100) NOT NULL,
        CreatedAt       DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy       NVARCHAR(100)  NOT NULL,
        UpdatedAt       DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy       NVARCHAR(100)  NOT NULL
    );
    CREATE INDEX IX_CRMOpportunity_Stage ON dbo.CRMOpportunity(Stage, CloseDate);
END
GO

IF OBJECT_ID('dbo.UpsertCRMOpportunity', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCRMOpportunity;
GO
CREATE PROCEDURE dbo.UpsertCRMOpportunity
    @OpportunityID   INT = NULL,
    @CustomerID      INT = NULL,
    @OpportunityName NVARCHAR(200),
    @Stage           NVARCHAR(50),
    @Amount          DECIMAL(18,2),
    @Probability     INT = NULL,
    @CloseDate       DATE = NULL,
    @Products        NVARCHAR(MAX) = NULL,
    @CompanyID       NVARCHAR(100),
    @GroupCompanyID  NVARCHAR(100),
    @Actor           NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @OpportunityID IS NULL
    BEGIN
        INSERT INTO dbo.CRMOpportunity
            (CustomerID, OpportunityName, Stage, Amount, Probability, CloseDate, Products, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@CustomerID, @OpportunityName, @Stage, @Amount, @Probability, @CloseDate, @Products, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS OpportunityID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CRMOpportunity
           SET CustomerID = @CustomerID,
               OpportunityName = @OpportunityName,
               Stage = @Stage,
               Amount = @Amount,
               Probability = @Probability,
               CloseDate = @CloseDate,
               Products = @Products,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE OpportunityID = @OpportunityID;
        SELECT @OpportunityID AS OpportunityID;
    END
END
GO

IF OBJECT_ID('dbo.GetCRMOpportunities', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetCRMOpportunities;
GO
CREATE PROCEDURE dbo.GetCRMOpportunities
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.CRMOpportunity
    WHERE CompanyID = @CompanyID
    ORDER BY CloseDate DESC;
END
GO

/* -----------------------------------------------------------------------
   Tickets
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CRMServiceTicket', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMServiceTicket
    (
        TicketID        INT IDENTITY(1,1) PRIMARY KEY,
        TicketNumber    NVARCHAR(50)  NOT NULL,
        CustomerID      INT           NULL,
        IssueType       NVARCHAR(100) NOT NULL,
        Description     NVARCHAR(MAX) NULL,
        Priority        NVARCHAR(50)  NOT NULL,
        Status          NVARCHAR(50)  NOT NULL,
        AttachmentUrl   NVARCHAR(400) NULL,
        CompanyID       NVARCHAR(100) NOT NULL,
        GroupCompanyID  NVARCHAR(100) NOT NULL,
        CreatedAt       DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy       NVARCHAR(100)  NOT NULL,
        UpdatedAt       DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy       NVARCHAR(100)  NOT NULL
    );
    CREATE UNIQUE INDEX UX_CRMServiceTicket_Number ON dbo.CRMServiceTicket(TicketNumber);
END
GO

IF OBJECT_ID('dbo.UpsertCRMServiceTicket', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCRMServiceTicket;
GO
CREATE PROCEDURE dbo.UpsertCRMServiceTicket
    @TicketID       INT = NULL,
    @TicketNumber   NVARCHAR(50),
    @CustomerID     INT = NULL,
    @IssueType      NVARCHAR(100),
    @Description    NVARCHAR(MAX) = NULL,
    @Priority       NVARCHAR(50),
    @Status         NVARCHAR(50),
    @AttachmentUrl  NVARCHAR(400) = NULL,
    @CompanyID      NVARCHAR(100),
    @GroupCompanyID NVARCHAR(100),
    @Actor          NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @TicketID IS NULL
    BEGIN
        INSERT INTO dbo.CRMServiceTicket
            (TicketNumber, CustomerID, IssueType, Description, Priority, Status, AttachmentUrl, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@TicketNumber, @CustomerID, @IssueType, @Description, @Priority, @Status, @AttachmentUrl, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS TicketID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CRMServiceTicket
           SET TicketNumber = @TicketNumber,
               CustomerID = @CustomerID,
               IssueType = @IssueType,
               Description = @Description,
               Priority = @Priority,
               Status = @Status,
               AttachmentUrl = @AttachmentUrl,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE TicketID = @TicketID;
        SELECT @TicketID AS TicketID;
    END
END
GO

IF OBJECT_ID('dbo.GetCRMServiceTickets', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetCRMServiceTickets;
GO
CREATE PROCEDURE dbo.GetCRMServiceTickets
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.CRMServiceTicket
    WHERE CompanyID = @CompanyID
    ORDER BY CreatedAt DESC;
END
GO

/* -----------------------------------------------------------------------
   Billing & Subscription
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CRMSubscription', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMSubscription
    (
        SubscriptionID   INT IDENTITY(1,1) PRIMARY KEY,
        CustomerID       INT            NOT NULL,
        SubscriptionType NVARCHAR(100)  NOT NULL,
        PaymentGateway   NVARCHAR(50)   NOT NULL,
        RenewalDate      DATE           NULL,
        UsageMetrics     NVARCHAR(400)  NULL,
        CompanyID        NVARCHAR(100)  NOT NULL,
        GroupCompanyID   NVARCHAR(100)  NOT NULL,
        CreatedAt        DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy        NVARCHAR(100)  NOT NULL,
        UpdatedAt        DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy        NVARCHAR(100)  NOT NULL
    );
END
GO

IF OBJECT_ID('dbo.UpsertCRMSubscription', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCRMSubscription;
GO
CREATE PROCEDURE dbo.UpsertCRMSubscription
    @SubscriptionID   INT = NULL,
    @CustomerID       INT,
    @SubscriptionType NVARCHAR(100),
    @PaymentGateway   NVARCHAR(50),
    @RenewalDate      DATE = NULL,
    @UsageMetrics     NVARCHAR(400) = NULL,
    @CompanyID        NVARCHAR(100),
    @GroupCompanyID   NVARCHAR(100),
    @Actor            NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @SubscriptionID IS NULL
    BEGIN
        INSERT INTO dbo.CRMSubscription
            (CustomerID, SubscriptionType, PaymentGateway, RenewalDate, UsageMetrics, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@CustomerID, @SubscriptionType, @PaymentGateway, @RenewalDate, @UsageMetrics, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS SubscriptionID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CRMSubscription
           SET CustomerID = @CustomerID,
               SubscriptionType = @SubscriptionType,
               PaymentGateway = @PaymentGateway,
               RenewalDate = @RenewalDate,
               UsageMetrics = @UsageMetrics,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE SubscriptionID = @SubscriptionID;
        SELECT @SubscriptionID AS SubscriptionID;
    END
END
GO

IF OBJECT_ID('dbo.GetCRMSubscriptions', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetCRMSubscriptions;
GO
CREATE PROCEDURE dbo.GetCRMSubscriptions
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.CRMSubscription
    WHERE CompanyID = @CompanyID
    ORDER BY RenewalDate;
END
GO

/* -----------------------------------------------------------------------
   Integration Management
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CRMIntegrationConfig', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMIntegrationConfig
    (
        IntegrationID     INT IDENTITY(1,1) PRIMARY KEY,
        IntegrationType   NVARCHAR(100) NOT NULL,
        Endpoint          NVARCHAR(400) NOT NULL,
        CredentialsJson   NVARCHAR(MAX) NULL,
        FieldMappingsJson NVARCHAR(MAX) NULL,
        SyncSchedule      NVARCHAR(120) NULL,
        CompanyID         NVARCHAR(100) NOT NULL,
        GroupCompanyID    NVARCHAR(100) NOT NULL,
        CreatedAt         DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy         NVARCHAR(100)  NOT NULL,
        UpdatedAt         DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy         NVARCHAR(100)  NOT NULL
    );
END
GO

IF OBJECT_ID('dbo.CRMIntegrationHistory', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMIntegrationHistory
    (
        HistoryID        BIGINT IDENTITY(1,1) PRIMARY KEY,
        IntegrationID    INT           NOT NULL,
        ExecutedAt       DATETIME2     NOT NULL DEFAULT SYSUTCDATETIME(),
        Status           NVARCHAR(50)  NOT NULL,
        RecordsProcessed INT           NULL,
        DurationSeconds  INT           NULL,
        Message          NVARCHAR(MAX) NULL,
        CompanyID        NVARCHAR(100) NOT NULL,
        GroupCompanyID   NVARCHAR(100) NOT NULL
    );
    CREATE INDEX IX_CRMIntegrationHistory_Integration ON dbo.CRMIntegrationHistory(IntegrationID, ExecutedAt DESC);
END
GO

IF OBJECT_ID('dbo.UpsertCRMIntegrationConfig', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCRMIntegrationConfig;
GO
CREATE PROCEDURE dbo.UpsertCRMIntegrationConfig
    @IntegrationID     INT = NULL,
    @IntegrationType   NVARCHAR(100),
    @Endpoint          NVARCHAR(400),
    @CredentialsJson   NVARCHAR(MAX) = NULL,
    @FieldMappingsJson NVARCHAR(MAX) = NULL,
    @SyncSchedule      NVARCHAR(120) = NULL,
    @CompanyID         NVARCHAR(100),
    @GroupCompanyID    NVARCHAR(100),
    @Actor             NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @IntegrationID IS NULL
    BEGIN
        INSERT INTO dbo.CRMIntegrationConfig
            (IntegrationType, Endpoint, CredentialsJson, FieldMappingsJson, SyncSchedule, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@IntegrationType, @Endpoint, @CredentialsJson, @FieldMappingsJson, @SyncSchedule, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS IntegrationID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CRMIntegrationConfig
           SET IntegrationType = @IntegrationType,
               Endpoint = @Endpoint,
               CredentialsJson = @CredentialsJson,
               FieldMappingsJson = @FieldMappingsJson,
               SyncSchedule = @SyncSchedule,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE IntegrationID = @IntegrationID;
        SELECT @IntegrationID AS IntegrationID;
    END
END
GO

IF OBJECT_ID('dbo.GetIntegrationHistory', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetIntegrationHistory;
GO
CREATE PROCEDURE dbo.GetIntegrationHistory
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT h.HistoryID,
           h.IntegrationID,
           c.IntegrationType,
           h.ExecutedAt,
           h.Status,
           h.RecordsProcessed,
           h.DurationSeconds,
           h.Message
    FROM dbo.CRMIntegrationHistory h
    INNER JOIN dbo.CRMIntegrationConfig c ON c.IntegrationID = h.IntegrationID
    WHERE h.CompanyID = @CompanyID
    ORDER BY h.ExecutedAt DESC;
END
GO

/* -----------------------------------------------------------------------
   AI Module Configuration
   ----------------------------------------------------------------------- */
IF OBJECT_ID('dbo.CRMAIModuleConfig', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.CRMAIModuleConfig
    (
        AIModuleID       INT IDENTITY(1,1) PRIMARY KEY,
        ModuleName       NVARCHAR(100) NOT NULL,
        IsEnabled        BIT           NOT NULL DEFAULT (1),
        Threshold        DECIMAL(9,4)  NULL,
        SettingsJson     NVARCHAR(MAX) NULL,
        CompanyID        NVARCHAR(100) NOT NULL,
        GroupCompanyID   NVARCHAR(100) NOT NULL,
        CreatedAt        DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        CreatedBy        NVARCHAR(100)  NOT NULL,
        UpdatedAt        DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME(),
        UpdatedBy        NVARCHAR(100)  NOT NULL
    );
END
GO

IF OBJECT_ID('dbo.UpsertCRMAIModuleConfig', 'P') IS NOT NULL
    DROP PROCEDURE dbo.UpsertCRMAIModuleConfig;
GO
CREATE PROCEDURE dbo.UpsertCRMAIModuleConfig
    @AIModuleID     INT = NULL,
    @ModuleName     NVARCHAR(100),
    @IsEnabled      BIT,
    @Threshold      DECIMAL(9,4) = NULL,
    @SettingsJson   NVARCHAR(MAX) = NULL,
    @CompanyID      NVARCHAR(100),
    @GroupCompanyID NVARCHAR(100),
    @Actor          NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    IF @AIModuleID IS NULL
    BEGIN
        INSERT INTO dbo.CRMAIModuleConfig
            (ModuleName, IsEnabled, Threshold, SettingsJson, CompanyID, GroupCompanyID, CreatedBy, UpdatedBy)
        VALUES
            (@ModuleName, @IsEnabled, @Threshold, @SettingsJson, @CompanyID, @GroupCompanyID, @Actor, @Actor);
        SELECT SCOPE_IDENTITY() AS AIModuleID;
    END
    ELSE
    BEGIN
        UPDATE dbo.CRMAIModuleConfig
           SET ModuleName = @ModuleName,
               IsEnabled = @IsEnabled,
               Threshold = @Threshold,
               SettingsJson = @SettingsJson,
               CompanyID = @CompanyID,
               GroupCompanyID = @GroupCompanyID,
               UpdatedAt = SYSUTCDATETIME(),
               UpdatedBy = @Actor
         WHERE AIModuleID = @AIModuleID;
        SELECT @AIModuleID AS AIModuleID;
    END
END
GO

IF OBJECT_ID('dbo.GetCRMAIModuleConfigs', 'P') IS NOT NULL
    DROP PROCEDURE dbo.GetCRMAIModuleConfigs;
GO
CREATE PROCEDURE dbo.GetCRMAIModuleConfigs
    @CompanyID NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT *
    FROM dbo.CRMAIModuleConfig
    WHERE CompanyID = @CompanyID
    ORDER BY ModuleName;
END
GO

/* Additional tables (Integration, AI configuration, etc.) would follow the same
   pattern and can be extended as implementation progresses. */
