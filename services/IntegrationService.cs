using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class IntegrationService
{
    private readonly string _connectionString;

    public IntegrationService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertIntegrationAsync(
        int? integrationId,
        string integrationType,
        string endpoint,
        string? credentialsJson,
        string? fieldMappingsJson,
        string? syncSchedule,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCRMIntegrationConfig", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@IntegrationID", integrationId.HasValue ? integrationId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@IntegrationType", integrationType);
        command.Parameters.AddWithValue("@Endpoint", endpoint);
        command.Parameters.AddWithValue("@CredentialsJson", credentialsJson ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@FieldMappingsJson", fieldMappingsJson ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@SyncSchedule", syncSchedule ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> ExecuteSyncHistoryAsync(string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetIntegrationHistory", connection)
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
