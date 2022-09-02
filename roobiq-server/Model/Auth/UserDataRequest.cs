namespace roobiq_server.Model.Auth
{
    public class UserDataRequest
    {
        public Headers? headers { get; set; }
    }

    public class Headers
    {
        public string? AccessToken { get; set; }
        public string? Id { get; set; }
    }
}
