using roobiq_server.Data;

namespace roobiq_server.Data.Entity
{
    public class UserEntity : EntityBase
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
