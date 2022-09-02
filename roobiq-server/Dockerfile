#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["roobiq-server/roobiq-server.csproj", "roobiq-server/"]
RUN dotnet restore "roobiq-server/roobiq-server.csproj"
COPY . .
WORKDIR "/src/roobiq-server"
RUN dotnet build "roobiq-server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "roobiq-server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "roobiq-server.dll"]
