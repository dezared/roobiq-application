namespace roobiq_server.Data.Entity
{
    public class PresentationEntity : EntityBase
    {
        public string? JsonPresentationText { get; set; }
        public string? Name { get; set; }
        public long DateTimeCreateTicks { get; set; }
        public long DateTimeUpdateTicks { get; set; }
        public string? OwnerUserId { get; set; }
        public string? ScenarioId { get; set; }
        public string? Status { get; set; }
    }
}
