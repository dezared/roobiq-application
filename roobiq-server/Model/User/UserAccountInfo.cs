namespace roobiq_server.Model.User
{
    public class UserAccountInfo
    {
        public string? Name { get; set; }
        public string? Family { get; set; }
        public string? Patronymic { get; set; }

        public string? PlanName { get; set; }
        public int PlanExpireDay { get; set; }
    }

    public class PutUserAccountInfo
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Family { get; set; }
        public string? Patronymic { get; set; }
    }

    public class PutUserPlanInfo
    {
        public string? Id { get; set; }
        public string? PlanName { get; set; }
        public int PlanExpireDay { get; set; }
    }
}
