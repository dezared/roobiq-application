namespace roobiq_server.Model.Auth
{
    public class LoginModel : UserDataRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
