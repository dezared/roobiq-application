namespace roobiq_server.Model.Auth
{
    public class AuthData
    {
        public string? Token { get; set; }
        public long TokenExpirationTime { get; set; }
        public string? Id { get; set; }
    }
}
