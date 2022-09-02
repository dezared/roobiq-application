namespace roobiq_server.Model.Presentation
{
    public class CreatePresentationModel
    {
        public string? OwnerUserId { get; set; }
        public string? JsonPresentationText { get; set; }
        public string? Name { get; set; }
        public long DateTimeCreateTicks { get; set; }
        public long DateTimeUpdateTicks { get; set; }
    }
}
