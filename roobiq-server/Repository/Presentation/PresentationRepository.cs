using Microsoft.EntityFrameworkCore;
using roobiq_server.Data.Entity;

namespace roobiq_server.Repository.Presentation
{
    public interface IPresentationRepository : IEntityBaseRepository<PresentationEntity>
    {
        Task<List<PresentationEntity>> GetAllPresentationForUser(string userId);
    }

    public class PresentationRepository : EntityBaseRepository<PresentationEntity>, IPresentationRepository
    {
        public PresentationRepository(ApplicationContext context) : base(context) { }

        public async Task<List<PresentationEntity>> GetAllPresentationForUser(string userId)
        {
            var entityList = await _context.Presentations.Where(m => m.OwnerUserId == userId).ToListAsync();
            return entityList;
        }
    }
}
