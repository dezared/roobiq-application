namespace roobiq_server.Model.Presentation
{
    public class EditPresentationModel
    { 
        public string? PresentationId { get; set; }
        public string? JsonPresentationText { get; set; }
        public string? Name { get; set; }
        public long DateTimeUpdateTicks { get; set; }
    }
}
