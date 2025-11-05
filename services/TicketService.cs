using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BluePms.Crm.Services;

public sealed class TicketService
{
    private readonly string _connectionString;

    public TicketService(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    public async Task<int> UpsertTicketAsync(
        int? ticketId,
        string ticketNumber,
        int? customerId,
        string issueType,
        string? description,
        string priority,
        string status,
        string? attachmentUrl,
        string companyId,
        string groupCompanyId,
        string actor)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.UpsertCRMServiceTicket", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        command.Parameters.AddWithValue("@TicketID", ticketId.HasValue ? ticketId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@TicketNumber", ticketNumber);
        command.Parameters.AddWithValue("@CustomerID", customerId.HasValue ? customerId.Value : (object)DBNull.Value);
        command.Parameters.AddWithValue("@IssueType", issueType);
        command.Parameters.AddWithValue("@Description", description ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@Priority", priority);
        command.Parameters.AddWithValue("@Status", status);
        command.Parameters.AddWithValue("@AttachmentUrl", attachmentUrl ?? (object)DBNull.Value);
        command.Parameters.AddWithValue("@CompanyID", companyId);
        command.Parameters.AddWithValue("@GroupCompanyID", groupCompanyId);
        command.Parameters.AddWithValue("@Actor", actor);

        await connection.OpenAsync().ConfigureAwait(false);
        var result = await command.ExecuteScalarAsync().ConfigureAwait(false);
        return Convert.ToInt32(result);
    }

    public async Task<DataTable> GetTicketsAsync(string companyId)
    {
        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand("dbo.GetCRMServiceTickets", connection)
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
