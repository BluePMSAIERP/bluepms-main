using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class LeadService
{
    private readonly string _connectionString;

    public LeadService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertLeadAsync(
        int? leadId,
        string leadName,
        string? email,
        string? phone,
        string? leadSource,
        int? score,
        string status,
        string? qualificationStage,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCRMLead", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@LeadID", leadId.HasValue ? leadId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@LeadName", leadName);
        command.Parameters.AddWithValue("@Email", email ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@Phone", phone ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@LeadSource", leadSource ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@Score", score.HasValue ? score.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@Status", status);
        command.Parameters.AddWithValue("@QualificationStage", qualificationStage ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> GetLeadsAsync(string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetCRMLeads", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@CompanyID", companyId);

        await connection.OpenAsync().ConfigureAwait(false);
        using var reader = await command.ExecuteReaderAsync().ConfigureAwait(false);
        var table = new DataTable();
        table.Load(reader);
        return table;
    }
}
