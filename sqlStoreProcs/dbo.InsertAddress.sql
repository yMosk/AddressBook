Alter proc dbo.InsertAddress
@Name nvarchar(50)
,@Email nvarchar(120)
,@Phone int
,@Id int OUTPUT

as
/*
------Test Code------
Declare @Name nvarchar(50) = 'Ross'
		,@Email nvarchar(120) = 'ross@test.com'
		,@Phone int = 0987654321
		,@Id int = 0

Execute dbo.InsertAddress	@Name
							,@Email
							,@Phone
							,@Id OUTPUT

Select * from dbo.Addresses
where Id = @Id

*/
BEGIN

INSERT INTO [dbo].[Addresses]
           ([Name]
           ,[Email]
           ,[Phone])
     VALUES
           (@Name
           ,@Email
           ,@Phone)
		SET @Id = SCOPE_IDENTITY();
END