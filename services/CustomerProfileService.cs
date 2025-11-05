using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class CustomerProfileService
{
    private readonly string _connectionString;

    public CustomerProfileService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertCustomerAsync(Dictionary<string, object?> fields)
    {
        if (fields is null)
        {
            throw new ArgumentNullException(nameof(fields));
        }

        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCustomer", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        foreach (var pair in fields)
        {
            command.Parameters.AddWithValue(pair.Key, pair.Value ?? DBNull.Value);
        }

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> SearchCustomersAsync(string? keyword, string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.SearchCustomers", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@Keyword", keyword ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);

        await connection.OpenAsync().ConfigureAwait(false);
        using var reader = await command.ExecuteReaderAsync().ConfigureAwait(false);
        var table = new DataTable();
        table.Load(reader);
        return table;
    }
}
