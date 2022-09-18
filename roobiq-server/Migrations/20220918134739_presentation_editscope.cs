using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace roobiq_server.Migrations
{
    public partial class presentation_editscope : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ScenarioId",
                table: "Presentations",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Presentations",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ScenarioId",
                table: "Presentations");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Presentations");
        }
    }
}
