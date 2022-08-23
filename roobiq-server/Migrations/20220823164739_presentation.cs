using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace roobiq_server.Migrations
{
    public partial class presentation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Presentations",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    JsonPresentationText = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    DateTimeCreateTicks = table.Column<string>(type: "text", nullable: true),
                    DateTimeUpdateTicks = table.Column<string>(type: "text", nullable: true),
                    OwnerUserId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Presentations", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Presentations");
        }
    }
}
