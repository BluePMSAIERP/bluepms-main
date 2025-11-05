using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class InteractionService
{
    private readonly string _connectionString;

    public InteractionService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertInteractionAsync(
        int? interactionId,
        int customerId,
        string interactionType,
        DateTime interactionDate,
        int? duration,
        string? notes,
        decimal? sentimentScore,
        DateTime? reminder,
        string? attachmentUrl,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCustomerInteraction", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@InteractionID", interactionId.HasValue ? interactionId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@CustomerID", customerId);
        command.Parameters.AddWithValue("@InteractionType", interactionType);
        command.Parameters.AddWithValue("@InteractionDate", interactionDate);
        command.Parameters.AddWithValue("@DurationMinutes", duration.HasValue ? duration.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@Notes", notes ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@SentimentScore", sentimentScore.HasValue ? sentimentScore.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@ReminderAt", reminder.HasValue ? reminder.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@AttachmentUrl", attachmentUrl ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> GetInteractionsAsync(int customerId, string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetCustomerInteractions", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@CustomerID", customerId);
        command.Parameters.AddWithValue("@CompanyID", companyId);

        await connection.OpenAsync().ConfigureAwait(false);
        using var reader = await command.ExecuteReaderAsync().ConfigureAwait(false);
        var table = new DataTable();
        table.Load(reader);
        return table;
    }
}
