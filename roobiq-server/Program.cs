using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using roobiq_server;
using roobiq_server.Repository.Presentation;
using roobiq_server.Repository.User;
using roobiq_server.Services.Auth;
using System.Text;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var Configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: true, reloadOnChange: true).Build();
builder.Services.AddControllers();

/* Service connector area */

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IPresentationRepository, PresentationRepository>();

/* end of area */

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
    builder =>
    {
        builder.SetIsOriginAllowed(isOriginAllowed: _ => true).AllowAnyHeader().AllowAnyMethod().AllowCredentials();
    });
});
builder.Services.AddEntityFrameworkNpgsql()
                .AddDbContext<ApplicationContext>(options =>
                    options.UseNpgsql(
                        //"Server=localhost;Database=roobiq-database;Username=postgres;Password=admin;Port=5432"
                        Environment.GetEnvironmentVariable("BlogContext")
                    )
                );

var serviceProvider = builder.Services.BuildServiceProvider();
var context = serviceProvider.GetRequiredService<ApplicationContext>();
if (context.Database.GetPendingMigrations().Any())
    context.Database.Migrate();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,

                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWTSecretKey"))
                        )
                    };
                });

builder.Services.AddSingleton<IAuthService>(
                new AuthService(
                    Environment.GetEnvironmentVariable("JWTSecretKey"),
                    Convert.ToInt32(Environment.GetEnvironmentVariable("JWTLifespan"))
                )
            );

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseRouting();
app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor |
                   ForwardedHeaders.XForwardedProto
});

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
app.Run();