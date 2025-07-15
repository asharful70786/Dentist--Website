const locations = [
  {
    id: 1,
    name: "Nova Dental - Main Clinic",
    address: "123 Healthcare Boulevard, Suite 200",
    city: "New York, NY 10001",
    phone: "(555) 123-NOVA",
    email: "info@novadental.com",
    hours: {
      "Monday - Friday": "8:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 4:00 PM",
      "Sunday": "Emergency Only"
    },
    services: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    features: ["Parking Available", "Wheelchair Accessible", "Digital X-Rays", "Sedation Dentistry"],
    isMain: true
  },
  {
    id: 2,
    name: "Nova Dental - Downtown",
    address: "456 Medical Center Drive",
    city: "New York, NY 10002",
    phone: "(555) 456-NOVA",
    email: "downtown@novadental.com",
    hours: {
      "Monday - Friday": "7:00 AM - 7:00 PM",
      "Saturday": "8:00 AM - 3:00 PM",
      "Sunday": "Closed"
    },
    services: ["Pediatric Dentistry", "Preventive Care", "Dental Implants", "Root Canal"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    features: ["Extended Hours", "Family Friendly", "Insurance Accepted", "Emergency Care"],
    isMain: false
  }
];

export default locations;