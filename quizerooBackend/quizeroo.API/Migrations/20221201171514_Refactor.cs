using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace quizeroo.API.Migrations
{
    public partial class Refactor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Quizes_Users_UserId1",
                table: "Quizes");

            migrationBuilder.DropForeignKey(
                name: "FK_QuizQuestions_Quizes_QuizId1",
                table: "QuizQuestions");

            migrationBuilder.DropIndex(
                name: "IX_QuizQuestions_QuizId1",
                table: "QuizQuestions");

            migrationBuilder.DropIndex(
                name: "IX_Quizes_UserId1",
                table: "Quizes");

            migrationBuilder.DropColumn(
                name: "QuizId1",
                table: "QuizQuestions");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Quizes");

            migrationBuilder.AlterColumn<int>(
                name: "QuizId",
                table: "QuizQuestions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Quizes",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_QuizQuestions_QuizId",
                table: "QuizQuestions",
                column: "QuizId");

            migrationBuilder.CreateIndex(
                name: "IX_Quizes_UserId",
                table: "Quizes",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Quizes_Users_UserId",
                table: "Quizes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QuizQuestions_Quizes_QuizId",
                table: "QuizQuestions",
                column: "QuizId",
                principalTable: "Quizes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Quizes_Users_UserId",
                table: "Quizes");

            migrationBuilder.DropForeignKey(
                name: "FK_QuizQuestions_Quizes_QuizId",
                table: "QuizQuestions");

            migrationBuilder.DropIndex(
                name: "IX_QuizQuestions_QuizId",
                table: "QuizQuestions");

            migrationBuilder.DropIndex(
                name: "IX_Quizes_UserId",
                table: "Quizes");

            migrationBuilder.AlterColumn<string>(
                name: "QuizId",
                table: "QuizQuestions",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "QuizId1",
                table: "QuizQuestions",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Quizes",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "Quizes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_QuizQuestions_QuizId1",
                table: "QuizQuestions",
                column: "QuizId1");

            migrationBuilder.CreateIndex(
                name: "IX_Quizes_UserId1",
                table: "Quizes",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Quizes_Users_UserId1",
                table: "Quizes",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_QuizQuestions_Quizes_QuizId1",
                table: "QuizQuestions",
                column: "QuizId1",
                principalTable: "Quizes",
                principalColumn: "Id");
        }
    }
}
