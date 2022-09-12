using roobiq_server.Data;

namespace roobiq_server.Data.Entity
{
    public class UserEntity : EntityBase
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Name { get; set; }
        public string? Family { get; set; }
        public string? Patronymic { get; set; }

        public string? PlanName { get; set; }
        public int PlanExpireDay { get; set; }

        public List<string>? PresentationList { get; set; }
    }
}
