using roobiq_server.Data.Entity;

namespace roobiq_server.Repository.User
{
    public interface IUserRepository : IEntityBaseRepository<UserEntity>
    {
        bool isEmailUniq(string email);
    }

    public class UserRepository : EntityBaseRepository<UserEntity>, IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context) { }

        public bool isEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }
    }
}
