using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class AIService
{
    private readonly string _connectionString;

    public AIService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertModuleAsync(
        int? moduleId,
        string moduleName,
        bool isEnabled,
        decimal? threshold,
        string? settingsJson,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCRMAIModuleConfig", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@AIModuleID", moduleId.HasValue ? moduleId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@ModuleName", moduleName);
        command.Parameters.AddWithValue("@IsEnabled", isEnabled);
        command.Parameters.AddWithValue("@Threshold", threshold.HasValue ? threshold.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@SettingsJson", settingsJson ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> GetModulesAsync(string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetCRMAIModuleConfigs", connection)
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
