using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace roobiq_server.Migrations
{
    public partial class presentation_new : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "DateTimeUpdateTicks",
                table: "Presentations",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "DateTimeCreateTicks",
                table: "Presentations",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "DateTimeUpdateTicks",
                table: "Presentations",
                type: "text",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<string>(
                name: "DateTimeCreateTicks",
                table: "Presentations",
                type: "text",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");
        }
    }
}
