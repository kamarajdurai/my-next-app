import "../../styles/Service.css";

export default function Service() {
  const services = [
    { id: 1, title: "Fast Delivery", description: "We deliver your products quickly and safely.", icon: "🚚" },
    { id: 2, title: "24/7 Support", description: "Our team is available anytime for assistance.", icon: "💬" },
    { id: 3, title: "Easy Returns", description: "Return your product easily within 7 days.", icon: "🔁" },
    { id: 4, title: "Secure Payments", description: "Transactions are fully encrypted and safe.", icon: "💳" },
  ];

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p className="service-subtitle">
        We offer top-notch services to enhance your shopping experience.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
