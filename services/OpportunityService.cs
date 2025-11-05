using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class OpportunityService
{
    private readonly string _connectionString;

    public OpportunityService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertOpportunityAsync(
        int? opportunityId,
        int? customerId,
        string opportunityName,
        string stage,
        decimal amount,
        int? probability,
        DateTime? closeDate,
        string? products,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCRMOpportunity", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@OpportunityID", opportunityId.HasValue ? opportunityId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@CustomerID", customerId.HasValue ? customerId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@OpportunityName", opportunityName);
        command.Parameters.AddWithValue("@Stage", stage);
        command.Parameters.AddWithValue("@Amount", amount);
        command.Parameters.AddWithValue("@Probability", probability.HasValue ? probability.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@CloseDate", closeDate.HasValue ? closeDate.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@Products", products ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> GetOpportunitiesAsync(string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetCRMOpportunities", connection)
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
