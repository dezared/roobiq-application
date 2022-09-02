namespace roobiq_server.Model.Auth
{
    public class RegisterModel : UserDataRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? PasswordReinput { get; set; }
    }
}
