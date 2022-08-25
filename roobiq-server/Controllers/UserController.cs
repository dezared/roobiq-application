using Microsoft.AspNetCore.Mvc;
using roobiq_server.Data.Entity;
using roobiq_server.Model.Auth;
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

        public UserController(IAuthService authService, IUserRepository userRepository)
        {
            this._authService = authService;
            this._userRepository = userRepository;
        }

        [HttpPost("login")]
        public ActionResult<AuthData> Post([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = _userRepository.GetSingle(u => u.Email == model.Email);

            if (user == null)
                return BadRequest(new { email = "[ERR] Пользователя с таким e-mail не существует." });

            var passwordValid = _authService.VerifyPassword(model.Password, user.Password);

            if (!passwordValid)
                return BadRequest(new { password = "[ERR] Неверный пароль" });

            return _authService.GetAuthData(user.Id);
        }

        [HttpPost("register")]
        public ActionResult<AuthData> Post([FromBody] RegisterModel model, [FromBody] UserDataRequest userDataAuth)
        {
            var bufferToken = _authService.GetAuthData(userDataAuth.headers.Id);
            var userBuffer = _userRepository.GetSingle(u => u.Id == userDataAuth.headers.Id);

            if(userBuffer != null) // если пользователь существует
            {
                if(bufferToken.Token == userDataAuth.headers.AccessToken) // если токен и айдишник равны
                    return BadRequest(new { user = "[ERR] Вы уже авторизированы." });
                else return BadRequest(new { user = "[ERR] Ошибка авторизации." });
            }

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var emailUniq = _userRepository.isEmailUniq(model.Email);
            if (!emailUniq) return BadRequest(new { email = "[ERR] Пользователя с таким e-mail уже существует." });
            if(model.Password != model.PasswordReinput) return BadRequest(new { email = "[ERR] Пароль не совпадают." });

            var id = Guid.NewGuid().ToString();
            var user = new UserEntity
            {
                Id = id,
                Email = model.Email,
                Password = _authService.HashPassword(model.Password)
            };

            _userRepository.Add(user);
            _userRepository.Commit();

            return _authService.GetAuthData(id);
        }
    }
}