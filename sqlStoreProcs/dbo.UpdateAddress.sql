Alter proc dbo.UpdateAddress
@Id int
,@Name nvarchar(50)
,@Email nvarchar(120)
,@Phone int

as
/*
------Test Code------
Declare @Id int = 6
		,@Name nvarchar(50) = 'Chandler'
		,@Email nvarchar(120) = 'chandler@test.com'
		,@Phone int = 0987654321

Select * from dbo.Addresses
where Id = @Id

Execute dbo.UpdateAddress	@Id
							,@Name
							,@Email
							,@Phone

Select * from dbo.Addresses
where Id = @Id

*/
BEGIN

UPDATE [dbo].[Addresses]
   SET [Name] = @Name
      ,[Email] = @Email
      ,[Phone] = @Phone
 WHERE [Id] = @Id

 END