using Microsoft.AspNetCore.Mvc;
using roobiq_server.Data.Entity;
using roobiq_server.Model.Presentation;
using roobiq_server.Repository.Presentation;
using roobiq_server.Repository.User;

namespace roobiq_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PresentationController : ControllerBase
    {
        private IPresentationRepository _presentationService;
        private IUserRepository _userRepository;

        public PresentationController(IPresentationRepository presentationService, IUserRepository userRepository)
        {
            this._presentationService = presentationService;
            this._userRepository = userRepository;
        }

        [HttpGet("allpresentation/{userId}")]
        public async Task<ActionResult<List<PresentationEntity>>> GetPresentationsList(string userId)
        {
            var getListQuert = await _presentationService.GetAllPresentationForUser(userId);
            return getListQuert.ToList();
        }

        [HttpPut("createpresentation")]
        public ActionResult<List<PresentationEntity>> CreatePresentations([FromBody] CreatePresentationModel model)
        {
            var user = _userRepository.GetSingle(u => u.Id == model.OwnerUserId);

            if (user == null)
                return BadRequest(new { systemException = "code_identity:UserNotFound" });

            var id = Guid.NewGuid().ToString();

            var presentation = new PresentationEntity()
            {
                Id = id,
                DateTimeCreateTicks = DateTime.Now.Ticks,
                DateTimeUpdateTicks = DateTime.Now.Ticks,
                JsonPresentationText = model.JsonPresentationText,
                Name = model.Name,
                OwnerUserId = model.OwnerUserId
            };

            if (user.PresentationList == null)
                user.PresentationList = new List<string>();
            user.PresentationList.Add(id);

            _presentationService.Add(presentation);
            _userRepository.Update(user);
            _userRepository.Commit();
            _presentationService.Commit();

            return Ok(presentation.Id);
        }

        [HttpPut("editpresentation")]
        public ActionResult<List<PresentationEntity>> EditPresentations([FromBody] EditPresentationModel model)
        {
            var presentation = _presentationService.GetSingle(model.PresentationId);

            presentation.Name = model.Name;
            presentation.JsonPresentationText = model.JsonPresentationText;
            presentation.DateTimeUpdateTicks = DateTime.Now.Ticks;

            _presentationService.Update(presentation);
            _presentationService.Commit();
            return Ok(presentation.Id);
        }

        [HttpDelete("deletepresentation/{presentationId}")]
        public ActionResult<List<PresentationEntity>> DeletePresentations(string presentationId)
        {
            var presentation = _presentationService.GetSingle(presentationId);

            _presentationService.Delete(presentation);
            _presentationService.Commit();
            return Ok();
        }

        [HttpGet("getpresentation/{presentationId}")]
        public ActionResult<List<PresentationEntity>>GetPresentation(string presentationId)
        {
            var presentation = _presentationService.GetSingle(presentationId);
            return Ok(presentation);
        }
    }
}
