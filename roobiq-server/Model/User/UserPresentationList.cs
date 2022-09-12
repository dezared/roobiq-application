namespace roobiq_server.Model.User
{
    public class UserPresentationList
    {
        public List<UserPresentationData>? UserPresentationDatas { get; set; }
    }

    public class UserPresentationData
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
    }
}
