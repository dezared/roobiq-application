using Microsoft.AspNetCore.Mvc;
using roobiq_server.Data.Entity;
using roobiq_server.Model.Auth;
using roobiq_server.Model.User;
using roobiq_server.Repository.Presentation;
using roobiq_server.Repository.User;
using roobiq_server.Services.Auth;

namespace roobiq_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IAuthService _authService;
        private IUserRepository _userRepository;
        private IPresentationRepository _presentationRepository;

        public UserController(IAuthService authService, IUserRepository userRepository, IPresentationRepository presentationRepository)
        {
            this._authService = authService;
            this._userRepository = userRepository;
            this._presentationRepository = presentationRepository;
        }

        [HttpPost("updateaccountinfo")]
        public ActionResult<string> UpdateAccountInfo([FromBody] PutUserAccountInfo model)
        {
            var user = _userRepository.GetSingle(u => u.Id == model.Id);

            if (user == null)
                return BadRequest(new { systemException = "code_identity:UserNotFound" });

            user.Family = model.Family;
            user.Name = model.Name;
            user.Patronymic = model.Patronymic;

            _userRepository.Update(user);
            _userRepository.Commit();

            return Ok(user.Id);
        }

        [HttpPost("updateaccountplan")]
        public ActionResult<string> UpdateAccountPlan([FromBody] PutUserPlanInfo model)
        {
            var user = _userRepository.GetSingle(u => u.Id == model.Id);

            if (user == null)
                return BadRequest(new { systemException = "code_identity:UserNotFound" });

            user.PlanExpireDay = model.PlanExpireDay;
            user.PlanName = model.PlanName;

            _userRepository.Update(user);
            _userRepository.Commit();

            return Ok(user.Id);
        }

        [HttpGet("getaccountinfo/{userId}")]
        public ActionResult<UserAccountInfo> GetAccountInfo(string userId)
        {
            var user = _userRepository.GetSingle(u => u.Id == userId);

            if (user == null)
                return BadRequest(new { systemException = "code_identity:UserNotFound" });

            var userInfo = new UserAccountInfo()
            {
                PlanName = user.PlanName,
                PlanExpireDay = user.PlanExpireDay,
                Family = user.Family,
                Name = user.Name,
                Patronymic = user.Patronymic
            };

            return Ok(userInfo);
        }

        [HttpGet("getuserpresentationlist/{userId}")]
        public ActionResult<UserPresentationList> GetUserPresentationList(string userId)
        {
            var user = _userRepository.GetSingle(u => u.Id == userId);

            if (user == null)
                return BadRequest(new { systemException = "code_identity:UserNotFound" });

            if (user.PresentationList == null || user.PresentationList.Count == 0)
                return Ok(new List<UserPresentationList>());

            var bufferPresentationList = new List<UserPresentationData>();

            foreach(var presentationId in user.PresentationList)
            {
                var bufferPresentation = _presentationRepository.GetSingle(u => u.Id == presentationId);
                bufferPresentationList.Add(new UserPresentationData()
                {
                    Id = bufferPresentation.Id,
                    Name = bufferPresentation.Name
                });
            }

            var modelUserPresentation = new UserPresentationList()
            {
                UserPresentationDatas = bufferPresentationList
            };

            return Ok(modelUserPresentation);
        }

        [HttpPost("login")]
        public ActionResult<AuthData> Post([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (!String.IsNullOrEmpty(model.headers.AccessToken))
                return BadRequest(new { email = "code_login:HaveBeenAuthorize" });

            var user = _userRepository.GetSingle(u => u.Email == model.Email);

            if (user == null)
                return BadRequest(new { email = "code_login:NotFoundUser" });

            var passwordValid = _authService.VerifyPassword(model.Password, user.Password);

            if (!passwordValid)
                return BadRequest(new { password = "code_login:WrongPassword" });

            return Ok(_authService.GetAuthData(user.Id));
        }

        [HttpPost("register")]
        public ActionResult<AuthData> Post([FromBody] RegisterModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if(!String.IsNullOrEmpty(model.headers.AccessToken))
                return BadRequest(new { email = "code_login:HaveBeenAuthorize" });

            //_authService.ValidateUser(model.headers.AccessToken);

            var emailUniq = _userRepository.isEmailUniq(model.Email);
            if (!emailUniq) return BadRequest(new { email = "code_login:UserAlredyHas" });
            if(model.Password != model.PasswordReinput) return BadRequest(new { email = "code_login:PasswordNotSimilar" });

            var id = Guid.NewGuid().ToString();
            var user = new UserEntity
            {
                Id = id,
                Email = model.Email,
                Password = _authService.HashPassword(model.Password)
            };

            _userRepository.Add(user);
            _userRepository.Commit();

            return Ok(_authService.GetAuthData(id));
        }
    }
}