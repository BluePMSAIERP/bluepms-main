using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class SubscriptionService
{
    private readonly string _connectionString;

    public SubscriptionService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertSubscriptionAsync(
        int? subscriptionId,
        int customerId,
        string subscriptionType,
        string paymentGateway,
        DateTime? renewalDate,
        string? usageMetrics,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCRMSubscription", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@SubscriptionID", subscriptionId.HasValue ? subscriptionId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@CustomerID", customerId);
        command.Parameters.AddWithValue("@SubscriptionType", subscriptionType);
        command.Parameters.AddWithValue("@PaymentGateway", paymentGateway);
        command.Parameters.AddWithValue("@RenewalDate", renewalDate.HasValue ? renewalDate.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@UsageMetrics", usageMetrics ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> GetSubscriptionsAsync(string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetCRMSubscriptions", connection)
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
