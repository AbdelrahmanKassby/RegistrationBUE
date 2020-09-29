using Microsoft.EntityFrameworkCore.Migrations;

namespace RegisterationForm.Migrations
{
    public partial class add_secName_to_user : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SecoundName",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SecoundName",
                table: "Users");
        }
    }
}
